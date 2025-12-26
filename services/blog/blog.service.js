// server.js
import { db } from "./config/db.connection.js";
import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

import { createBlog , updateBlog , deleteBlog , listBlog , getBlog } from "./functions/rpc.funcs.js";
const packageDefinition = protoLoader.loadSync("../../protos/blog.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const blogProto = grpc.loadPackageDefinition(packageDefinition).BlogPackage;

const BlogServiceURL = "0.0.0.0:4002";

function main() {
  const server = new grpc.Server();

  server.addService(blogProto.BlogService.service, {
    listBlog,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog,
  });

  server.bindAsync(BlogServiceURL, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) return console.error("gRPC server error:", err.message);
    console.log("gRPC service running on port", port);
  });
}


db.then(() => main());
