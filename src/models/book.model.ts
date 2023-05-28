import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({timestamps: false, tableName: "book"})
export default class Book extends Model {

    @Column({type: DataType.STRING, allowNull: false})
    name!: string

    @Column({type: DataType.STRING, allowNull: false})
    genre!: string

    @Column({type: DataType.STRING, allowNull: false})
    author!: string

    @Column({type: DataType.STRING, allowNull: false, primaryKey: true})
    id!: string
}