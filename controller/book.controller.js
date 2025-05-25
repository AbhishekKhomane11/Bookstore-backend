// import Book from "../model/book.model.js";

// // export const getBook = async(req, res) => {
// //     try {
// //         const book = await Book.find();
// //         res.status(200).json(book);
        
// //     } catch (error) {
// //         console.log("Error: ", error);
// //         res.status(500).json(error);
// //     }
// // };
// export const getBook = async(req, res) => {
//     try {
//         const books = await Book.find();
//         console.log(books); // Log the books fetched from the database
//         if (books.length === 0) {
//             return res.status(404).json({ message: "No books found" });
//         }
//         res.status(200).json(books);
//     } catch (error) {
//         console.log("Error: ", error);
//         res.status(500).json({ message: "Server error" });
//     }
// };
// import Book from "../model/book.model.js";

// // GET Method to fetch books
// export const getBook = async (req, res) => {
//     try {
//         const books = await Book.find();
//         res.status(200).json(books);
//     } catch (error) {
//         console.log("Error: ", error);
//         res.status(500).json({ message: "Server error" });
//     }
// };

// // POST Method to add a book
// export const addBook = async (req, res) => {
//     console.log(req.body); // Log the request body to verify incoming data
//     const newBook = new Book(req.body);

//     try {
//         const savedBook = await newBook.save();
//         res.status(201).json(savedBook);
//     } catch (error) {
//         console.log("Error: ", error);
//         res.status(500).json({ message: "Server error" });
//     }
// };


import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
    try {
        const book = await Book.find({});
        console.log(book)
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

