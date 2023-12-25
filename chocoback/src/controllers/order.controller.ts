import { Request, Response } from "express";
import { Order } from "../models/order.model";

// ? Get all orders
export const getOrders = async (req: Request, res: Response) => {
  const orders = await Order.findAll();
  res.json(orders);
};

// ? Get one order
export const getOrder = async (req: Request, res: Response) => {
  const order = await Order.findByPk(req.params.id);
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json({ order });
};

// ? Create order
export const createOrder = async (req: Request, res: Response) => {
  const { amount, order_email, order_status } = req.body;
  try {
    const newOrder = await Order.create({
      amount,
      order_email,
      order_status,
    });
    res.json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// ? Update order
export const updateOrder = async (req: Request, res: Response) => {
  const { amount, order_email, order_status } = req.body;
  const order = await Order.findByPk(req.params.id);
  if (order) {
    await order.update({
      amount,
      order_email,
      order_status,
    });
  } else {
    return res.status(404).json({ message: "Order not found" });
  }
  res.json(order);
};

// ? Delete order
export const deleteOrder = async (req: Request, res: Response) => {
  const order = await Order.findByPk(req.params.id);
  if (order) {
    await order.destroy();
    return res.sendStatus(204);
  } else {
    return res.status(404).json({ message: "Order not found" });
  }
};
