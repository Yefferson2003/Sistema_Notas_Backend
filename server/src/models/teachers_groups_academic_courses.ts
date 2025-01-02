import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import User from "./user";
import AcademiCourses from "./academic_courses";
import Groups from "./groups";
import TasksAcademicCoursesStudents from "./tasks_academic_courses_students";

@Table({
    tableName: 'teachers_groups_academic_courses',
})

class TeachersGroupsAcademicCourses extends Model{
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    user_id: number;
    
    @ForeignKey(() => AcademiCourses)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    academic_course_id: number;

    @ForeignKey(() => Groups)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    group_id: number;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => AcademiCourses)
    academic_course: AcademiCourses;

    @BelongsTo(() => Groups)
    group: Groups;

    @HasMany(() => TasksAcademicCoursesStudents)
    tasks_academic_courses_students: TasksAcademicCoursesStudents[];
}

export default TeachersGroupsAcademicCourses;