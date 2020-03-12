import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import styled from "styled-components";

const Description = styled.p`
  margin-bottom: 0;
`;
const Topic = styled.div`
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
    topics {
      name
      id
      createdBy
      channelId
    }
  }
`;

const Topics = () => {
  const {data, loading} = useQuery(query);

  if (loading) return "Loading...";

  return (
    <div>
      <div>
        {data.topics.map(topic => (
          <Topic key={topic.id}>
            <Title>
              {topic.name}
            </Title>
            <Description>
              {topic.createdBy}
            </Description>
          </Topic>
        ))}
      </div>
    </div>
  )
};

export default Topics;