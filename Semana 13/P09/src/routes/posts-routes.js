import { publicDecrypt } from "crypto";
import multer from "fastify-multer";
import path from "path";

import * as CarsController from "../controllers/Cars-controller.js";
import * as BrandsController from "../controllers/Brands-controller.js";

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
    url: "/cars",
    handler: CarsController.GET,
  },
  {
    method: "POST",
    url: "/cars",
    preHandler: upload.single("cover"),
    handler: CarsController.POST,
  },
  {
    method: "PUT",
    url: "/cars",
    handler: CarsController.PUT,
  },
  {
    method: "DELETE",
    url: "/cars",
    handler: CarsController.DELETE,
  },

  // brand
  {
    method: "GET",
    url: "/brands",
    handler: BrandsController.GET,
  },
  {
    method: "POST",
    url: `/brands`,
    handler: BrandsController.POST,
  },
  {
    method: "PUT",
    url: `/brands`,
    handler: BrandsController.PUT,
  },
  {
    method: "DELETE",
    url: `/brands`,
    handler: BrandsController.DELETE,
  },
];

export default (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};
