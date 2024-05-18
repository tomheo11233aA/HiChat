import React from 'react'
import Box from '@common/Box'
import Txt from '@common/Txt'
import useApp from '@utils/useApp'
import { SvgImage } from '@reuse/SvgImage'
import { ArrowRight } from 'iconsax-react-native'
import { borderRadius, fontSize, iconSize, margin, padding, width } from '@utils/responsive'

const Banner = () => {
  const { t, color } = useApp()
  return (
    <Box>
      <Txt
        bold
        size={fontSize.h2}
        marginTop={margin.m2}
      >
        {t('Staking gốc')}
      </Txt>
      <Box
        row
        alignCenter
        padding={padding.p2}
        marginTop={margin.m2}
        radius={borderRadius.r7}
        backgroundColor={color.boxColor}
      >
        <SvgImage.Banner width={width * 0.2} height={width * 0.2} />
        <Box marginLeft={margin.m2}>
          <Txt bold size={fontSize.h5}>{t('Stake ETH của bạn với Trust')}</Txt>
          <Box row alignCenter marginTop={margin.m1}>
            <Txt
              bold
              size={fontSize.h6}
              color={color.mainColor}
              marginRight={margin.m1}
            >
              {t('Staking ngay')}
            </Txt>
            <ArrowRight size={iconSize.s} color={color.mainColor} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default React.memo(Banner)