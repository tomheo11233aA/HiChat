import React from 'react'
import Item from './Item'
import Form from './Form'
import Scroll from '@common/Scroll'
import { fakeDataCoin } from './home.mock'
import KeyBoardSafe from '@reuse/KeyBoardSafe'

const Home = () => {
  return (
    <KeyBoardSafe>
      <Scroll alignCenter flex={1}>
        <Form />
        {fakeDataCoin.map((item) => (<Item key={item.id} item={item} />))}
      </Scroll>
    </KeyBoardSafe>
  )
}

export default React.memo(Home)

