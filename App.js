
import { StyleSheet, Text, View, StatusBar,ImageBackground  } from 'react-native';
import Tabs from './components/Tabs';
import Context from './API/Context';
import { CoctailsContext } from "./API/Context";
import {useContext} from 'react';

const image = { uri: "https://wallpaperaccess.com/full/3966936.jpg" };
const image2 = { uri: "https://wallpaperaccess.com/full/3966931.jpg" };
function App() {
  const { darkTheme } = useContext(CoctailsContext);
  return (
    <View style={{...styles.container, backgroundColor: "#282C35"}}>
      <ImageBackground source={darkTheme?image:image2} resizeMode="cover" style={styles.image}>
      <Tabs />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    fontFamily: 'Roboto'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default () => {
  return(<Context>
    <App/>
  </Context>)
}