import React from 'react'
import Box from '@common/Box'
import Txt from '@common/Txt'
import useApp from '@utils/useApp'
import { InfoCircle } from 'iconsax-react-native'
import { fontSize, iconSize, margin } from '@utils/responsive'

type NoteProps = {
    note: string
}

const Note: React.FC<NoteProps> = ({ note }) => {
    const { color, t } = useApp()
    return (
        <Box row marginTop={margin.m2} alignSelf={'center'}>
            <InfoCircle size={iconSize.xs1} variant='Bold' color={color.gray1} />
            <Txt size={fontSize.h6} marginLeft={margin.m1} justify lineHeight={15} color={color.gray}>
                {t(note)}
            </Txt>
        </Box>
    )
}

export default Note