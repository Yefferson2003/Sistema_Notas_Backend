import { BelongsTo, Column, DataType, ForeignKey, Model, Table, Unique } from "sequelize-typescript";
import Groups from "./groups";
import User from "./user";

@Table({
    tableName: 'students_groups',
})

class StudentsGroups extends Model{

    @ForeignKey(() => Groups) 
    @Column({
        type: DataType.INTEGER,    
        allowNull: false,
    })
    group_id: number;

    @ForeignKey(() => User) 
    @Column({
        type: DataType.INTEGER,    
        allowNull: false,
        unique: true,
    })
    student_id: number;

    @BelongsTo(() => Groups)
    group: Groups;

    @BelongsTo(() => Groups)
    user: User;

}

export default StudentsGroups;