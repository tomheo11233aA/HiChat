import Item from './Item'
import Header from './Header'
import Scroll from '@common/Scroll'
import React, { useState } from 'react'
import { IItem } from './createwallet.model'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { fakeData } from './createwallet.mock'

const CreateNewWallet = () => {
  const [isShow, setIsShow] = useState<{ [key: number]: boolean }>({})
  const toggleShow = (id: number) => {
    setIsShow(prev => ({ ...prev, [id]: !prev[id] }))
  }
  return (
    <KeyBoardSafe>
      <Scroll flex={1}>
        <Header />
        {fakeData.map((item: IItem) => (
          <Item key={item.id} item={item} isShow={isShow} toggleShow={toggleShow} />
        ))}
      </Scroll>
    </KeyBoardSafe>
  )
}

export default React.memo(CreateNewWallet)

