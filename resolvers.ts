import { Article } from "./models/article.model"

export const resolvers = {
  Query: {
    getListArticle: async () => {
      const articles = await Article.find({
        deleted: false
      })

      return articles
    },

    getArticleById: async (_: any, args: any) => {
      const { id } = args
      
      const article = await Article.findOne({
        _id: id,
        deleted: false
      })

      return article
    }
  },

  Mutation: {
    createArticle: async (_: any, args: any) => {
      const { article } = args

      const newRecord = new Article(article)
      await newRecord.save()

      return newRecord
    }
  }
}