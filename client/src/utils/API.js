import axios from "axios";

export default {
    getBooks: () => {
        return axios.get("/api/books");
    },
    searchBooks: (title) => {
        return axios.post("/search", {title: title});
    },
    addBookToDB: (bookInfo) => {
        return axios.post("/api/books", bookInfo);
    },
    deleteBook: (id) => {
        return axios.delete(`/api/books/${id}`);
    }
}