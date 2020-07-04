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
	
	input EmailAddInput{
	  email: String!
	}
	
	extend type Mutation {
        addSubscriptionEmail(input:[EmailAddInput!]!): [Email]!
    }
	
`;

export const adminApiExtensions = gql`
	${commonExtensions}
	
	input EmailAddInput{
	  email: String!
	}
    
	input EmailUpdateInput{
	  id: ID!
	  email: String!
	}
	
    extend type Query {
        SubscriptionEmails: [Email!]!
    }
	
	extend type Mutation {
        addSubscriptionEmail(input:[EmailAddInput!]!): [Email]!
		updateSubscriptionEmail(input:[EmailUpdateInput!]!): [Email]!
		deleteSubscriptionEmail(id:[ID!]!): [Email]!
		deleteAllSubscriptionEmails:Boolean!
    }
	
`;


