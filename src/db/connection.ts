import { Sequelize, Dialect } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const schema = process.env.DB_SCHEMA || '';
const username = process.env.DB_USERNAME || '';
const password = process.env.DB_PASSWORD || '';
const host = process.env.DB_HOST || '';
const port: number = Number(process.env.DB_PORT || 3306);
let dialect: Dialect = process.env.DB_DIALECT as Dialect || 'mariadb';

const db = new Sequelize(schema, username, password, {
    host: host,
    dialect: dialect,
    port: port
});

export default db;