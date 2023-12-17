import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BeforeCreate,
  BelongsToMany,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { Order } from "./order.model";

@Table({ tableName: "products", timestamps: false })
export class Product extends Model {
  @Column({
    type: DataType.STRING(10),
    primaryKey: true,
    allowNull: true,
    field: "id_producto",
    unique: true,
  })
  product_id!: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
    field: "nombre_producto",
  })
  product_name!: string;

  @Column({
    type: DataType.STRING(4),
    allowNull: false,
    field: "porcentaje_cacao",
  })
  cocoa_percentage!: string;

  @Column({
    type: DataType.DECIMAL(5, 2),
    allowNull: false,
    field: "gramaje",
  })
  weight!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    field: "sabor",
  })
  flavor!: string;

  @Column({
    type: DataType.DECIMAL(5, 2),
    allowNull: false,
    field: "costo_producto",
  })
  product_price!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    field: "categoria_producto",
  })
  product_category!: string;

  @BelongsToMany(() => Order, {
    through: "order_product",
    foreignKey: "id_producto",
    otherKey: "id_orden",
    timestamps: true,
  })
  @BeforeCreate
  static async createUUID(product: Product) {
    const uuid = uuidv4().substring(0, 10);
    product.product_id = uuid;
  }
}
