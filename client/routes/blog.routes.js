import {Router} from "express"
import { listBlog , deleteBlog , getBlog , updateBlog , createBlog } from "../controllers/blog.controller.js"
const blogRouter = Router()
blogRouter.get("/list",listBlog)
blogRouter.get("/create",createBlog)
blogRouter.get("/delete/:id",deleteBlog)
blogRouter.get("/update",updateBlog)
blogRouter.get("/:id",getBlog)

export {blogRouter}