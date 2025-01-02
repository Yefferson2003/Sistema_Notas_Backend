import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import User from "./user";
import AcademiCourses from "./academic_courses";

@Table({
    tableName: 'teachers_academic_courses',
})

class TeachersAcademicCourses extends Model{
    @ForeignKey(() => User)
    @Column({
        type: 'INTEGER',
        allowNull: false
    })
    user_id: number;
    
    @ForeignKey(() => AcademiCourses)
    @Column({
        type: 'INTEGER',
        allowNull: false
    })
    academic_course_id: number;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => AcademiCourses)
    academic_course: AcademiCourses;
}

export default TeachersAcademicCourses;