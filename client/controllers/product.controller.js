import grpc from "@grpc/grpc-js"
import protoLoader from "@grpc/proto-loader"
const protoPath = "../protos/product.proto"
const productProto = protoLoader.loadSync(protoPath)
const { productPackage } = grpc.loadPackageDefinition(productProto)
const productServiceURL = "localhost:4001"
const productClient = new productPackage.ProductService(productServiceURL, grpc.credentials.createInsecure())


export const listProduct = (req, res, next) => {
    productClient.listProduct(null, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
}
export const getProduct = (req, res, next) => {
    const { id } = req.params 
    productClient.getProduct({ id:+id }, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
}
export const createProduct = (req, res, next) => {
    const { title, price } = req.query
    productClient.createProduct({ title, price }, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
}
export const updateProduct = (req, res, next) => {

}
export const deleteProduct = (req, res, next) => {
    const { id } = req.params 
    productClient.deleteProduct({ id:+id }, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
}