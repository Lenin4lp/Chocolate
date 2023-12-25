import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { Order } from "./order.model";
import { Product } from "./product.model";

@Table({ tableName: "order_detail", timestamps: false })
export class OrderDetail extends Model {
  @Column({
    type: DataType.STRING(10),
    primaryKey: true,
    allowNull: true,
    field: "id_order_detail",
    unique: true,
  })
  order_detail_id!: string;

  @Column({
    type: DataType.DECIMAL(7, 2),
    allowNull: false,
    field: "precio",
  })
  price!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: "cantidad",
  })
  quantity!: number;

  @ForeignKey(() => Order)
  @Column({
    type: DataType.STRING(10),
    allowNull: false,
    field: "id_order",
  })
  order_id!: string;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.STRING(10),
    allowNull: false,
    field: "id_producto",
  })
  product_id!: string;

  @BelongsTo(() => Order)
  order!: Order;

  @BelongsTo(() => Product)
  product!: Product;
}
