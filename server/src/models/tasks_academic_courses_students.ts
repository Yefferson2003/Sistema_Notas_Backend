import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import User from "./user";
import TasksAcademicCourses from "./tasks_academic_courses";
import TeachersGroupsAcademicCourses from "./teachers_groups_academic_courses";

@Table({
    tableName: 'tasks_academic_courses_students',
})

class TasksAcademicCoursesStudents extends Model{
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    user_id: number;
    
    @ForeignKey(() => TasksAcademicCourses)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    task_academic_course_id: number;

    @ForeignKey(() => TeachersGroupsAcademicCourses)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    teacher_group_academic_course_id: number;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    grade: number;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => TasksAcademicCourses)
    task_academic_course: TasksAcademicCourses;

    @BelongsTo(() => TeachersGroupsAcademicCourses)
    teacher_group_academic_course: TeachersGroupsAcademicCourses;
}

export default TasksAcademicCoursesStudents;