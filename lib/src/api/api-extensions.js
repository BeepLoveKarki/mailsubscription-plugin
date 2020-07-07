"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminApiExtensions = exports.shopApiExtensions = void 0;
const apollo_server_core_1 = require("apollo-server-core");
const commonExtensions = apollo_server_core_1.gql `
  type Email implements Node {
        id: ID!
        createdAt: DateTime!
        updatedAt: DateTime!
        email: String!
    }
`;
exports.shopApiExtensions = apollo_server_core_1.gql `
    ${commonExtensions}
	
	input EmailAddInput{
	  email: String!
	}
	
	extend type Mutation {
        addSubscriptionEmail(input:[EmailAddInput!]!): [Email]!
    }
	
`;
exports.adminApiExtensions = apollo_server_core_1.gql `
	${commonExtensions}
	
	input EmailAddInput{
	  email: String!
	}
    
	input EmailUpdateInput{
	  id: ID!
	  email: String!
	}
	
	type EmailList implements PaginatedList {
     items: [Email!]!
     totalItems: Int!
    }
	
    extend type Query {
        SubscriptionEmails(options: EmailListOptions): EmailList!
		SubscriptionEmail(id:ID!):Email
    }
	
	extend type Mutation {
        addSubscriptionEmail(input:[EmailAddInput!]!): [Email]!
		updateSubscriptionEmail(input:[EmailUpdateInput!]!): [Email]!
		deleteSubscriptionEmail(id:[ID!]!): [Email]!
		deleteAllSubscriptionEmails: Boolean!
    }
	input EmailListOptions
`;
//# sourceMappingURL=api-extensions.js.map