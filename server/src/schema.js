const gql = require("graphql-tag");

const typeDefs = gql`
"A track is a group of Modules that teaches about a specific topic"
type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesContent: Int
}
`;

module.exports = typeDefs;