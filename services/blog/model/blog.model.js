import mongoose, { model } from "mongoose";

const BlogSchema = mongoose.Schema({
    id:{type:Number},
    title:{type:String},
    text:{type:String}
})

BlogSchema.pre("save", async function () {
  if (this.id) return;

  const count = await this.constructor.countDocuments();
  this.id = count + 1;
});


const productModel = mongoose.model("Blog",BlogSchema)

export {productModel}
