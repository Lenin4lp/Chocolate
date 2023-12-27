import { Request, Response } from "express";
import { OrderDetail } from "../models/order_detail.model";

// ? Get all orders

export const getOrdersDetail = async (req: Request, res: Response) => {
  const orders = await OrderDetail.findAll();
  res.json(orders);
};

export const getOrderDetail = async (req: Request, res: Response) => {
  const order = await OrderDetail.findByPk(req.params.id);
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json({ order });
};

export const createOrderDetail = async (req: Request, res: Response) => {
  const { price, quantity, order_id, product_id } = req.body;
  try {
    const newOrder = await OrderDetail.create({
      price,
      quantity,
      order_id,
      product_id,
    });
    res.json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateOrderDetail = async (req: Request, res: Response) => {
  const { price, quantity, order_id, product_id } = req.body;
  const order = await OrderDetail.findByPk(req.params.id);
  if (order) {
    await order.update({
      price,
      quantity,
      order_id,
      product_id,
    });
  } else {
    return res.status(404).json({ message: "Order not found" });
  }
  res.json(order);
};

export const deleteOrderDetail = async (req: Request, res: Response) => {
  const order = await OrderDetail.findByPk(req.params.id);
  if (order) {
    await order.destroy();
    return res.sendStatus(204);
  } else {
    return res.status(404).json({ message: "Order not found" });
  }
};
