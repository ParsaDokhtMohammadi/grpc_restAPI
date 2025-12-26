import {BlogModel} from "../model/blog.model.js"
export const listBlog = async (call, callback) => {
    try {
        const products = await BlogModel.find({})
        callback(null, { products })
    } catch (err) {
        callback(err, null)
    }
}
export const getBlog = async (call, callback) => {
  try {
    const { id } = call.request;
    const product = await BlogModel.findOne({ id: Number(id) }).lean();
    callback(null, {
      id: product.id,
      title: product.title,
      text: product.text,
    });

  } catch (err) {
    callback(err);
  }
};

export const createBlog = async (call, callback) => {
    try {
        const { title, text } = call.request
        await BlogModel.create({ title, text })
        callback(null, { status: 200 })
    } catch (err) {
        callback(err, null)
    }
}
export const updateBlog = async (call, callback) => {
  try {
    const { id } = call.request;
    const data = call.request 
    delete data.id
    const result = await BlogModel.updateOne({ id: Number(id) },{$set:data});
    if (result.modifiedCount > 0) return callback(null,{status:200})
      return callback({message:"update failed"},null)
  } catch (err) {
    callback(err);
  }
}
export const deleteBlog = async (call, callback) => {
try {
    const { id } = call.request;
    const result = await BlogModel.deleteOne({ id: Number(id) });
    if (result.deletedCount > 0) return callback(null,{status:200})
      return callback({message:"product not found"},null)
  } catch (err) {
    callback(err);
  }
}