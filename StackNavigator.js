import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import SavedScreen from "./screens/SavedScreen";
import BookingScreen from "./screens/BookingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./screens/SearchScreen";
import PlacesScreen from "./screens/PlacesScreen";
import MapScreen from "./screens/MapScreen";
import PropertyInfoScreen from "./screens/PropertyInfoScreen";
import RoomsScreen from "./screens/RoomsScreen";
import UserScreen from "./screens/UserScreen";
import ConfirmationScreen from "./screens/ConfirmationScreen";
import LoginScreen from "./screens/LoginScreen";
import Splash from "./Splash";
import RegisterScreen from "./screens/RegisterScreen";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  //const Stack = createStackNavigator();


  function BottomTabs() {
    return (
      <Tab.Navigator tabBarOptions={{
        activeTintColor: "#8b0000", // Set active tab label color to red
        inactiveTintColor: "#ff8c00", // Set inactive tab label color to black
      }}>
        
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Dashboad",
            headerShown: false,
            //tabBarLabelStyle:{color:"#ff8c00"},
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#8b0000" />
              ) : (
                <AntDesign name="home" size={24} color="#ff8c00" />
              ),
          }}
        />

        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: "Recommed",
            headerShown: false,
            //tabBarLabelStyle:{color:"#ff8c00"},
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={24} color="#8b0000" />
              ) : (
                <AntDesign name="hearto" size={24} color="#ff8c00" />
              ),
          }}
        />

        <Tab.Screen
          name="Bookings"
          component={BookingScreen}
          options={{
            tabBarLabel: "Whishlist",
           // tabBarLabelStyle:{color:"#ff8c00"},
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                
                <FontAwesome name="list" size={24} color="#8b0000" />
              ) : (
                
                <Feather name="list" size={24} color="#ff8c00" />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            //tabBarLabelStyle: ({ focused }) => ({
              //color: focused ? "#8b0000" : "#000000", // Set color to red when focused, black otherwise
           // }),
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#8b0000" />
                
              ) : (
                <Ionicons name="person-outline" size={24} color="#ff8c00" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
    
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen 
  name="Splash" 
  component={Splash} 
  options={{
    headerStyle: { backgroundColor: '#e3492b' },
   headerTitleStyle: { color: 'white' }
  }} 
/>
     
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}}/>
        <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Places" component={PlacesScreen}/>
        <Stack.Screen name="Map" component={MapScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Info" component={PropertyInfoScreen} />
        <Stack.Screen name="Rooms" component={RoomsScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
