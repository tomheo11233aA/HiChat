import React from 'react'
import Box from '@common/Box'
import Txt from '@common/Txt'
import { useTheme } from '@hooks/redux'
import { socials } from './setting.mock'
import { TouchableOpacity, Linking, StyleSheet } from 'react-native'
import { padding, margin, width, fontSize } from '@utils/responsive'

const SocialItem = () => {
    const color = useTheme()
    return (
        <Box paddingVertical={padding.p2}>
            <Box>
                {socials.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.btn} onPress={() => Linking.openURL(item.link)}>
                        <Box
                            row
                            radius={width}
                            padding={padding.smp}
                            marginVertical={margin.m2}
                            backgroundColor={color.gray1}
                        >
                            {item.icon}
                        </Box>
                        <Txt size={fontSize.h5} marginLeft={margin.m3}>{item.name}</Txt>
                    </TouchableOpacity>
                ))}
            </Box>

        </Box>
    )
}

export default React.memo(SocialItem)

const styles = StyleSheet.create({
    btn: {
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
    }
})