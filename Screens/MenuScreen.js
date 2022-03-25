import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CoctailsContext } from "../API/Context";
import Carousel from "react-native-snap-carousel";
import React, {useContext} from 'react';
import { categories } from "../API/Categories";

const MenuScreen = () => {
  const { setCategory, setSource, darkTheme, fetchCoctailsFromCat, fetchInds, fetchCoctailsFromIn, ind : {drinks} } = useContext(CoctailsContext);
  const windowWidth = Dimensions.get("window").width;
  const SLIDE_WIDTH = Math.round(windowWidth / 3.5);
  fetchInds();
  return (
    <View>
      <Text style={styles.header}>Categories</Text>
      <View style={styles.cs}>
      <Carousel
        layout={"default"}
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => fetchCoctailsFromCat(item.strCategory)}
              style={styles.category}
            >
              <Image source={{ uri: item.pic }} style={styles.categoryImage} />
              <Text
                style={{ ...styles.name, color: darkTheme ? "white" : "black" }}
              >
                {item.strCategory}
              </Text>
            </TouchableOpacity>
          );
        }}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
      </View>
      <Text style={styles.header}>Ingredients</Text>
      <Carousel
        layout={"default"}
        data={drinks}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => fetchCoctailsFromIn(item.strIngredient1)}
              style={styles.category}
            >
              <Image source={{ uri: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg" }} style={styles.categoryImage} />
              <Text
                style={{ ...styles.name, color: darkTheme ? "white" : "black" }}
              >
                {item.strIngredient1}
              </Text>
            </TouchableOpacity>
          );
        }}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  cs: {
    backgroundColor: "rgba(255,255,255,0.1)"
  },
  category: {
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  categoryImage: {
    height: "60%",
    width: "100%",
    resizeMode: "contain",
  },
  header:{
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontSize: 28
  }
})
export default MenuScreen