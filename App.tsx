import React, { useEffect } from 'react'
import Container from '@navigations/Container'
import Animated from 'react-native-reanimated'
import { PaperProvider } from 'react-native-paper'
import useSetting from '@screens/Setting/setting.hook'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import changeNavigationBarColor from 'react-native-navigation-bar-color'

const App = () => {
  const { theme, color } = useSetting();
  useEffect(() => {
    changeNavigationBarColor(color.bg, true, true);
  }, [theme, color.bg]);
  return (
    <Animated.View style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PaperProvider>
          <Container />
        </PaperProvider>
      </SafeAreaProvider>
    </Animated.View>
  )
}

export default App