import Main from "./Main";
import Hello from "@screens/Hello";
import Setting from "@screens/Setting";
import { screens } from "@contants/screens";
import Onboarding from "@screens/OnBoarding";
import { navigationRef } from '@utils/navigationRef'
import CreateWallet from "@screens/Home/CreateWallet";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
const Container = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={screens.Hello} component={Hello} />
                <Stack.Screen name={screens.Main} component={Main} />
                <Stack.Screen name={screens.Setting} component={Setting} />
                <Stack.Screen name={screens.CreateWallet} component={CreateWallet} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Container
