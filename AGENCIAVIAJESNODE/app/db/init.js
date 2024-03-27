import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();
const {
    db_name,
    db_host,
    db_port,
    db_user,
    db_pass,
    db_dialect,
} = process.env;

const sequelize = new Sequelize(db_name, db_user, db_pass, {
    dialect: db_dialect,
    host: db_host,
    port: db_port,
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000,
    },
    logging:false
});

sequelize
    .authenticate()
    .then(() => console.log('Database connected succesfully'))
    .catch(() => console.log('Error connecting Database'));

export default sequelize;