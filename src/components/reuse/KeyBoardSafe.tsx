import { Platform, SafeAreaView } from 'react-native'
import React from 'react'
import Box from '@common/Box'
import Scroll from '@common/Scroll'
import { BOTTOM_TAB_HEIGHT, width } from '@utils/responsive'
import { useTheme } from '@hooks/redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
interface Props {
    bg?: string,
    styles?: any,
    paddingBottom?: number,
    paddingHorizontal?: number,
    children: JSX.Element | JSX.Element[],
    extraRollHeight?: number,
}

const KeyBoardSafe = ({
    bg,
    styles,
    children,
    paddingBottom,
    extraRollHeight = 100,
    paddingHorizontal = width * 0.05,
}: Props) => {
    const theme = useTheme()
    const background = bg ? bg : theme.bg
    return (
        <KeyboardAwareScrollView
            enableOnAndroid={true}
            enableAutomaticScroll={true}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            extraScrollHeight={extraRollHeight}
            contentContainerStyle={[{
                flex: 1,
                backgroundColor: background,
            }, styles]}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <Box
                    flex={1}
                    paddingTop={Platform.OS === 'android' ? 5 : 0}
                >
                    <Scroll
                        flexGrow={1}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        paddingHorizontal={paddingHorizontal}
                        showsHorizontalScrollIndicator={false}
                        paddingBottom={paddingBottom || BOTTOM_TAB_HEIGHT / 2}
                    >
                        {children}
                    </Scroll>
                </Box>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

export default React.memo(KeyBoardSafe)