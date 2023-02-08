import { View, Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import CoinDetailedScreen from '../screens/CoinDetailedScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator 
        screenOptions={{headerShown:false}}
    >
        <Stack.Screen name={"Home"} component={HomeScreen} />
        <Stack.Screen name={"CoinDetailedScreen"} component={CoinDetailedScreen} />
    </Stack.Navigator>
  )
}

export default Navigation