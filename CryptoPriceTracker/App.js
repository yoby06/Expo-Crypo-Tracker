 import { StyleSheet, View , FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CoinItem from './src/components/CoinItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <CoinItem name={"Yobi"}/>
      <CoinItem name={"Mobi"}/>

       <StatusBar style="light"
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop:50,
  },
});
