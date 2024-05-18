import React from 'react'
import { t } from 'i18next'
import Box from '@common/Box'
import Txt from '@common/Txt'
import Earn from '@screens/Earn'
import Home from '@screens/Home'
import Swap from '@screens/Swap'
import { useTheme } from '@hooks/redux'
import { screens } from '@contants/screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BOTTOM_TAB_HEIGHT, fontSize, iconSize } from '@utils/responsive'
import { Home3, ArrowSwapHorizontal, Coin1, MaximizeCircle } from 'iconsax-react-native'

const Tab = createBottomTabNavigator()
const AuthNavigation = () => {
  const color = useTheme()
  const tabs = [
    {
      component: Home,
      title: t('Home'),
      name: screens.Home,
      iconNotFocus: <Home3 color={color.black} size={iconSize.s} />,
      iconFocus: <Home3 color={color.mainColor} variant='Bold' size={iconSize.s} />
    },
    {
      component: Swap,
      title: t('Swap'),
      name: screens.Swap,
      iconNotFocus: <ArrowSwapHorizontal color={color.black} size={iconSize.s} />,
      iconFocus: <ArrowSwapHorizontal color={color.mainColor} size={iconSize.s} />
    },
    {
      component: Earn,
      title: t('Earn'),
      name: screens.Earn,
      iconNotFocus: <Coin1 color={color.black} size={iconSize.s} />,
      iconFocus: <Coin1 color={color.mainColor} variant='Bold' size={iconSize.s} />
    },
    {
      component: Home,
      title: t('Explore'),
      name: 'Explore',
      iconNotFocus: <MaximizeCircle color={color.black} size={iconSize.s} />,
      iconFocus: <MaximizeCircle color={color.mainColor} variant='Bold' size={iconSize.s} />
    }
  ]
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: BOTTOM_TAB_HEIGHT,
          backgroundColor: color.bg,
        }
      }}
    >
      {tabs.map((item, index) => {
        return (
          <Tab.Screen
            key={item.title}
            name={item.name}
            component={item.component}
            options={{
              tabBarIcon: ({ focused }) => (
                <Box alignCenter>
                  {focused ? item.iconFocus : item.iconNotFocus}
                  <Txt
                    center
                    size={fontSize.h6}
                    color={focused ? color.mainColor : color.black}
                  >
                    {t(item.title)}
                  </Txt>
                </Box>
              )
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

export default AuthNavigation
