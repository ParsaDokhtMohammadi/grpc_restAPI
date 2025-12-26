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
  try {
    const { id } = call.request;
    const product = await productModel.findOne({ id: Number(id) }).lean();
    callback(null, {
      id: product.id,
      title: product.title,
      price: product.price,
    });

  } catch (err) {
    callback(err);
  }
};

export const createProduct = async (call, callback) => {
    try {
        const { title, price } = call.request
        await productModel.create({ title, price })
        callback(null, { status: 200 })
    } catch (err) {
        callback(err, null)
    }
}
export const updateProduct = async (call, callback) => {

}
export const deleteProduct = async (call, callback) => {
try {
    const { id } = call.request;
    const result = await productModel.deleteOne({ id: Number(id) });
    if (result.deletedCount > 0) return callback(null,{status:200})
      return callback({message:"product not found"},null)
  } catch (err) {
    callback(err);
  }
}