import React from 'react'
import Txt from '@common/Txt'
import Btn from '@common/Btn'
import useApp from '@utils/useApp'
import { colors } from '@themes/colors'
import { ActivityIndicator } from 'react-native-paper'
import { width, height, fontSize } from '@utils/responsive'

type Btn100Props = {
    title: string
    btnWidth?: number
    marginTop?: number
    disabled?: boolean
    isLoading?: boolean
    onPress: () => void
    marginBottom?: number
    backgroundColor?: string
    align?: 'center' | 'flex-start' | 'flex-end'
}

const Btn100: React.FC<Btn100Props> = (
    { btnWidth,
        title,
        align,
        onPress,
        disabled,
        isLoading,
        marginBottom = 0,
        marginTop = height * 0.05,
        backgroundColor = colors.mainColor,
    }
) => {
    const { t, color } = useApp()
    return (
        <Btn
            row
            shadow
            alignCenter
            elevation={5}
            justifyCenter
            alignSelf={align}
            radius={width * 0.08}
            marginTop={marginTop}
            height={height * 0.07}
            width={btnWidth || '100%'}
            marginBottom={marginBottom}
            onPress={() => { onPress() }}
            shadowColor={color.mainColor}
            disabled={isLoading || disabled}
            backgroundColor={backgroundColor}
        >
            {isLoading ?
                <ActivityIndicator color={color.white} style={{ marginRight: width * 0.02 }} /> : null}
            <Txt size={fontSize.h4} color={color.white}>
                {t(title)}
            </Txt>
        </Btn>
    )
}

export default React.memo(Btn100)