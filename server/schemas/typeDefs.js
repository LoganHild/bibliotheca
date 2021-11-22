//require global apollo server
const { gql } = require("apollo-server-express");

const typeDefs = gql`
    typeAuth {
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
    type Mutation {
        login(email: String!, password: String!): auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: BookInput!): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;