export interface Coin {
    id: number;
    price: number;
    name: string;
    symbol: string;
    icon: string;
}

export interface ContentItem {
    id: number;
    title: string;
    subTitle: string;
    coin?: Coin[];
}

export interface IItem {
    id: number;
    title: string;
    onPress: () => void;
    content: ContentItem[];
}