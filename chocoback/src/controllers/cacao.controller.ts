import { Request, Response } from "express";
import { Cacao } from "../models/cacao.model";

// ? Get all cacaos
export const getCacaos = async (req: Request, res: Response) => {
  const cacaos = await Cacao.findAll();
  res.json(cacaos);
};

// ? Get one cacao
export const getCacao = async (req: Request, res: Response) => {
  const cacao = await Cacao.findByPk(req.params.id);
  if (!cacao) return res.status(404).json({ message: "Cacao not found" });
  res.json({ cacao });
};

// ? Create cacao
export const createCacao = async (req: Request, res: Response) => {
  const { cocoa_percentage, image } = req.body;
  try {
    const cacaoFound = await Cacao.findOne({
      where: { cocoa_percentage: cocoa_percentage },
    });
    if (cacaoFound) {
      return res.status(400).json({ message: "Cacao already exists" });
    }
    const newCacao = await Cacao.create({
      cocoa_percentage,
      image,
    });
    res.json(newCacao);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// ? Update cacao
export const updateCacao = async (req: Request, res: Response) => {
  const { cocoa_percentage, image } = req.body;
  const cacao = await Cacao.findByPk(req.params.id);
  if (cacao) {
    await cacao.update({
      cocoa_percentage,
      image,
    });
  } else {
    return res.status(404).json({ message: "Cacao not found" });
  }
  res.json(cacao);
};

// ? Delete cacao
export const deleteCacao = async (req: Request, res: Response) => {
  const cacao = await Cacao.findByPk(req.params.id);
  if (cacao) {
    await cacao.destroy();
    return res.sendStatus(204);
  } else {
    return res.status(404).json({ message: "Cacao not found" });
  }
};
