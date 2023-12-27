import { Request, Response } from "express";
import { Flavor } from "../models/flavor.model";

// ? Get all flavors
export const getFlavors = async (req: Request, res: Response) => {
  const flavors = await Flavor.findAll();
  res.json(flavors);
};

// ? Get one flavor
export const getFlavor = async (req: Request, res: Response) => {
  const flavor = await Flavor.findByPk(req.params.id);
  if (!flavor) return res.status(404).json({ message: "Flavor not found" });
  res.json({ flavor });
};

// ? Create flavor
export const createFlavor = async (req: Request, res: Response) => {
  const { flavor_name, image } = req.body;
  try {
    const flavorFound = await Flavor.findOne({
      where: { flavor_name: flavor_name },
    });
    if (flavorFound) {
      return res.status(400).json({ message: "Flavor already exists" });
    }

    const newFlavor = await Flavor.create({
      flavor_name,
      image,
    });
    res.json(newFlavor);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// ? Update flavor
export const updateFlavor = async (req: Request, res: Response) => {
  const { flavor_name, image } = req.body;
  const flavorFound = await Flavor.findByPk(req.params.id);
  if (flavorFound) {
    await flavorFound.update({ flavor_name, image });
  } else {
    return res.status(404).json({ message: "Flavor not found" });
  }
  res.json(flavorFound);
};

// ? Delete flavor
export const deleteFlavor = async (req: Request, res: Response) => {
  const flavor = await Flavor.findByPk(req.params.id);
  if (flavor) {
    await flavor.destroy();
    return res.sendStatus(204);
  } else {
    return res.status(404).json({ message: "Flavor not found" });
  }
};
