import express from "express"
import { ProductRouter } from "./routes/product.routes.js"
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use("/products",ProductRouter)

app.listen(4000,()=>{
    console.log("client running on port 4000");
})