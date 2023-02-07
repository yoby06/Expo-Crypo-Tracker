import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    currentPrice : {
        color:"white",
        fontSize:30,
        fontWeight:"bold",
        letterSpacing:1.5,

    },
    name:{
      color:"white", 
      fontSize:15,
    },
    priceContainer:{
        padding: 15,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    priceChange:{
        color:"white",
        fontSize: 17,
        fontWeight:"500",
    }

})

export default styles;