import { Request, Response } from "express";
import { Product } from "../models/product.model";

// ? Get all products

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.findAll();
  res.json(products);
};

// ? Get one product

export const getProduct = async (req: Request, res: Response) => {
  const product = await Product.findByPk(req.params.id);

  if (!product) return res.status(404).json({ message: "Product not found" });

  res.json({ product });
};

// ? Create product

export const createProduct = async (req: Request, res: Response) => {
  const {
    product_name,
    cocoa_percentage,
    weight,
    flavor,
    product_price,
    product_category,
  } = req.body;
  try {
    const productFound = await Product.findOne({
      where: { product_name: product_name },
    });
    if (productFound) {
      return res.status(400).json({ message: "Product already exists" });
    }

    const newProduct = await Product.create({
      product_name,
      cocoa_percentage,
      weight,
      flavor,
      product_price,
      product_category,
    });
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// ? Update product

export const updateProduct = async (req: Request, res: Response) => {
  const {
    product_name,
    cocoa_percentage,
    weight,
    flavor,
    product_price,
    product_category,
  } = req.body;
  const product = await Product.findByPk(req.params.id);
  if (product) {
    await product.update({
      product_name,
      cocoa_percentage,
      weight,
      flavor,
      product_price,
      product_category,
    });
  } else {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
};

// ? Delete product
export const deleteProduct = async (req: Request, res: Response) => {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    await product.destroy();
    return res.sendStatus(204);
  } else {
    return res.status(404).json({ message: "Product not found" });
  }
};
