import gql from 'graphql-tag';

const commonExtensions = gql `
  type Email implements Node {
        id: ID!
        createdAt: DateTime!
        updatedAt: DateTime!
        email: String!
    }
	
`;


export const shopApiExtensions = gql`
    ${commonExtensions}
    
	extend type Mutation {
        addSubsciptionEmail(email:String!): Email!
    }
	
`;

export const adminApiExtensions = gql`
	${commonExtensions}
    
    extend type Query {
        SubscriptionEmails: [Email!]!
    }
	
	extend type Mutation {
        addSubsciptionEmail(email:String!): Email!
        updateSubscriptionEmail(id: ID!,email:String!): Email!
        deleteSubscriptionEmail(id: ID!): Email!
    }
	
`;


