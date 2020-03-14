import React, {useState} from "react";
import {filter, map} from "lodash";
import {socket} from "#root/components/Root/Root"
import {useParams} from "react-router-dom";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {Title} from "#root/components/Shared/layout"
import generateUUID from "#root/helpers/generateUUID";

const query = gql`
  query getChannel($id: Int!) {
    channel(id:$id) {
      name
      id
      createdBy
    }
  }
`;

const ChannelDetail = () => {
  const {id} = useParams();

  const {loading, error, data} = useQuery(query, {
    variables: {id: parseInt(id)},
  });

  const [message, setMessage] = useState('');
  const [socketMessages, setSocketMessages] = useState([]);

  if (loading) return <p>Loading...</p>;

  const channel = data.channel;

  const sendMessage = () => {
    socket.emit('new message event', {
      message: message,
      sentBy: 'Jesse',
      channelId: channel.id,
      uuid: generateUUID()
    });
  };

  socket.on("score update", data => {
    setSocketMessages(data.messages);
  });

  socket.on('connectedToRoom', (data) => {
    console.log(data);
  });

  return <>
    <Title>{channel.name}</Title>
    <div>
      <input type="text" value={message} onChange={(e) => {
        setMessage(e.target.value)
      }}/>
      <button onClick={() => {sendMessage()}}>Send Message</button>
    </div>

    <div>
      <Title>Scores Here</Title>
      <div>
        <table>
          <thead>
          <tr>
            <th>score</th>
            <th>sent by</th>
            <th>Channel Id</th>
          </tr>
          </thead>
          <tbody>
            <MessageRow socketMessages={socketMessages} channelId={channel.id}/>
          </tbody>
        </table>

      </div>
    </div>
    <div>
      <Title>Connect to Room</Title>
      <div>
        <button onClick={() => {socket.emit('join', 'room1')}}>Join</button>
      </div>
    </div>
  </>
};

function MessageRow({socketMessages, channelId}) {
  const messages = filter(socketMessages, message => (
    message.channelId === channelId
  ));

  return map(messages, (message) => {
    return (
      <tr key={message.uuid}>
        <td>{message.message}</td>
        <td>{message.sentBy}</td>
        <td>{message.channelId}</td>
      </tr>
    )
  })
}


export default ChannelDetail;