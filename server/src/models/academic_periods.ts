import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import TasksAcademicCourses from "./tasks_academic_courses";

@Table ({
    tableName: 'academic_periods'
})

class AcademicPeriods extends Model {
    @Column({
        type: DataType.STRING(200),
        allowNull: false,
    })
    description: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    percentaje: number;

    @HasMany(() => TasksAcademicCourses)
    tasks_academic_courses: TasksAcademicCourses[];
}

export default AcademicPeriods;