import React from 'react'
import { t } from 'i18next'
import Txt from '@common/Txt'
import Btn from '@common/Btn'
import { colors } from '@themes/colors'
import { useTheme } from '@hooks/redux'
import { Switch } from 'react-native-paper'
import { fontSize, padding } from '@utils/responsive'

type Props = {
    isSwitchOn: boolean
    setIsSwitchOn: (value: boolean) => void
    handleChangeTheme: (value: string) => void
}

const DarkMode: React.FC<Props> = ({ isSwitchOn, handleChangeTheme, setIsSwitchOn }) => {
    const color = useTheme()
    return (
        <Btn
            row
            borderBottomWidth={1}
            borderColor={colors.gray2}
            paddingVertical={padding.p3}
            onPress={() => handleChangeTheme(isSwitchOn ? 'light' : 'dark')}
        >
            <Txt size={fontSize.h5} flex={1}>{t('Chế độ tối')}</Txt>
            <Switch
                value={isSwitchOn}
                color={color.mainColor}
                onValueChange={() => {
                    setIsSwitchOn(!isSwitchOn)
                    handleChangeTheme(isSwitchOn ? 'light' : 'dark')
                }}
            />
        </Btn>
    )
}

export default React.memo(DarkMode)