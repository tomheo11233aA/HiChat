import React from 'react'
import Item from './Item'
import Header from './Header'
import Banner from './Banner'
import useApp from '@utils/useApp'
import Scroll from '@common/Scroll'
import { fakeDataCoin } from './earn.mock'
import KeyBoardSafe from '@reuse/KeyBoardSafe'

const Earn = () => {
  const { t, color } = useApp()
  return (
    <KeyBoardSafe>
      <Scroll>
        <Header />
        <Banner />
        {fakeDataCoin.map((item) => (<Item key={item.id} item={item} />))}
      </Scroll>
    </KeyBoardSafe>
  )
}

export default React.memo(Earn)

