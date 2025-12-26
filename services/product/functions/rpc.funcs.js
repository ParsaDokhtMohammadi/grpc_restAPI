import { productModel } from "../model/product.mpdel.js"
export const listProduct = async (call, callback) => {
    try {
        const products = await productModel.find({})
        callback(null, { products })
    } catch (err) {
        callback(err, null)
    }
}
export const getProduct = async (call, callback) => {

}
export const createProduct = async (call, callback) => {
 try{
    const {title,price} = call.request
    await productModel.create({title,price})
    callback(null,{status:200})
 }catch(err){
    callback(err,null)
 }
}
export const updateProduct = async (call, callback) => {

}
export const deleteProduct = async (call, callback) => {

}