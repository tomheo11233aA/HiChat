import Note from '../Note'
import Scroll from '@common/Scroll'
import Item from '../CreateWallet/Item'
import React, { useState } from 'react'
import Header from '../CreateWallet/Header'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { IItem } from '../CreateWallet/createwallet.model'
import { fakeData } from '../CreateWallet/createwallet.mock'

const AddCurrentWallet = () => {
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

export default React.memo(AddCurrentWallet)