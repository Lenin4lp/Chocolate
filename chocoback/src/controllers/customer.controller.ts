import { Request, Response } from "express";
import { Customer } from "../models/customer.model";

// ? Get all customers

export const getCustomers = async (req: Request, res: Response) => {
  const customers = await Customer.findAll();
  res.json(customers);
};

// ? Get one customer

export const getCustomer = async (req: Request, res: Response) => {
  const customer = await Customer.findByPk(req.params.id);

  if (!customer) return res.status(404).json({ message: "Customer not found" });

  res.json({ customer });
};

// ? Create customer

export const createCustomer = async (req: Request, res: Response) => {
  const {
    customer_name,
    customer_lastname,
    customer_email,
    address,
    postal_code,
    country,
    phone,
  } = req.body;
  try {
    const newCustomer = await Customer.create({
      customer_name,
      customer_lastname,
      customer_email,
      address,
      postal_code,
      country,
      phone,
    });
    res.json(newCustomer);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// ? Update customer
export const updateCustomer = async (req: Request, res: Response) => {
  const {
    customer_name,
    customer_lastname,
    customer_email,
    address,
    postal_code,
    country,
    phone,
  } = req.body;
  const customer = await Customer.findByPk(req.params.id);
  if (customer) {
    await customer.update({
      customer_name,
      customer_lastname,
      customer_email,
      address,
      postal_code,
      country,
      phone,
    });
  } else {
    return res.status(404).json({ message: "Customer not found" });
  }
  res.json(customer);
};

// ? Delete customer
export const deleteCustomer = async (req: Request, res: Response) => {
  const customer = await Customer.findByPk(req.params.id);
  if (customer) {
    await customer.destroy();
    return res.sendStatus(204);
  } else {
    return res.status(404).json({ message: "Customer not found" });
  }
};
