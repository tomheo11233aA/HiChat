import { t } from 'i18next'
import Btn from '@common/Btn'
import Box from '@common/Box'
import Txt from '@common/Txt'
import React, { Fragment } from 'react'
import { useTheme } from '@hooks/redux'
import { colors } from '@themes/colors'
import { IItem, ContentItem } from "./createwallet.model"
import { Edit2, Polygon, ArrowDown2, ArrowUp2 } from 'iconsax-react-native'
import { borderRadius, fontSize, height, iconSize, margin, padding, width } from '@utils/responsive'

type ItemProps = {
    item: IItem
    isShow: { [key: number]: boolean }
    toggleShow: (id: number) => void
}

const Item: React.FC<ItemProps> = ({ isShow, item, toggleShow }) => {
    const color = useTheme()
    return (
        <Fragment key={item.id}>
            <Btn
                row
                alignCenter
                padding={padding.p3}
                marginTop={margin.m2}
                radius={borderRadius.r4}
                backgroundColor={color.boxColor}
                onPress={() => toggleShow(item.id)}
            >
                <Box
                    radius={width}
                    padding={padding.p1}
                    backgroundColor={color.lMainColor}
                >
                    {item.id === 1 ?
                        <Edit2 size={iconSize.s} color={color.mainColor} />
                        : <Polygon size={iconSize.s} color={color.mainColor} />}
                </Box>

                <Box marginLeft={margin.m2} flex={1}>
                    <Txt bold size={fontSize.h4}>
                        {item.title}
                    </Txt>

                    <Box row alignCenter>
                        <Txt
                            size={fontSize.h6}
                            color={color.gray}
                            marginRight={margin.m1}
                        >
                            {t('Hiển thị chi tiết')}
                        </Txt>
                        {isShow[item.id] ? <ArrowUp2 size={iconSize.xs} color={color.gray1} /> : <ArrowDown2 size={iconSize.xs} color={color.gray1} />}
                    </Box>
                </Box>

                <Btn
                    radius={borderRadius.r2}
                    paddingVertical={padding.p1}
                    paddingHorizontal={padding.p3}
                    backgroundColor={color.mainColor}
                >
                    <Txt bold size={fontSize.h6} color={color.white}>
                        {t('Tạo')}
                    </Txt>
                </Btn>


            </Btn>
            {isShow[item.id] && (
                <>
                    <Box
                        marginBottom={height * 0.02}
                        backgroundColor={colors.gray2}
                    />
                    <Box
                        padding={padding.p3}
                        radius={borderRadius.r4}
                        backgroundColor={color.boxColor}
                    >
                        {item.content.map((content: ContentItem, index) => (
                            <Fragment key={content.id}>
                                <Txt
                                    bold
                                    size={fontSize.h5}
                                    marginTop={index === 0 ? 0 : margin.m2}
                                >
                                    {content.title}
                                </Txt>

                                <Txt
                                    size={fontSize.h6}
                                    color={color.gray1}
                                >
                                    {content.subTitle}
                                </Txt>

                            </Fragment>
                        ))}
                    </Box>
                </>
            )}
        </Fragment>
    )
}

export default React.memo(Item)