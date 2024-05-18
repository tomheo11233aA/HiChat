import React from 'react'
import { t } from 'i18next'
import Box from '@common/Box'
import Btn from '@common/Btn'
import Txt from '@common/Txt'
import BtnHome from './BtnHome'
import { useTheme } from '@hooks/redux'
import { SvgImage } from '@reuse/SvgImage'
import { screens } from '@contants/screens'
import { Setting2 } from 'iconsax-react-native'
import { navigate } from '@utils/navigationRef'
import { fontSize, height, iconSize, lineHeight, margin, padding, width } from '@utils/responsive'

const Form = () => {
    const color = useTheme()
    return (
        <>
            <Btn
                alignSelf={'flex-start'}
                paddingVertical={padding.p1}
                onPress={() => { navigate(screens.Setting) }}
            >
                <Setting2 color={color.gray1} variant='Bold' size={iconSize.s2} />
            </Btn>
            <SvgImage.Banner style={{ marginTop: margin.m5 }} height={height * 0.23} width={width} />
            <Txt
                bold
                center
                size={fontSize.h2}
                lineHeight={lineHeight.l4}
                marginTop={margin.m3}
            >
                {t('Tham gia cùng hơn 70 triệu người đang định hình tương lai của Internet với chúng tôi')}
            </Txt>
            <Box height={margin.m3} />
            <BtnHome
                type={'add'}
                title={t('Tạo ví mới')}
                subTitle={t('Cụm từ bí mật hoặc ví Swift')}
                onPress={() => navigate(screens.CreateWallet)}
            />
            <Box height={margin.m2} />
            <BtnHome
                title={t('Thêm ví hiện có')}
                subTitle={t('Nhập khôi phục hoặc chỉ xem')}
                onPress={() => { }}
            />
            <Txt
                size={fontSize.h4}
                color={color.gray1}
                alignSelf={'flex-start'}
                marginVertical={margin.m2}
            >
                {t('Token phổ biến')}
            </Txt>
        </>
    )
}

export default Form