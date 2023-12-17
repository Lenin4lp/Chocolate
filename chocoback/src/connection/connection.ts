import { Sequelize } from "sequelize-typescript";
import "dotenv/config";
import { Product } from "../models/product.model";
import { Order } from "../models/order.model";

export const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: Number(process.env.DB_PORT),
  username: "root",
  password: process.env.DB_PASS,
  database: "chocolatedb",
  models: [Product, Order],
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
