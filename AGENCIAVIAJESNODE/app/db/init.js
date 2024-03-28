import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();
const {
    DB_NAME,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASS,
    DB_DIALECT,
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    dialect: "mysql",
    host: DB_HOST,
    port: DB_PORT,
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000,
    },
    logging: false
});

sequelize
    .authenticate()
    .then(() => console.log('Database connected successfully'))
    .catch(() => console.log('Error connecting to database'));

export default sequelize;