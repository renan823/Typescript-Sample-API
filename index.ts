import express from "express";
import env from "dotenv";
import book from './src/routes/book.routes';
import connection from "./src/configs/db.config";

//express config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

//.env config
env.config();

//routes config
app.use('/', book);

//db config
connection.sync().then(() => {
    console.log("DB connected");
}).catch((err: Error) => {
    console.error(err);
});

//listen
const PORT: number = process.env.PORT | 3000;
app.listen(PORT, () => {
    console.log(`listen on port ${PORT}`);
});

