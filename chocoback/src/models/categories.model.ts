import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { Product } from "./product.model";

@Table({ tableName: "category", timestamps: false })
export class Category extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: true,
    field: "id_categoria",
    unique: true,
  })
  category_id!: number;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    field: "nombre_categoria",
  })
  category_name!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    field: "descripcion",
  })
  description!: string;

  @BelongsToMany(() => Product, {
    through: "categoria_producto",
    foreignKey: "id_categoria",
    otherKey: "id_producto",
    timestamps: false,
  })
  products!: Product[];
}
