import grpc from "@grpc/grpc-js"
import protoLoader from "@grpc/proto-loader"
const protoPath = "../../protos/product.proto"
const productProto = protoLoader.loadSync(protoPath)
const {productPackage} = grpc.loadPackageDefinition(productProto)
const productServiceURL = "localhost:4001"
const productClient = new productPackage.ProductService(productServiceURL,grpc.credentials.createInsecure())


const listProduct = async(req , res , next)=>{

}
 const getProduct = async(req , res , next)=>{

}
 const createProduct = async(req , res , next)=>{
    
}
 const updateProduct = async(req , res , next)=>{
    
}
 const deleteProduct = async(req , res , next)=>{
    
}