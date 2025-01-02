import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import AcademiDegrees from "./academic_degrees";
import StudentsGroups from "./students_groups";
import TeachersGroupsAcademicCourses from "./teachers_groups_academic_courses";

@Table({
    tableName: 'groups',
})

class Groups extends Model{

    @Column({
        type: DataType.STRING(200),
        allowNull: false,
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

    @HasMany(() => StudentsGroups)
    students_groups: StudentsGroups[];

    @HasMany(() => TeachersGroupsAcademicCourses)
    teachers_groups_academic_courses: TeachersGroupsAcademicCourses[];

}

export  default Groups;