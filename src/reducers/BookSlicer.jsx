import { createSlice } from "@reduxjs/toolkit";

export const BookSlicer = createSlice({
    name: "books",
    initialState: {
        books: [],
        loading: false
    },
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload
            return state
        },
        addBook: (state, action) => {
            state.books = [...state.books, action.payload];
            return state
        },
        editBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id);
            state.loading = false;
            return state
        },
        deleteBook: (state, action) => {
            let index = state.books.findIndex((obj) => obj.id === action.payload.id)
            state.books.splice(index, 1)
            return state
        },
        setLoading: (state) => {
            state.loading = true;
        },
    }
})

export const { setBooks, addBook, editBook, deleteBook, setLoading } = BookSlicer.actions;