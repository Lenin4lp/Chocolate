import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  AutoIncrement,
  BelongsToMany,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { Product } from "./product.model";

@Table({ tableName: "order", timestamps: true })
export class Order extends Model {
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: true,
    field: "id_orden",
    unique: true,
  })
  order_id!: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
    field: "nombre_usuario",
  })
  user_name!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    field: "region",
  })
  user_region!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    field: "ciudad",
  })
  user_city!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    field: "provincia",
  })
  user_state!: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
    field: "codigo_postal",
  })
  postal_code!: string;

  @Column({
    type: DataType.STRING(150),
    allowNull: false,
    field: "direccion",
  })
  address!: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
    field: "user_email",
  })
  user_email!: string;

  @Column({
    type: DataType.DECIMAL(5, 2),
    allowNull: false,
    field: "costo_total",
  })
  total_cost!: number;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    field: "cantidad_producto",
  })
  quantity!: string;

  @BelongsToMany(() => Product, {
    through: "order_product",
    foreignKey: "id_orden",
    otherKey: "id_producto",
    timestamps: true,
  })
  products!: Product[];
}
