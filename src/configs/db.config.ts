import { Sequelize } from 'sequelize-typescript';
import Book from '../models/book.model';
import env from 'dotenv';

//dotenv config
env.config();

//set db infos
const user: string = process.env.DB_USER;
const database: string = process.env.DB_DATABASE;
const host: string = process.env.DB_HOST;
const password: string = process.env.DB_PASSWORD;

//create connection
const connection = new Sequelize({
    database: database,
    dialect: 'mysql',
    host: host,
    logging: false,
    models: [Book],
    password: password,
    username: user
});

export default connection;