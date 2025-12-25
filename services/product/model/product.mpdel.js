import mongoose, { model } from "mongoose";

const ProductSchema = mongoose.Schema({
    id:{type:Number},
    title:{type:String},
    price:{type:String}
})

ProductSchema.pre("save",function(next){
    const self = this
    self.constractor.count(async function(err,data){
        if(err) return next(err)
        model.set({id:data + 1})
        next()
    })
})

const productModel = mongoose.model("product",ProductSchema)

export {productModel}
