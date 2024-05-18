import { useTheme } from "@hooks/redux";
import { useAppSelector } from "@hooks/redux";
import { useTranslation } from "react-i18next";
import { themeAppSelector } from "@redux/selector/appSelector";

const useApp = () => {
    const { t } = useTranslation();
    const theme = useAppSelector(themeAppSelector);
    const color = useTheme();

    return {
        t,
        color,
        theme,
    };
};

export default useApp;