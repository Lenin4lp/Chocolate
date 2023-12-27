import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany,
  BeforeCreate,
} from "sequelize-typescript";
import { Product } from "./product.model";
import { v4 as uuidv4 } from "uuid";

@Table({ tableName: "sabor", timestamps: false })
export class Flavor extends Model {
  @Column({
    type: DataType.STRING(10),
    allowNull: true,
    field: "id_sabor",
  })
  flavor_id!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    field: "nombre_sabor",
  })
  flavor_name!: string;

  @Column({
    type: DataType.STRING(150),
    allowNull: false,
    field: "imagen",
  })
  image!: string;

  @BelongsToMany(() => Product, {
    through: "sabor_producto",
    foreignKey: "id_sabor",
    otherKey: "id_producto",
    timestamps: false,
  })
  products!: Product[];

  @BeforeCreate
  static async createUUID(instance: Flavor) {
    const uuid = uuidv4().substring(0, 9);
    instance.flavor_id = uuid;
  }
}
