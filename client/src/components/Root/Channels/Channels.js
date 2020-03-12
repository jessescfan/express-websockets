import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import styled from "styled-components";


const Description = styled.p`
  margin-bottom: 0;
`;
const Channel = styled.div`
  padding: 1rem 0;
  
  :not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.veryLightGrey};
  }
`;

const Title = styled.strong`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
`;

const query = gql`
  {
    channels {
      name
      id
      createdBy
    }
  }
`;

const Channels = () => {
  const {data, loading} = useQuery(query);

  if (loading) return "Loading...";

  return (
    <div>
      <div>
        {data.channels.map(channel => (
          <Channel key={channel.id}>
            <Title>
              {channel.name}
            </Title>
            <Description>
              {channel.createdBy}
            </Description>
          </Channel>
        ))}
      </div>
    </div>
  )
};

export default Channels;