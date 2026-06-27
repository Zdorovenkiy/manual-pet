
import { type CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

type TAttributes = InferAttributes<Users>;
type TCreationAttributes = InferCreationAttributes<Users>

@Table
export class Users extends Model<TAttributes, TCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  declare id: CreationOptional<number>;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare lastName: string;
}
