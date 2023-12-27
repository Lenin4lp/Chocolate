import { Sequelize } from "sequelize-typescript";
import "dotenv/config";
import { Product } from "../models/product.model";
import { Category } from "../models/categories.model";
import { Customer } from "../models/customer.model";
import { Order } from "../models/order.model";
import { OrderDetail } from "../models/order_detail.model";
import { Cacao } from "../models/cacao.model";
import { Flavor } from "../models/flavor.model";

export const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: process.env.DB_PASS,
  database: "chocolatedb",
  port: 3306,
  models: [Category, Cacao, Flavor, Product, Customer, Order, OrderDetail],
  sync: { alter: true },
});

export async function connectionDB() {
  try {
    await connection.sync();
    console.log("Si funca");
  } catch (error) {
    console.log(error);
  }
}
