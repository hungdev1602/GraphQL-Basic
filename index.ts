import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import { connectDB } from "./configs/database"
import { Article } from "./models/article.model"
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone';
dotenv.config()

const startSever = async () => {
  const app: Express = express()
  const port: number = 3000

  connectDB()

  // REST API ==================================================================

  // app.get("/articles", async (req: Request, res: Response) => {
  //   const articles = await Article.find({
  //     deleted: false
  //   })
  //   res.json({
  //     articles: articles
  //   })
  // })

  // END REST API ==================================================================

  // GraphQL API ==================================================================
  const typeDefs = `#graphql
    type Query {
      hello: String
    }
  `

  const resolvers = {
    Query: {
      hello: () => {
        return "Hello world!"
      }
    }
  }

  const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
  })

  // startStandaloneServer sẽ tự động tạo Express app riêng
  const { url } = await startStandaloneServer(apolloServer, {
    listen: { port: port },
  });

  console.log(`🚀 GraphQL Server ready at: ${url}`);


  // END GraphQL API ==================================================================

  // app.listen(port, () => {
  //   console.log(`App listening on port ${port}`)
  // })
}

startSever()