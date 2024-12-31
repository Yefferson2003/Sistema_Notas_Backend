import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import User from "./user.model";

@Table({
    tableName: 'roles'
})

class Rol extends Model {
    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    name: string;

    @HasMany(() => User)
    users: User[];
}

export default Rol;