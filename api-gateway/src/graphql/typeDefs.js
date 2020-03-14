import { gql } from "apollo-server";

const typeDefs = gql`  

  type Topic {
    name: String!
    id: ID!
    createdBy: String!
    channelId: ID!
  }
  
  type Channel {
    name: String!
    id: ID!
    createdBy: String!
  }
  
  type Score {
    score: String!
    createdBy: String!
    id: ID!
    topicID: ID!
  }
  
  type Mutation {
    createTopic(name: String!, createdBy: String!, channelId: ID!): Topic!
    createChannel(name: String!, createdBy: String!): Channel!
    createScore(name: String!, createdBy: String!, topicId: ID!): Score!
  }
  
  type Query {
    topics: [Topic!]!
    channels: [Channel!]!
    channel(id:Int!): Channel
  }
`;

export default typeDefs;