
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Components/Home';
import Customer from './Components/Customer';
import Vendor from './Components/Vendor';
import Dashboard from './Components/Dashboard';
import Forgot from './Components/Forgot';
import Contact from './Components/Contact';
import SignUp from './Components/SignUp';
import BuyDetails from './Components/BuyDetails';
import Errorpage from './Components/Errorpage';
import SettingsScreen from './Components/SettingsScreen';
// import First from './Components/First';
// import ContactUs from './Buttons/ContactUs';
// import Service from './Buttons/Service';
// import ServiceInner from './Components/ServiceInner';
export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
      <Stack.Screen name="Customer" options={{headerShown:false}} component={Customer} />
      <Stack.Screen name="Vendor" options={{headerShown:false}} component={Vendor} />
      <Stack.Screen name="Dashboard" options={{headerShown:false}} component={Dashboard} />
      <Stack.Screen name="Forgot" options={{headerShown:false}} component={Forgot} />
      <Stack.Screen name="Contact" options={{headerShown:false}} component={Contact} />
      <Stack.Screen name="SignUp" options={{headerShown:false}} component={SignUp} />
      <Stack.Screen name="Buyingdetails" options={{headerShown:false}} component={BuyDetails} />
      <Stack.Screen name="Errorpage" options={{headerShown:false}} component={Errorpage} />
    <Tab.Navigator>
      <Tab.Screen name="products" component={Dashboard} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
