import { View, Text, useWindowDimensions } from 'react-native'
import React, {useState, useContext} from 'react'
import { SceneMap, TabView } from 'react-native-tab-view';
import CoctailsScreen from '../Screens/CoctailsScreen';
import MenuScreen from '../Screens/MenuScreen';
import TopNavigation from './TopNavigation';
import { CoctailsContext } from '../API/Context';


const Tabs = () => {
    const layout = useWindowDimensions();
    const {index, setIndex} = useContext(CoctailsContext);
    const [routes] = useState([
        {key: "first", title: "Menu"},
        {key: "second", title: "Coctails"}
    ]);
    const renderScene=SceneMap({
        first: MenuScreen,
        second: CoctailsScreen,
    });
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={()=> <TopNavigation index={index} setIndex={setIndex}></TopNavigation>}
    />
  );
}

export default Tabs