import { createSlice } from "@reduxjs/toolkit";

export const AuthorSlicer = createSlice({
    name: "author",
    initialState: {
        author: [],
        loading: false
    },
    reducers: {
        setUsers: (state, action) => {
            state.author = action.payload
            state.loading = false;
            return state
        },
        addUser: (state, action) => {
            state.author = [...state.author, action.payload];
            return state
        },
        editUser: (state, action) => {
            const id = action.payload;
            state.author = state.author.filter(book => book.id !== id);
            state.loading = false;
            return state
        },
        deleteUser: (state, action) => {
            let index = state.author.findIndex((obj) => obj.id === action.payload.id)
            state.author.splice(index, 1)
            return state
        },
        setLoading: (state) => {
            state.loading = true;
        },

    }
})

export const { setUsers, addUser, editUser, deleteUser, setLoading } = AuthorSlicer.actions;