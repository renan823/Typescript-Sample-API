import * as express from 'express';
import Book from '../models/book.model';

class BookController {
    public static all = (req: express.Request, res: express.Response): void => {
        Book.findAll().then((books) => {
            res.status(200).json({message: "Success", books: books});
        }).catch((err: Error) => {
            res.status(500).json({message: err.message});
        });
    };

    public static create = (req: express.Request, res: express.Response): void => {
        const name: string = req.body.name;
        const author: string = req.body.author;
        const genre: string = req.body.genre;
        const id: string = req.body.id;

        Book.findByPk(id).then((book) => {
            if(book === null) {
                Book.create({name: name, author: author, genre: genre, id: id}).then(() => {
                    res.status(200).json({message: "Success! Book added!"});
                }).catch((err: Error) => {
                    res.status(500).json({message: err.message});
                });
            } else {
                res.status(200).json({message: "Oops! This book alredy exists!"});
            }
        }).catch((err: Error) => {
            res.status(500).json({message: err.message});
        });
    };

    public static find = (req: express.Request, res: express.Response): void => {
        const id: any | undefined = req.query.id;

        Book.findByPk(id).then((book) => {
            if(book !== null) {
                res.status(200).json({message: "Success! Book found!", book: book});
            } else {
                res.status(200).json({message: "Oops! Book not found!"});
            }
        }).catch((err: Error) => {
            res.status(500).json({message: err.message});
        });
    };

    public static remove = (req: express.Request, res: express.Response): void => {
        const id: string = req.body.id;
        
        Book.findByPk(id).then((book) => {
            if(book !== null) {
                Book.destroy({where: {id: id}}).then(() => {
                    res.status(200).json({message: "Success! Book removed!"});
                }).catch((err: Error) => {
                    res.status(500).json({message: err.message});
                });
            } else {
                res.status(200).json({message: "Oops! This book don't exists!"});
            }
        }).catch((err: Error) => {
            res.status(500).json({message: err.message});
        });
    };

    public static update = (req: express.Request, res: express.Response): void => {
        const name: string = req.body.name;
        const author: string = req.body.author;
        const genre: string = req.body.genre;
        const id: string = req.body.id;

        Book.update({name: name, author: author, genre: genre}, {where: {id: id}}).then(() => {
            res.status(200).json({message: "Success! Book updated!"});
        }).catch((err: Error) => {
            res.status(500).json({message: err.message});
        });
    };
}

export default BookController;