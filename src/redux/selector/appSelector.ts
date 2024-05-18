import { RootState } from "@redux/store/store";

export const isLoginAppSelector = (state: RootState) => state.app.isLogin

export const languageAppSelector = (state: RootState) => state.app.language 

export const themeAppSelector = (state: RootState) => state.app.theme

export const globalLoadingAppSelector = (state: RootState) => state.app.globalLoading