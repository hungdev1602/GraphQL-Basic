export const typeDefs = `#graphql
  type Article {
    id: String,
    title: String,
    avatar: String,
    description: String
    deleted: Boolean
  }

  type Query {
    getListArticle: [Article]
  }
`