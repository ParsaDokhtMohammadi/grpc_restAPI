import grpc from "@grpc/grpc-js"
import protoLoader from "@grpc/proto-loader"
const protoPath = "../protos/blog.proto"
const productProto = protoLoader.loadSync(protoPath)
const { BlogPackage } = grpc.loadPackageDefinition(productProto)
const BlogServiceURL = "localhost:4002"
const BlogClient = new BlogPackage.BlogService(BlogServiceURL, grpc.credentials.createInsecure())


export const listBlog = (req, res, next) => {
    BlogClient.listBlog(null, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
}
export const getBlog = (req, res, next) => {
    const { id } = req.params 
    BlogClient.getBlog({ id:+id }, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
}
export const createBlog = (req, res, next) => {
    const { title, text } = req.query
    BlogClient.createBlog({ title, text }, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
}
export const updateBlog = (req, res, next) => {
 
    const data = req.query
    BlogClient.updateBlog(data,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}
export const deleteBlog = (req, res, next) => {
    const { id } = req.params 
    BlogClient.deleteBlog({ id:+id }, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
}