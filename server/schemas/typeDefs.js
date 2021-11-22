//require global apollo server
const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Auth {
        token: ID!
        user: User
    }
    type User {
        _id: ID
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: String!
        authors: [String]
        description: String!
        image: String!
        link: String!
        title: String!
    }
    type Query {
        me: User
    }
`;

module.exports = typeDefs;