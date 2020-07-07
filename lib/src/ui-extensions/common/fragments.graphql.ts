import gql from 'graphql-tag';

export const MAIL_SUBSCRIPTION_FRAGMENT = gql`
    fragment SubscribedEmails on Email {
        id
        createdAt
        updatedAt
        email
    }
`;
