import { Router } from "express";
import controller from "../controller/product.controller.js";
const { getAllProduct, getAllProductTesting, getAllProductTesting1 } =
  controller;

const router = Router();

router.route("/").get(getAllProduct);
router.route("/testing").get(getAllProductTesting);
router.route("/testing1").get(getAllProductTesting1);

export default router;
