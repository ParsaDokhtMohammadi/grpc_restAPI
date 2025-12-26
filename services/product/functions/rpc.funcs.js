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
    console.log(id);
    
    
    const product = await productModel.findOne({ id: Number(id) }).lean();

    // If this logs correctly, your DB is fine
    console.log(product);

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

}