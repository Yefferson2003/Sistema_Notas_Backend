import { BelongsTo, Column, DataType, Default, ForeignKey, Model, Table } from "sequelize-typescript";
import Rol from "./rol.model";
const userStatus = ['active', 'inactive'] as const;

@Table({
    tableName: 'users',
})

class User extends Model {
    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    email: string;

    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    phone: string;

    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    address: string;

    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    password: string;

    @Default('active')
    @Column({
        type: DataType.ENUM(...userStatus),
        allowNull: false
    })
    status: string;

    @ForeignKey(() => Rol)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    rolId: number;

    @BelongsTo(() => Rol)
    rol: Rol;
}

export default User;