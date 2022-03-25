import { Dimensions, Image, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleCoctails = ({item,index}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>{item.strDrink}</Text>
      <Image
        source={{ uri: item.strDrinkThumb }}
        style={{ height: "70%", resizeMode: "cover", width: windowWidth*0.9 }}
      />      
        <Text style={styles.details}>View details</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    title:{
        fontSize:25,
        color:"white",
        marginBottom: 15,
        fontWeight: "bold"
    },
    content: {
        backgroundColor: "rgba(0, 92, 184, 0.3)",
        borderRadius: 15,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
      },
      details:{
        marginTop: 15,
        fontSize: 20,
        fontStyle: 'italic',
        color: 'white'
      }
})
export default SingleCoctails