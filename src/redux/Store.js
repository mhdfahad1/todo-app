import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "./FormSlice";
import ListSlice from "./ListSlice";

const store=configureStore({
    reducer:{
        formReducer:FormSlice,
    }
})

export default store;
