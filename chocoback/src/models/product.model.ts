import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BeforeCreate,
  BelongsToMany,
  HasMany,
  BelongsTo,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { Category } from "./categories.model";
import { OrderDetail } from "./order_detail.model";
import { Cacao } from "./cacao.model";
import { Flavor } from "./flavor.model";
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
    type: DataType.STRING(50),
    allowNull: false,
    field: "nombre_producto",
  })
  product_name!: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
    field: "gramaje",
  })
  weight!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    field: "sabor",
  })
  flavor!: boolean;

  @Column({
    type: DataType.DECIMAL(5, 2),
    allowNull: false,
    field: "costo_producto",
  })
  product_price!: number;

  @Column({
    type: DataType.DECIMAL(5, 2),
    allowNull: false,
    field: "costo_maximo",
  })
  max_price!: number;

  @Column({
    type: DataType.STRING(150),
    allowNull: false,
    field: "image",
  })
  image!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    field: "en_stock",
  })
  on_stock!: boolean;

  @BelongsToMany(() => Category, {
    through: "categoria_producto",
    foreignKey: "id_producto",
    otherKey: "id_categoria",
    timestamps: false,
  })
  categories!: Category[];

  @BelongsToMany(() => Cacao, {
    through: "cacao_producto",
    foreignKey: "id_producto",
    otherKey: "id_cacao",
    timestamps: false,
  })
  cacao!: Cacao[];

  @BelongsToMany(() => Flavor, {
    through: "sabor_producto",
    foreignKey: "id_producto",
    otherKey: "id_sabor",
    timestamps: false,
  })
  flavors!: Flavor[];

  @HasMany(() => OrderDetail)
  order_details!: OrderDetail[];

  @BeforeCreate
  static async createUUID(product: Product) {
    const uuid = uuidv4().substring(0, 9);
    product.product_id = uuid;
  }
}
