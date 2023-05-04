import express from "express";
import Products from "../models/Products.js";

const router = express.Router();

router.get("/products", async (_req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;