import { IItem } from "./createwallet.model"

export const fakeData: IItem[] = [
    {
        id: 1,
        title: 'Cụm từ bí mật',
        onPress: () => { console.log('Cum tu bi mat') },
        content: [
            {
                id: 1,
                title: 'Bảo mật',
                subTitle: 'Tạo và khôi phục ví bằng cụm từ bí mật gồm 12, 18 hoặc 24 từ. Bạn phải lưu trữ dữ liệu này theo cách thủ công hoặc sao lưu bằng bộ nhớ Google Drive.',
            },
            {
                id: 2,
                title: 'Giao dịch',
                subTitle: 'Tạo và khôi phục ví bằng cụm từ bí mật gồm 12, 18 hoặc 24 từ. Bạn phải lưu trữ dữ liệu này theo cách thủ công hoặc sao lưu bằng bộ nhớ %s.',
                coin: [
                    {
                        id: 1,
                        price: 65578.571823,
                        name: 'Bitcoin',
                        symbol: 'BTC',
                        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
                    },
                    {
                        id: 2,
                        price: 65578.571823,
                        name: 'Ethereum',
                        symbol: 'ETH',
                        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
                    },
                    {
                        id: 3,
                        price: 65578.571823,
                        name: 'Binance Coin',
                        symbol: 'BNB',
                        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
                    },
                    {
                        id: 4,
                        price: 65578.571823,
                        name: 'Tether',
                        symbol: 'USDT',
                        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
                    },
                    {
                        id: 5,
                        price: 65578.571823,
                        name: 'Cardano',
                        symbol: 'ADA',
                        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
                    },
                    {
                        id: 6,
                        price: 65578.571823,
                        name: 'XRP',
                        symbol: 'XRP',
                        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
                    },
                    {
                        id: 7,
                        price: 65578.571823,
                        name: 'Dogecoin',
                        symbol: 'DOGE',
                        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png',
                    },
                    {
                        id: 8,
                        price: 65578.571823,
                        name: 'Polkadot',
                        symbol: 'DOT',
                        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png',
                    },
                ]
            },
            {
                id: 3,
                title: 'Phí giao dịch',
                subTitle: 'Chỉ thanh toán phí mạng lướt (gas) bằng token gốc. Ví dụ: nếu bạn thực hiện giao dịch trên mạng lướt Etherium, bạn chỉ có thể thanh toán khoản phí này bằng ETH.',
            }
        ]
    },
    {
        id: 2,
        title: 'Swift',
        onPress: () => { console.log('Cum tu bi mat') },
        content: [
            {
                id: 1,
                title: 'Bảo mật',
                subTitle: 'Tạo và khôi phục ví bằng Face ID hoặc dấu vân tay. Việc này được thực hiện tự động bằng passkey trên thiết bị của bạn.',
            },
            {
                id: 2,
                title: 'Giao dịch',
                subTitle: 'Giao dịch hiện có sẵn 7 mạng lướt (chuỗi) EVM với ít bước hơn, đơn giản hơn',
                coin: [
                    {
                        id: 1,
                        price: 65578.571823,
                        name: 'Bitcoin',
                        symbol: 'BTC',
                        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
                    },
                    {
                        id: 2,
                        price: 65578.571823,
                        name: 'Ethereum',
                        symbol: 'ETH',
                        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
                    },
                    {
                        id: 3,
                        price: 65578.571823,
                        name: 'Binance Coin',
                        symbol: 'BNB',
                        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
                    },
                    {
                        id: 4,
                        price: 65578.571823,
                        name: 'Tether',
                        symbol: 'USDT',
                        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
                    },
                    {
                        id: 5,
                        price: 65578.571823,
                        name: 'Cardano',
                        symbol: 'ADA',
                        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
                    },
                    {
                        id: 6,
                        price: 65578.571823,
                        name: 'XRP',
                        symbol: 'XRP',
                        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
                    },
                    {
                        id: 7,
                        price: 65578.571823,
                        name: 'Dogecoin',
                        symbol: 'DOGE',
                        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png',
                    },
                    {
                        id: 8,
                        price: 65578.571823,
                        name: 'Polkadot',
                        symbol: 'DOT',
                        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png',
                    },
                ]
            },
            {
                id: 3,
                title: 'Phí giao dịch',
                subTitle: 'Chỉ thanh toán phí mạng lướt (gas) bằng bất kỳ token nào trong số hơn 200 token của chúng tôi. Dù sử dụng bất kỳ mạng lưới giao dịch nào, bạn có thể thanh toán khoản phí này bằng bất kỳ token nào đủ số dư'
            }
        ]
    },

]