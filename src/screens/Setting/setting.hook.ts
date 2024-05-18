import { useState, useEffect } from "react";
import { setTheme } from "@redux/slice/appSlice";
import { AppDispatch } from "@redux/store/store";
import { useAppDispatch, useAppSelector, useTheme } from "@hooks/redux";
import { themeAppSelector } from "@redux/selector/appSelector";

const useSetting = () => {
    const color = useTheme();
    const dispatch: AppDispatch = useAppDispatch();
    const theme = useAppSelector(themeAppSelector);
    const isSwitch = theme === "light" ? false : true;
    const [isSwitchOn, setIsSwitchOn] = useState(isSwitch);
    useEffect(() => {
        setIsSwitchOn(isSwitch);
    }, [theme]);

    const handleChangeTheme = async (value: string) => {
        const payload = value === "light" ? "light" : "dark";
        dispatch(setTheme(payload));
    };
    return {
        color,
        theme,
        isSwitchOn,
        setIsSwitchOn,
        handleChangeTheme,
    };
};

export default useSetting;
