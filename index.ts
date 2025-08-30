import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import { connectDB } from "./configs/database"
import { Article } from "./models/article.model"

dotenv.config()

const app: Express = express()
const port: number = 3000

connectDB()

app.get("/articles", async (req: Request, res: Response) => {
  const articles = await Article.find({
    deleted: false
  })
  res.json(articles)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})