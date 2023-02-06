import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons, EvilIcons } from '@expo/vector-icons'
import Coin from '../../../assets/data/crypto.json' 
import styles from './styles'

const CoinDetailedScreen = () => {

  const { 
    image: { small} , 
    symbol,
    market_data:{market_cap_rank}
    } = Coin;

  return (
    <View style={styles.headerContainer}>
      <Ionicons name="chevron-back-sharp" size={30} color="white"/>
      <Image source={{uri: small}} style={{width:30,height:30}} /> 
      <Text style={{color:"white"}}> {symbol.toUpperCase()} </Text>
      <Text style={{color:"white"}}> {market_cap_rank} </Text>
      <EvilIcons name="user" size={30} color="white"/>

    </View>
  )
}

export default CoinDetailedScreen