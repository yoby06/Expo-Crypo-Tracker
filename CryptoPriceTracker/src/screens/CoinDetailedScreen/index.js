import React,{useState} from 'react'
import Coin from '../../../assets/data/crypto.json' 
import { View, Text , Dimensions, TextInput} from 'react-native'
import CoinDetailHeader from './components/CoinDetailedHeader/index';
import styles from './styles';
import {AntDesign} from "@expo/vector-icons"

import { ChartDot, ChartPath, ChartPathProvider, ChartYLabel } from '@rainbow-me/animated-charts';


const CoinDetailedScreen = () => {

  const { 
    image: { small} ,
    name, 
    symbol,
    prices,
    market_data:{
      market_cap_rank,
      current_price,
      price_change_percentage_24h
    },

    } = Coin;

    const [coinValue,setCoinValue] = useState("1")
    const [usdValue,setUsdValue] = useState(current_price.usd)


    const percentageColor = price_change_percentage_24h < 0 ? "#ea3943" : '#16c784';

    const chartColor = current_price.usd > prices[0][1] ? "#16c784 " : "#ea3943";

    const screenWidth = Dimensions.get("window").width;

    const formatCurrency = (value) =>  {
      "worklet";
      if(value === ""){
        return `$${current_price.usd.toFixed(2)}`
      }
      return `$${parseFloat(value).toFixed(2)}`
    }

    const changeUsdValue = (value) => {
        setCoinValue(parseFloat(value))

    };

    const changeCoinValue = (value) => {
      setUsdValue(parseFloat(value))

    };

  return (
    <View style={{paddingHorizontal:10}}> 
      <ChartPathProvider 
        data={{        
          points: prices.map(([x,y]) => ({x,y})), 
          smoothingStrategy: 'bezier' }}
        > 
        {/* x is the time , y is the price */}
        <CoinDetailHeader 
        image={small} 
        symbol={symbol} 
        marketCapRank={market_cap_rank}
        />
      <View style={styles.priceContainer}>
        <View> 
          <Text style={styles.name}>{name}</Text>

          <ChartYLabel
            format = {formatCurrency}
            style={styles.currentPrice}
          />

        </View>
        <View style={{backgroundColor: percentageColor, paddingHorizontal:3, paddingVertical:5 ,borderRadius:5,flexDirection:"row"}}>
        <AntDesign 
              name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"} 
              size={12} 
              color={"white"} 
              style={{ alignSelf:"center",marginRight:5}}
               />
          <Text style={styles.priceChange}>{price_change_percentage_24h.toFixed(2)}%</Text>
        </View>
      </View>

          <ChartPath 
          strokeWidth = {5}
          height={screenWidth / 2} 
          stroke={chartColor}
           width={screenWidth} />

          <ChartDot style={{backgroundColor: chartColor}} />

        
        <View style={{flexDirection:"row"}}>
          
          <View style={{flexDirection:"row",flex:1}}>
            <Text style={{color: "white",alignSelf:"center"}}>{symbol.toUpperCase()} </Text>
            <TextInput 
            style={styles.input} 
            value={coinValue.toString()}
            keyboardType="numeric"
            onChangeText={changeCoinValue}
            />
          </View>
          <View style={{flexDirection:"row",flex:1}}>
            <Text style={{color: "white",alignSelf:"center"}}>USD </Text>
            <TextInput
             style={styles.input} 
             value={usdValue.toString()} 
             keyboardType="numeric"
             onChangeText={changeUsdValue}
            />
          </View>

        </View>
      </ChartPathProvider>

    </View>
  )
}

export default CoinDetailedScreen