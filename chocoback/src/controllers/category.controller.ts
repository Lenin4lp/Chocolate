import { Request, Response } from "express";
import { Category } from "../models/categories.model";

// ? Get all categories
export const getCategories = async (req: Request, res: Response) => {
  const categories = await Category.findAll();
  res.json(categories);
};

// ? Get one category
export const getCategory = async (req: Request, res: Response) => {
  const category = await Category.findByPk(req.params.id);

  if (!category) return res.status(404).json({ message: "Category not found" });

  res.json({ category });
};

// ? Create category
export const createCategory = async (req: Request, res: Response) => {
  const { category_name, description } = req.body;

  try {
    const categoryFound = await Category.findOne({
      where: { category_name: category_name },
    });
    if (categoryFound) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const newCategory = await Category.create({
      category_name,
      description,
    });
    res.json(newCategory);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// ? Update category
export const updateCategory = async (req: Request, res: Response) => {
  const { category_name, description } = req.body;
  const category = await Category.findByPk(req.params.id);
  if (category) {
    await category.update({
      category_name,
      description,
    });
  } else {
    return res.status(404).json({ message: "Category not found" });
  }
  res.json(category);
};

// ? Delete category
export const deleteCategory = async (req: Request, res: Response) => {
  const category = await Category.findByPk(req.params.id);
  if (category) {
    await category.destroy();
    return res.sendStatus(204);
  } else {
    return res.status(404).json({ message: "Category not found" });
  }
};
