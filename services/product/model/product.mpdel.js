import mongoose, { model } from "mongoose";

const ProductSchema = mongoose.Schema({
    id:{type:Number},
    title:{type:String},
    price:{type:String}
})

ProductSchema.pre("save", async function () {
  if (this.id) return;

  const count = await this.constructor.countDocuments();
  this.id = count + 1;
});


const productModel = mongoose.model("product",ProductSchema)

export {productModel}
