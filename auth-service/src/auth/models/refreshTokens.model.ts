
import { type CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

type TAttributes = InferAttributes<RefreshTokens>;
type TCreationAttributes = InferCreationAttributes<RefreshTokens>

@Table
export class RefreshTokens extends Model<TAttributes, TCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  declare id: CreationOptional<number>;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true
  })
  declare userId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare tokenHash: string;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  declare expiresAt: Date;
}
