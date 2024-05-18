import React from 'react'
import { t } from 'i18next'
import Box from '@common/Box'
import Btn from '@common/Btn'
import Txt from '@common/Txt'
import { useTheme } from '@hooks/redux'
import { ArrowLeft } from 'iconsax-react-native'
import { iconSize, fontSize } from '@utils/responsive'
import { goBack } from '@utils/navigationRef'


const Header = () => {
    const color = useTheme()
    return (
        <Box row alignSelf={'flex-start'} alignCenter>
            <Btn onPress={() => { goBack() }}>
                <ArrowLeft size={iconSize.s3} color={color.gray1} />
            </Btn>
            <Txt flex={1} center bold size={fontSize.h2}>{t('Tạo ví mới')}</Txt>
        </Box>
    )
}

export default React.memo(Header)