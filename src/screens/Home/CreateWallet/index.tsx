import Item from './Item'
import Note from '../Note'
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
        <Note note='Bạn có thể tạo một ví khác bất cứ lúc nào trong phần Quản lý ví.' />
      </Scroll>
    </KeyBoardSafe>
  )
}

export default React.memo(CreateNewWallet)