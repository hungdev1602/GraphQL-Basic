export const typeDefs = `#graphql
  type Article {
    id: String,
    title: String,
    avatar: String,
    description: String
    deleted: Boolean
  }

  type Query {
    getListArticle: [Article],
    getArticleById(id: String): Article
  }

  input ArticleInput {
    title: String,
    avatar: String,
    description: String
  }

  type Mutation {
    createArticle(article: ArticleInput): Article
  }
`