// import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// @Entity()
// export class Users {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ nullable: false, type: "varchar", length: 80 })
//   name: string;

//   @Column({ nullable: false, type: "varchar", length: 255 })
//   password: string;

//   @Column({ nullable: false, type: "varchar", length: 255 })
//   email: string;
// }

// // export const UsersTable = AppDataSource.getRepository(Users);

import { DataTypes } from "sequelize";
import sequelize from "../services/db.config";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

export default User;
