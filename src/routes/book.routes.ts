import { Router } from "express";
import Book from "../controllers/book.controller";

const router = Router();

//get all books
router.get('/', Book.all);

//create a new book
router.post('/new', Book.create);

//update a book
router.post('/update', Book.update);

//delete a book
router.post('/delete', Book.remove);

//find a book by id
router.get('/find', Book.find);

export default router;
