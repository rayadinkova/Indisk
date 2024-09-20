import * as React from "react";

import HomeScreen from './screens/Home';
import Menu from './screens/Menu';
import Reservations from "./screens/Reservations";
import Contact from "./screens/Contact";
import ItemPage from "./screens/Item";
import CustomDrawer from "./components/navigation/CustomDrawer";
import AntdesignIcon from "react-native-vector-icons/AntDesign";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import CartPage from "./screens/Cart";


 

const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
  return(
  <Drawer.Navigator 
  initialRouteName="Home" 
  drawerContent={(props) => <CustomDrawer {...props}/>}
  screenOptions={{
    headerShown: true,
    drawerInactiveBackgroundColor: "#24372B",
    drawerActiveTintColor: "white",
    drawerInactiveTintColor: "white",
    drawerLabelStyle:{
      fontSize: 25,
      fontWeight: 400,
    }
  }}
  >
    <Drawer.Screen 
    name="Home" 
    component={HomeScreen} 
    options={{
      title: "Home",
      drawerIcon: () =>{
        <AntdesignIcon name="home" size={20} color="white"/>
      }
    }} />
    <Drawer.Screen name="Menu" component={Menu} />
    <Drawer.Screen name="Reservations" component={Reservations}/>
    <Drawer.Screen name="Contact" component={Contact}/>
    <Drawer.Screen name="Item" component={ItemPage}/>
    <Drawer.Screen name="Cart" component={CartPage}/>
  </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
       
       <DrawerNavigator/>
    
    </NavigationContainer>
  );
}


