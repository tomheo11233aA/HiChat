import React from 'react'
import Box from '@common/Box'
import { useTheme } from '@hooks/redux'
import { width } from '@utils/responsive'
import { screens } from '@contants/screens'
import LottieView from 'lottie-react-native'
import { navigate } from '@utils/navigationRef'

const Hello = () => {
    React.useEffect(() => {
        setTimeout(() => {
            navigate(screens.Main)
        }, 500)
    }, [])
    const color = useTheme()
    return (
        <Box
            flex={1}
            alignCenter
            justifyCenter
            backgroundColor={color.bg}
        >
            <LottieView
                loop
                autoPlay
                source={require('@lotties/loading.json')}
                style={{ width: width * 0.5, height: width * 0.5 }}
            />
        </Box>
    )
}

export default Hello
