import React from 'react'
import { Ionicons, EvilIcons } from '@expo/vector-icons'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'


export default function CoinDetailHeader(props) {

  const { image , symbol , marketCapRank } = props;
  
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
        <Ionicons 
          name="chevron-back-sharp" 
          size={30} 
          color="white"
          onPress = {() => navigation.goBack()}
        />
        <View style={styles.tickerContainer}>
          <Image source={{uri: image}} style={{width:30,height:30}} /> 
          <Text style={styles.ticketTitle}> {symbol.toUpperCase()} </Text>
          <View style={styles.rankContainer}>
          <Text style={{color:"white",fontWeight:"bold",fontSize:15}}> #{marketCapRank} </Text>
          </View>
        </View>
        <EvilIcons name="user" size={30} color="white"/>
      </View>
  )
}