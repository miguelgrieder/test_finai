import { Text } from './Themed';

type Stock =  {
    name: String
}

type StockListItem = {
    stock: Stock
}

export default function StockListItem({ stock }: StockListItem) {
    return <Text> {stock.name} {stock.close} </Text>;
}