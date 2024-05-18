import React from 'react'
import { t } from 'i18next'
import Box from '@common/Box'
import Btn from '@common/Btn'
import Txt from '@common/Txt'
import { colors } from '@themes/colors'
import { useTheme } from '@hooks/redux'
import { fontSize, iconSize, margin, padding } from '@utils/responsive'
import { Setting2, InfoCircle, Headphone, Shield } from 'iconsax-react-native'

const FormSetting = () => {
    const color = useTheme()
    return (
        <Box borderBottomWidth={1} borderColor={colors.gray2} paddingVertical={padding.p3}>
            <Btn paddingVertical={padding.p2} row>
                <Setting2 color={color.gray1} size={iconSize.s2} variant='Bold' />
                <Txt marginLeft={margin.m3} size={fontSize.h5}>{t('Ưa thích')}</Txt>
            </Btn>

            <Btn row alignCenter paddingVertical={padding.p2}>
                <InfoCircle color={color.gray1} size={iconSize.s2} variant='Bold' />
                <Txt marginLeft={margin.m3} size={fontSize.h5}>{t('Trung tâm Trợ giúp')}</Txt>
            </Btn>

            <Btn row alignCenter paddingVertical={padding.p2}>
                <Headphone color={color.gray1} size={iconSize.s2} variant='Bold' />
                <Txt marginLeft={margin.m3} size={fontSize.h5}>{t('Hỗ trợ')}</Txt>
            </Btn>

            <Btn row alignCenter paddingVertical={padding.p2}>
                <Shield color={color.gray1} size={iconSize.s2} variant='Bold' />
                <Txt marginLeft={margin.m3} size={fontSize.h5}>{t('Giới thiệu')}</Txt>
            </Btn>
        </Box>
    )
}

export default React.memo(FormSetting)