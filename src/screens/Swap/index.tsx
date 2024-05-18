import Btn from '@common/Btn'
import Box from '@common/Box'
import Txt from '@common/Txt'
import Icon from '@common/Icon'
import Input from '@common/Input'
import useApp from '@utils/useApp'
import Btn100 from '@reuse/Btn100'
import Note from '@screens/Home/Note'
import React, { useState } from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { borderRadius, fontSize, iconSize, margin, padding } from '@utils/responsive'
import { Setting2, ArrowSwapVertical, ArrowDown2, CardPos, ArrowRight2, ArrowSwapHorizontal } from 'iconsax-react-native'

const Swap = () => {
    const { t, color } = useApp()
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    return (
        <KeyBoardSafe extraRollHeight={-500}>
            <Box row alignCenter>
                <Txt flex={1} center bold size={fontSize.h2}>{t('Hoán đổi')}</Txt>
                <Btn>
                    <Setting2 size={iconSize.s3} color={color.gray1} variant='Bold' />
                </Btn>
            </Box>
            <Box>
                <Box
                    padding={padding.p2}
                    marginTop={margin.m4}
                    radius={borderRadius.r2}
                    paddingBottom={padding.p5}
                    backgroundColor={color.boxColor}
                >
                    <Box row alignCenter justifySpaceBetween>
                        <Box row alignCenter >
                            <Txt size={fontSize.h6} color={color.gray1}>{t('Từ')}</Txt>
                            <Icon
                                size={iconSize.s2}
                                marginHorizontal={margin.m1}
                                source={{ uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png' }}
                            />
                            <Txt size={fontSize.h6} color={color.gray1} marginRight={margin.m1}
                            >Bitcoin</Txt>
                            <ArrowDown2 size={iconSize.xs} color={color.gray1} />
                        </Box>

                        <Box row alignCenter>
                            <CardPos size={iconSize.xs1} color={color.gray1} variant='Bold' />
                            <Txt size={fontSize.h6} marginLeft={margin.m1} color={color.gray1}>{t('0.123123')}</Txt>
                        </Box>
                    </Box>

                    <Box row alignCenter justifySpaceBetween marginTop={margin.m3}>
                        <Box row alignCenter>
                            <Icon size={iconSize.l} source={{ uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png' }} />
                            <Txt size={fontSize.h4} marginHorizontal={margin.m1} >BTC</Txt>
                            <ArrowRight2 size={iconSize.xs1} color={color.gray1} />
                        </Box>
                        <Input
                            hint='0'
                            flex={1}
                            value={from}
                            textAlign={'right'}
                            color={color.black}
                            keyboardType='numeric'
                            onChangeText={setFrom}
                            marginLeft={margin.m3}
                            hintColor={color.black}
                        />
                    </Box>
                </Box>
                <Btn
                    absolute
                    zIndex={2}
                    alignSelf={'center'}
                    padding={padding.p1}
                    radius={borderRadius.r8}
                    backgroundColor={color.boxColor2}
                    bottom={padding.p3 * 7 + margin.m1}
                >
                    <ArrowSwapVertical size={iconSize.s3} color={color.gray1} />
                </Btn>
                <Box
                    padding={padding.p2}
                    marginTop={margin.m1}
                    backgroundColor={color.boxColor}
                    borderTopLeftRadius={borderRadius.r2}
                    borderTopRightRadius={borderRadius.r2}
                >
                    <Box row alignCenter justifySpaceBetween>
                        <Box row alignCenter>
                            <Txt size={fontSize.h6} color={color.gray1}>{t('Từ')}</Txt>
                            <Icon
                                size={iconSize.s2}
                                marginHorizontal={margin.m1}
                                source={{ uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png' }}
                            />
                            <Txt size={fontSize.h6} color={color.gray1} marginRight={margin.m1}
                            >Etherium</Txt>
                            <ArrowDown2 size={iconSize.xs} color={color.gray1} />
                        </Box>

                        <Box row alignCenter>
                            <CardPos size={iconSize.xs1} color={color.gray1} variant='Bold' />
                            <Txt size={fontSize.h6} marginLeft={margin.m1} color={color.gray1}>{t('1.9810')}</Txt>
                        </Box>
                    </Box>

                    <Box row alignCenter justifySpaceBetween marginTop={margin.m3}>
                        <Box row alignCenter>
                            <Icon size={iconSize.l} source={{ uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png' }} />
                            <Txt size={fontSize.h4} marginHorizontal={margin.m1} >ETH</Txt>
                            <ArrowRight2 size={iconSize.xs1} color={color.gray1} />
                        </Box>
                        <Input
                            hint='0'
                            flex={1}
                            value={to}
                            textAlign={'right'}
                            color={color.black}
                            keyboardType='numeric'
                            onChangeText={setTo}
                            marginLeft={margin.m3}
                            hintColor={color.black}
                        />
                    </Box>
                </Box>
                <Box
                    row
                    alignCenter
                    marginTop={2}
                    padding={padding.p2}
                    backgroundColor={color.boxColor}
                    borderBottomLeftRadius={borderRadius.r2}
                    borderBottomRightRadius={borderRadius.r2}
                >
                    <Txt bold size={fontSize.h5} color={color.gray1}>1 ETH ≃ 410,423727 BTC </Txt>
                    <ArrowSwapHorizontal size={iconSize.xs1} color={color.gray1} />
                </Box>
            </Box>
            <Btn100
                title={t('Kết nối ví')}
                marginTop={margin.m3}
                onPress={() => { }}
            />
            <Note note='Phê duyệt BTC trước khi bạn có thể hoán đổi' />
        </KeyBoardSafe>
    )
}

export default React.memo(Swap)