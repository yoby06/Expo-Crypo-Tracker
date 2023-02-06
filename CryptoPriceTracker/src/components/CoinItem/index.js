import React from 'react'
import { Text,View,Image, StyleSheet} from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import styles from "./styles"

const CoinItem = ({name}) => {
    console.log(name)

  return (
    <View>
      <View style={styles.coinContainer}>
      <Image 
      source={{
        uri:"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
      }} 
        style={{
        height:30,
        width:30,
        marginRight:10,
        alignSelf:"center"
      }}/>
    <View>
       <Text style={styles.title}>Bitcoin</Text>
        <View style={{flexDirection:"row"}}>
            <View style={styles.rankContainer}>
              <Text style={styles.rank}>1</Text>
            </View>
              <Text style={styles.text}>BTC</Text>
              <AntDesign 
              name="caretdown" 
              size={12} 
              color="white" 
              style={{ alignSelf:"center",marginRight:5, }}
               />
              <Text style={styles.text}>0.63%</Text>
        </View>
       </View>
       
       <View style={{marginLeft:"auto"}}>
          <Text style={styles.title}>56265</Text>
          <Text style={styles.text}>MCap 1.076 T</Text>
       </View>
       </View>
       
       <StatusBar style="light"
       />
    </View>
  );
}


export default CoinItem