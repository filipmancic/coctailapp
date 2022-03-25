import React, { useContext, useState } from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { CoctailsContext } from "../API/Context";
import Carousel from "react-native-snap-carousel";
import SingleCoctails from '../components/SingleCoctails'
import Welcome from "../components/Welcome";

const CoctailsScreen = () => {
  const {coctails: {drinks}} = useContext(CoctailsContext);
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width*0.8;
  const [active, setActive] = useState();

  return (
    <View style={styles.carousel}>
      {/*<Welcome onPress=''></Welcome>*/}
      {/*<Text style={styles.hdr}>The Coctail World</Text>*/}
      {
        drinks && (
          <Carousel          
            layout={'default'}
            data = {drinks.slice(0,20)}
            sliderHeight={windowHeight}
            itemHeight={windowHeight*0.6}
            vertical={true}
            renderItem={({item, index})=>(
              <SingleCoctails item={item} index={index} />
            )}
            onSnapToItem={(active)=>setActive(active)}
          />
        )
      }

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
  },
  carousel: {
    flex: 1,
    //transform: [{ scaleY: -1 }],
    //backgroundColor: "black",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
})
export default CoctailsScreen