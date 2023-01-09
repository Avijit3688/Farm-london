import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dashboard from './Dashboard';
import Cart from './Cart';
import Profile from './Profile';
import SettingsScreen from './SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const BottomBar = () => {
    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    initialRouteName="Settings"
    screenOptions={{
      tabBarStyle: {
        backgroundColor: "#03dbfc",
      },
      tabBarActiveTintColor: "white",
    }}
  >

                <Tab.Screen name="Buying Zone"  component={Dashboard} />
                <Tab.Screen name="My cart"  component={Cart} />
                <Tab.Screen name="My Profile" component={Profile} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default BottomBar

const styles = StyleSheet.create({})