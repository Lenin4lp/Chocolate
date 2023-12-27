import {
  Model,
  Table,
  Column,
  DataType,
  AutoIncrement,
  BelongsToMany,
} from "sequelize-typescript";
import { Product } from "./product.model";

@Table({ tableName: "cacao", timestamps: false })
export class Cacao extends Model {
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    field: "id_cacao",
    unique: true,
  })
  cacao_id!: number;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
    field: "porcentaje_cacao",
  })
  cocoa_percentage!: string;

  @BelongsToMany(() => Product, {
    through: "cacao_producto",
    foreignKey: "id_cacao",
    otherKey: "id_producto",
    timestamps: false,
  })
  products!: Product[];
}
