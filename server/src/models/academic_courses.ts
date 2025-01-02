import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import AcademiDegrees from "./academic_degrees";
import TeachersAcademicCourses from "./teachers_academic_courses";
import TasksAcademicCourses from "./tasks_academic_courses";
import TeachersGroupsAcademicCourses from "./teachers_groups_academic_courses";

@Table({
    tableName: "academi_courses",
})

class AcademiCourses extends Model {
    @Column({
        type: DataType.STRING(200),
        allowNull: false,
        unique: true,
    })
    name: string;

    @ForeignKey(() => AcademiDegrees)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    academic_degree_id: number;

    @BelongsTo(() => AcademiDegrees)
    academic_degree: AcademiDegrees;

    @HasMany(() => TeachersAcademicCourses)
    teachers_academic_courses: TeachersAcademicCourses[];

    @HasMany(() => TasksAcademicCourses)
    tasks_academic_courses: TasksAcademicCourses[];

    @HasMany(() => TeachersGroupsAcademicCourses)
    teachers_groups_academic_courses: TeachersGroupsAcademicCourses[];
}

export default AcademiCourses;