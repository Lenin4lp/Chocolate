import {
  Model,
  Table,
  Column,
  DataType,
  BeforeCreate,
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { OrderDetail } from "./order_detail.model";
import { Product } from "./product.model";

@Table({ tableName: "order", timestamps: true })
export class Order extends Model {
  @Column({
    type: DataType.STRING(10),
    primaryKey: true,
    allowNull: true,
    field: "id_order",
    unique: true,
  })
  order_id!: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    field: "cantidad",
  })
  quantity!: string;

  @Column({
    type: DataType.DECIMAL(7, 2),
    allowNull: false,
    field: "subtotal",
  })
  subtotal!: string;

  @HasMany(() => OrderDetail)
  order_details!: OrderDetail[];

  @BelongsToMany(() => Product, {
    through: "product_order",
    foreignKey: "id_producto",
    otherKey: "id_order",
    timestamps: true,
  })
  @BeforeCreate
  static async createUUID(order: Order) {
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    const orderId = randomNumber.toString();

    order.order_id = orderId;
  }
}
