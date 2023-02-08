 import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';

export default function App() {
  return (
    <NavigationContainer 
        theme={{
          colors:{
            backgroundColor:"#121212"
          }
        }}
    >
        <View style={styles.container}>
          <Navigation/>
          <StatusBar style="light"/>
        </View>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop:50,
  },
});
