import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <View>
      <Text style={styles.hdr}>Welcome to Coctail world!</Text>
      <TouchableOpacity>See featured coctails</TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    hdr:{
      textAlign: "center",
      marginTop: 15,
      fontSize: 30,
      fontStyle: "italic",
      fontWeight: "bold",
      fontFamily: "sans-serif-condensed",
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    }
})
export default Welcome