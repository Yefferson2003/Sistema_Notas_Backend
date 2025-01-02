import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import AcademiCourses from "./academic_courses";
import Groups from "./groups";

@Table({
    tableName: "academi_degrees",
})

class AcademiDegrees extends Model {
    @Column({
        type: DataType.STRING(200),
        allowNull: false,
        unique: true,
    })
    name: string;

    @HasMany(() => AcademiCourses)
    courses: AcademiCourses[];

    @HasMany(() => Groups)
    groups: Groups[];
}

export default AcademiDegrees;