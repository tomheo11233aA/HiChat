import { useState, useEffect } from "react";
import { setTheme } from "@redux/slice/appSlice";
import { AppDispatch } from "@redux/store/store";
import { useAppDispatch, useAppSelector, useTheme } from "@hooks/redux";
import { themeAppSelector } from "@redux/selector/appSelector";
import changeNavigationBarColor from "react-native-navigation-bar-color";

const useSetting = () => {
    const color = useTheme();
    const dispatch: AppDispatch = useAppDispatch();
    const theme = useAppSelector(themeAppSelector);
    const isSwitch = theme === "light" ? false : true;
    const [isSwitchOn, setIsSwitchOn] = useState(isSwitch);
    useEffect(() => {
        setIsSwitchOn(isSwitch);
    }, [theme]);

    useEffect(() => {
        changeNavigationBarColor(color.bg, true, true);
    }, [theme, color.bg]);

    const handleChangeTheme = async (value: string) => {
        const payload = value === "light" ? "light" : "dark";
        dispatch(setTheme(payload));
    };
    return {
        isSwitchOn,
        setIsSwitchOn,
        handleChangeTheme,
    };
};

export default useSetting;
