import React from 'react'
import Box from '@common/Box'
import Btn from '@common/Btn'
import Txt from '@common/Txt'
import { colors } from '@themes/colors'
import { useTheme } from '@hooks/redux'
import { Add, ArrowDown } from 'iconsax-react-native'
import { padding, margin, width, iconSize, fontSize, borderRadius } from '@utils/responsive'

type BtnHomeProps = {
    title: string,
    subTitle: string,
    onPress: () => void,
    type?: string
}

const BtnHome: React.FC<BtnHomeProps> = ({ title, subTitle, onPress, type }) => {
    const color = useTheme()
    return (
        <Btn
            row
            width={'100%'}
            onPress={onPress}
            radius={borderRadius.r3}
            backgroundColor={color.gray}
            paddingVertical={padding.p2}
            paddingHorizontal={padding.p1}
        >
            <Box
                radius={width}
                padding={padding.p1}
                marginLeft={margin.m2}
                backgroundColor={colors.lMainColor}
            >
                {type === 'add' ?
                    <Add color={colors.mainColor} size={iconSize.s2} />
                    :
                    <ArrowDown color={colors.mainColor} size={iconSize.s2} />}
            </Box>
            <Box
                width={'90%'}
                marginLeft={margin.m2}
            >
                <Txt bold size={fontSize.h4}>{title}</Txt>
                <Txt size={fontSize.h7}>{subTitle}</Txt>
            </Box>

        </Btn>
    )
}

export default React.memo(BtnHome)