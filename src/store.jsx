import { configureStore } from "@reduxjs/toolkit";
import { AuthorSlicer } from "./reducers/AuthorSlicer";
import { BookSlicer } from "./reducers/BookSlicer";

export const store = configureStore({
    reducer: {
        app: AuthorSlicer.reducer,
        book:BookSlicer.reducer,
       
    }

})