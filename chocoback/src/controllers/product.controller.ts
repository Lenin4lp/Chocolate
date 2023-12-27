import { Request, Response } from "express";
import { Product } from "../models/product.model";
import { connection } from "../connection/connection";

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
    image,
    on_stock,
    weight,
    flavor,
    product_price,
    max_price,
    product_category,
  } = req.body;
  try {
    const newProduct = await Product.create({
      product_name,
      image,
      on_stock,
      max_price,
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
    image,
    on_stock,
    max_price,
    weight,
    flavor,
    product_price,
    product_category,
  } = req.body;
  const product = await Product.findByPk(req.params.id);
  if (product) {
    await product.update({
      product_name,
      image,
      on_stock,
      max_price,
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

// ? Add product to a category
export const addProductToCategory = async (req: Request, res: Response) => {
  const { id: product_id } = req.params;
  const { category_id } = req.body;

  try {
    const query = `INSERT INTO categoria_producto (id_categoria, id_producto) VALUES (?, ?)`;
    await connection.query(query, { replacements: [category_id, product_id] });
    res.status(200).json({ message: "Product added to category" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// ? Delete product from a category
export const deleteProductFromCategory = async (
  req: Request,
  res: Response
) => {
  const { id: product_id } = req.params;
  const { category_id } = req.body;

  try {
    const query = `DELETE FROM categoria_producto WHERE id_producto = ? AND id_categoria = ?`;
    await connection.query(query, { replacements: [product_id, category_id] });
    res.status(200).json({ message: "Product deleted from category" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// ? Add Flavor to a Product
export const addFlavorToProduct = async (req: Request, res: Response) => {
  const { id: product_id } = req.params;
  const { flavor_id } = req.body;
  try {
    const query = `INSERT INTO sabor_producto (id_producto, id_sabor) VALUES (?, ?)`;
    await connection.query(query, { replacements: [product_id, flavor_id] });
    res.status(200).json({ message: "Flavor added to product" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// ? Delete Flavor from a Product
export const deleteFlavorFromProduct = async (req: Request, res: Response) => {
  const { id: product_id } = req.params;
  const { flavor_id } = req.body;
  try {
    const query = `DELETE FROM sabor_producto WHERE id_producto = ? AND id_sabor = ?`;
    await connection.query(query, { replacements: [product_id, flavor_id] });
    res.status(200).json({ message: "Flavor deleted from product" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// ? Add cacao percentage
export const addCacaoPercentage = async (req: Request, res: Response) => {
  const { id: product_id } = req.params;
  const { cacao_id } = req.body;

  try {
    const query = `INSERT INTO cacao_producto (id_producto, id_cacao) VALUES (?, ?)`;
    await connection.query(query, { replacements: [product_id, cacao_id] });
    res.status(200).json({ message: "Cacao percentage added to product" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// ? Delete cacao percentage
export const deleteCacaoPercentage = async (req: Request, res: Response) => {
  const { id: product_id } = req.params;
  const { cacao_id } = req.body;
  try {
    const query = `DELETE FROM cacao_producto WHERE id_producto = ? AND id_cacao = ?`;
    await connection.query(query, { replacements: [product_id, cacao_id] });
    res.status(200).json({ message: "Cacao percentage deleted from product" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
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
