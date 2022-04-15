import { publicDecrypt } from "crypto";
import multer from "fastify-multer";
import path from "path";

import * as CarsController from "../controllers/Carro-controller.js";
import * as BrandsController from "../controllers/Marca-controller.js";

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + Date.now() + extension);
  },
});

const upload = multer({ storage });

const routes = [
  {
    method: "GET",
    url: "/carro",
    handler: CarsController.GET,
  },
  {
    method: "POST",
    url: "/carro",
    preHandler: upload.single("cover"),
    handler: CarsController.POST,
  },
  {
    method: "PUT",
    url: "/carro",
    handler: CarsController.PUT,
  },
  {
    method: "DELETE",
    url: "/carro",
    handler: CarsController.DELETE,
  },

  // brand
  {
    method: "GET",
    url: "/marca",
    handler: BrandsController.GET,
  },
  {
    method: "POST",
    url: `/marca`,
    handler: BrandsController.POST,
  },
  {
    method: "PUT",
    url: `/marca`,
    handler: BrandsController.PUT,
  },
  {
    method: "DELETE",
    url: `/marca`,
    handler: BrandsController.DELETE,
  },
];

export default (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};
