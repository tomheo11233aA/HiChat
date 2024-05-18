import AnimatedLottieView from "lottie-react-native";
import Box from "@common/Box";
import { Modal } from "react-native";
import { useTheme } from "@hooks/redux";
import { width } from "@utils/responsive";

type LoadingModalProps = {
    visible: boolean;
};

export const LoadingModal: React.FC<LoadingModalProps> = ({ visible }) => {
    const color = useTheme();
    return (
        <Modal visible={visible} statusBarTranslucent transparent>
            <Box
                flex={1}
                backgroundColor={color.bg}
                justifyCenter
                alignCenter
            >
                <AnimatedLottieView
                    loop
                    autoPlay
                    source={require("@lotties/loading.json")}
                    style={{ width: width * 0.3, height: width * 0.3 }}
                />
            </Box>
        </Modal>
    );
}