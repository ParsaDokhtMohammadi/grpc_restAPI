// server.js
import { db } from "./config/db.connection.js";
import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import path from "path";
import { createProduct, deleteProduct, getProduct, listProduct, updateProduct } from "./functions/rpc.funcs.js";
const packageDefinition = protoLoader.loadSync("../../protos/product.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const productProto = grpc.loadPackageDefinition(packageDefinition).productPackage;

const productServiceURL = "0.0.0.0:4001";

function main() {
  const server = new grpc.Server();

  server.addService(productProto.ProductService.service, {
    listProduct,
    updateProduct,
    createProduct,
    getProduct,
    deleteProduct,
  });

  server.bindAsync(productServiceURL, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) return console.error("gRPC server error:", err.message);
    console.log("gRPC service running on port", port);
  });
}

// Ensure DB is connected before starting gRPC server
db.then(() => main());
