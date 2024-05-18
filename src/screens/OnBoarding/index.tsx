import { t } from 'i18next'
import Btn from '@common/Btn'
import Txt from '@common/Txt'
import Scroll from '@common/Scroll'
import { colors } from '@themes/colors'
import React, { useEffect } from 'react'
import { SvgImage } from '@reuse/SvgImage'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { AppDispatch } from '@redux/store/store'
import { useAppDispatch, useTheme } from '@hooks/redux'
import { setGlobalLoading, setLogin } from '@redux/slice/appSlice'
import { fontSize, height, margin, padding, width } from '@utils/responsive'

const OnBoarding = () => {
  const color = useTheme()
  const dispatch: AppDispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setGlobalLoading(true))
    setTimeout(() => {
      dispatch(setGlobalLoading(false))
    }, 1000)
  }, [])

  const handleGetStarted = () => {
    dispatch(setGlobalLoading(true))
    setTimeout(() => {
      dispatch(setGlobalLoading(false))
      dispatch(setLogin(true))
    }, 1000)
  }

  return (
    <KeyBoardSafe>
      <Scroll justifyCenter alignCenter flex={1}>
        <SvgImage.Banner height={height * 0.45} width={width} />
        <Txt marginTop={margin.m6} alignSelf={'flex-start'} size={fontSize.h1}>
          {t('Sở hữu, kiểm soát và tận dụng sức mạnh tài sản kỹ thuật số trong tay bạn')}
        </Txt>
        <Btn marginTop={margin.m6} backgroundColor={colors.mainColor} width={'100%'} padding={padding.p2} radius={width} onPress={handleGetStarted}>
          <Txt size={fontSize.h5} color={color.white}>
            {t('Hãy bắt đầu')}
          </Txt>
        </Btn>
        <Txt center marginTop={margin.m3} size={fontSize.h6} color={color.textColor}>
          {t('Bằng cách nhấn vào "Bắt đầu", bạn đồng ý với ')}
          <Txt color={colors.mainColor}>{t('Điều khoản dịch vụ của Binance ')}</Txt>
          {t('và')} <Txt color={colors.mainColor}>{t('Chính sách Quyền riêng tư ')}</Txt>
          {t('của chúng tôi')}
        </Txt>
      </Scroll>
    </KeyBoardSafe>
  )
}

export default OnBoarding