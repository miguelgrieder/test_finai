import {View, Text} from '@/src/components/Themed';
import React from "react";
import {useLocalSearchParams} from "expo-router";
import top5 from '@/assets/data/top5.json'
import StockListItem from "@/src/components/StockListItem";
import {Stack} from "expo-router";

const StockDetails = () => {
    const {symbol} = useLocalSearchParams()

    const stock = top5[symbol];

    if (!stock) return <Text>Stock with symbol {symbol} could not be found</Text>;

    return (
        <View style={{padding: 10}}>
            <Stack.Screen options={{ title: stock.symbol, headerBackTitleVisible: false}} />
            <StockListItem stock={stock} />
        </View>
    )
}

export default StockDetails;
