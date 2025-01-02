import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import AcademiCourses from "./academic_courses";
import AcademicPeriods from "./academic_periods";
import TasksAcademicCoursesStudents from "./tasks_academic_courses_students";

@Table({
    tableName: 'tasks_academic_courses',
})

class TasksAcademicCourses extends Model{
    @Column({
        type: DataType.STRING(200),
        allowNull: false,
    })
    name: string;

    @ForeignKey(() => AcademiCourses)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    academic_course_id: number;

    @ForeignKey(() => AcademicPeriods)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    academic_period_id: number;

    @BelongsTo(() => AcademiCourses)
    academic_course: AcademiCourses;

    @BelongsTo(() => AcademicPeriods)
    academic_period: AcademicPeriods;

    @HasMany(() => TasksAcademicCoursesStudents)
    tasks_academic_courses_students: TasksAcademicCoursesStudents[];
}

export default TasksAcademicCourses;