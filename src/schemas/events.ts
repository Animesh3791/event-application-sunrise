// import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
// import { AppDataSource } from "../services/db.config";

// @Entity()
// export class Events {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ nullable: false, type: "varchar", length: 80 })
//   name: string;

//   @Column({ nullable: false, type: "varchar", length: 255 })
//   location: string;
// }

// export const EventsTable = AppDataSource.getRepository(Events);

import { DataTypes } from "sequelize";
import sequelize from "../services/db.config";

const Events = sequelize.define("Event", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Events;
