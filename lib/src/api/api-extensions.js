"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminApiExtensions = exports.shopApiExtensions = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const commonExtensions = graphql_tag_1.default `
  type Email implements Node {
        id: ID!
        createdAt: DateTime!
        updatedAt: DateTime!
        email: String!
    }
`;
exports.shopApiExtensions = graphql_tag_1.default `
    ${commonExtensions}
	
	input EmailAddInput{
	  email: String!
	}
	
	extend type Mutation {
        addSubscriptionEmail(input:[EmailAddInput!]!): [Email]!
    }
	
`;
exports.adminApiExtensions = graphql_tag_1.default `
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
//# sourceMappingURL=api-extensions.js.map