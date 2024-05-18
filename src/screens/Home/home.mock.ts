import { random } from 'lodash';

export type Coin = {
    id: number,
    price: number,
    name: string,
    symbol: string,
    icon: string,
    percent: number
}

export const fakeDataCoin: Coin[] = [
    {
        id: 1,
        price: 65578.571823,
        name: 'Bitcoin',
        symbol: 'BTC',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
        percent: random(-80, 172)
    },
    {
        id: 2,
        price: 65578.571823,
        name: 'Ethereum',
        symbol: 'ETH',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
        percent: random(-80, 172)
    },
    {
        id: 3,
        price: 65578.571823,
        name: 'Binance Coin',
        symbol: 'BNB',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
        percent: random(-80, 172)
    },
    {
        id: 4,
        price: 65578.571823,
        name: 'Tether',
        symbol: 'USDT',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
        percent: random(-80, 172)
    },
    {
        id: 5,
        price: 65578.571823,
        name: 'Cardano',
        symbol: 'ADA',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
        percent: random(-80, 172)
    },
    {
        id: 6,
        price: 65578.571823,
        name: 'XRP',
        symbol: 'XRP',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
        percent: random(-80, 172)
    },
    {
        id: 7,
        price: 65578.571823,
        name: 'Dogecoin',
        symbol: 'DOGE',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png',
        percent: random(-80, 172)
    },
    {
        id: 8,
        price: 65578.571823,
        name: 'Polkadot',
        symbol: 'DOT',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png',
        percent: random(-80, 172)
    },
]