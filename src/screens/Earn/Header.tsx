import React from 'react'
import { t } from 'i18next'
import Box from '@common/Box'
import Txt from '@common/Txt'
import { fontSize } from '@utils/responsive'

const Header = () => {
    return (
        <Box alignCenter>
            <Txt
                bold
                center
                flex={1}
                size={fontSize.h2}
            >
                {t('Earn')}
            </Txt>
        </Box>
    )
}

export default Header