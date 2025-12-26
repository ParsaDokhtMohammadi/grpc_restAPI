import {Router} from "express"
import {listProduct,createProduct, deleteProduct, updateProduct, getProduct} from "../controllers/product.controller.js"
const ProductRouter = Router()
ProductRouter.get("/list",listProduct)
ProductRouter.get("/create",createProduct)
ProductRouter.get("/delete",deleteProduct)
ProductRouter.get("/update",updateProduct)
ProductRouter.get("/:id",getProduct)

export {ProductRouter}