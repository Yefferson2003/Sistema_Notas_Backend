import { BelongsTo, Column, DataType, Default, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import Rol from "./rol";
import TeachersAcademicCourses from "./teachers_academic_courses";
import StudentsGroups from "./students_groups";
import TeachersGroupsAcademicCourses from "./teachers_groups_academic_courses";
import TasksAcademicCoursesStudents from "./tasks_academic_courses_students";
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
        allowNull: false,
        unique: true,
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

    @HasMany(() => TeachersAcademicCourses)
    teachers_academic_courses: TeachersAcademicCourses[];

    @HasMany(() => StudentsGroups)
    students_groups: StudentsGroups[];

    @HasMany(() => TeachersGroupsAcademicCourses)
    teachers_groups_academic_courses: TeachersGroupsAcademicCourses[];

    @HasMany(() => TasksAcademicCoursesStudents)
    tasks_academic_courses_students: TasksAcademicCoursesStudents[];
}

export default User;