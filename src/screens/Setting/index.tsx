import React from 'react'
import Header from './Header'
import DarkMode from './DarkMode'
import Scroll from '@common/Scroll'
import SocialItem from './SocialItem'
import FormSetting from './FormSetting'
import useSetting from './setting.hook'
import KeyBoardSafe from '@reuse/KeyBoardSafe'

const Setting = () => {
    const { isSwitchOn, handleChangeTheme, setIsSwitchOn } = useSetting();
    return (
        <KeyBoardSafe>
            <Scroll flex={1}>
                <Header />
                <DarkMode isSwitchOn={isSwitchOn} handleChangeTheme={handleChangeTheme} setIsSwitchOn={setIsSwitchOn} />
                <FormSetting />
                <SocialItem />
            </Scroll>
        </KeyBoardSafe>
    )
}

export default React.memo(Setting)

