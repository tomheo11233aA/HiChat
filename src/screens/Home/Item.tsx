import React from 'react'
import Btn from '@common/Btn'
import Box from '@common/Box'
import Txt from '@common/Txt'
import Icon from '@common/Icon'
import { colors } from '@themes/colors'
import { padding, margin, iconSize, fontSize } from '@utils/responsive'
import { Coin } from './home.mock'

type ItemProps = {
    item: Coin
}

const Item: React.FC<ItemProps> = ({ item }) => {
    return (
        <Btn
            row
            alignCenter
            key={item.id}
            width={'100%'}
            justifySpaceBetween
            padding={padding.p2}
        >
            <Box row alignCenter>
                <Icon
                    size={iconSize.l}
                    marginRight={margin.m2}
                    source={{ uri: item.icon }}
                />
                <Box flex={1}>
                    <Txt bold>{item.symbol}</Txt>
                    <Txt size={fontSize.h7}> {item.name}</Txt>
                </Box>
                <Box>
                    <Txt bold> {`${item.price.toLocaleString()}$`}</Txt>
                    <Txt right color={item.percent >= 0 ? colors.green : colors.red}> {item.percent >= 0 ? `+${item.percent}%` : `${item.percent}%`} </Txt>
                </Box>
            </Box>
        </Btn>
    )
}

export default React.memo(Item)