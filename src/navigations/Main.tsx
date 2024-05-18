import React from "react";
import Box from "@common/Box";
import { StatusBar } from "react-native";
import { useAppSelector, useTheme } from "@hooks/redux";
import OnBoarding from "@screens/OnBoarding";
import AuthNavigation from "./AuthNavigation";
import UnAuthNavigation from "./UnAuthNavigation";
import { LoadingModal } from "@reuse/LoadingModal";
import { isLoginAppSelector, themeAppSelector, globalLoadingAppSelector } from "@redux/selector/appSelector";

const Main = () => {
    const color = useTheme();
    const theme = useAppSelector(themeAppSelector)
    const isLogin = useAppSelector(isLoginAppSelector)
    const globalLoading = useAppSelector(globalLoadingAppSelector)
    return (
        <>
            <LoadingModal visible={globalLoading} />
            <StatusBar
                barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
                backgroundColor={color.bg}
            />
            <Box
                flex={1}>
                {isLogin ? <AuthNavigation /> : <OnBoarding />}
            </Box>
        </>
    );
}

export default Main;