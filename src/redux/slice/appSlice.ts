import { ILanguage, IUSerSlice } from "src/model/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IUSerSlice = {
    isLogin: false,
    language: {
        title: "English",
        value: "en",
        image: require('@images/unauth/america.png'),
    },
    theme: 'light',
    globalLoading: false,
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<ILanguage>) => {
            state.language = action.payload;
        },
        setLogin: (state, action: PayloadAction<boolean>) => {
            state.isLogin = action.payload;
        },
        setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
            state.theme = action.payload;
        },
        setGlobalLoading: (state, action: PayloadAction<boolean>) => {
            state.globalLoading = action.payload;
        },
    },
});

export const {
    setLanguage,
    setLogin,
    setTheme,
    setGlobalLoading,
} = appSlice.actions;

export default appSlice