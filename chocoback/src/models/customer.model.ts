import {
  Model,
  Table,
  Column,
  DataType,
  BeforeCreate,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";

@Table({ tableName: "customer", timestamps: true })
export class Customer extends Model {
  @Column({
    type: DataType.STRING(10),
    primaryKey: true,
    allowNull: true,
    field: "id_cliente",
    unique: true,
  })
  customer_id!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    field: "nombre_cliente",
    unique: false,
  })
  customer_name!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    field: "apellidos_cliente",
    unique: false,
  })
  customer_lastname!: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
    field: "email_cliente",
    unique: false,
  })
  customer_email!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    field: "direccion",
    unique: false,
  })
  address!: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
    field: "codigo_postal",
    unique: false,
  })
  postal_code!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    field: "pais",
    unique: false,
  })
  country!: string;

  @Column({
    type: DataType.STRING(12),
    allowNull: false,
    field: "telefono",
    unique: false,
  })
  phone!: string;

  @BeforeCreate
  static async createUUID(customer: Customer) {
    const uuid = uuidv4().substring(0, 10);
    customer.customer_id = uuid;
  }
}
