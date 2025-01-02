// import { DataSource } from "typeorm";
// import { Events } from "../schemas/events";
// import { Users } from "../schemas/users";
import { Sequelize } from "sequelize";
import User from "../schemas/users";

import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12755164",
  password: "sql12755164",
  database: "xkSB7zKBPr"
});

const sequelize = new Sequelize("sql12755164", "sql12755164", "xkSB7zKBPr", {
  host: "sql12.freemysqlhosting.net",
  dialect: "mysql" // Replace with 'postgres', 'sqlite', etc., based on your DB
});

export default sequelize;

// export const AppDataSource = new DataSource({
//   type: "mysql",
//   host: "sql12.freemysqlhosting.net",
//   port: 3306,
//   username: "sql12755164",
//   password: "xkSB7zKBPr",
//   database: "sql12755164",
//   synchronize: true,
//   logging: false,
//   entities: []
// });

// export const connectDb = async () => {
//   try {
//     await AppDataSource.initialize();
//     console.log("Mysql connected");
//   } catch (error: any) {
//     console.log(error);
//     throw new Error(error.message);
//   }
// };

export const connectDb = async () => {
  try {
    // await sequelize.authenticate();
    // console.log("Mysql connected");
    // await sequelize.sync({ force: true });
    // const newUser = await User.create({
    //   name: "Animesh Gaurav",
    //   email: "animeshkg1998@gmail.com"
    // });
    // console.log("New User Created:", newUser.toJSON());

    connection.connect((err) => {
      if (err) {
        console.error("Error connecting to MySQL:", err.stack);
        return;
      }
      console.log("Connected to MySQL as id", connection.threadId);

      // Execute a query
      connection.query("SELECT * FROM your_table", (error, results) => {
        if (error) throw error;
        console.log("Results:", results);
      });

      // Close the connection
      connection.end();
    });
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};
