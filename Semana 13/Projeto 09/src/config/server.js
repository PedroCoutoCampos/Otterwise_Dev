import Fastify from "fastify";
import fastifyStatic from "fastify-static";
import multer from "fastify-multer";
import cors from "fastify-cors";

import postsRoutes from "../routes/posts-routes.js";
import path from "path";

const __dirname = path.resolve();

const fastify = Fastify({
  logger: true,
});

fastify.register(multer.contentParser);

fastify.register(fastifyStatic, {
  root: path.join(__dirname, "public"),
  prefix: "/public/",
});

fastify.register(cors, {
  origin: (origin, cb) => {
    cb(null, true);
    return;
  },
});

fastify.register(postsRoutes);

export default fastify;
