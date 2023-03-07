
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './Components/Home';
import Customer from './Components/Customer';
import Vendor from './Components/Vendor';
import Dashboard from './Components/Dashboard';
import Forgot from './Components/Forgot';
import Contact from './Components/Contact';
import SignUp from './Components/SignUp';
import BuyDetails from './Components/BuyDetails';
import Errorpage from './Components/Errorpage';
import FilterScreen from './Components/FilterScreen';
import BottomBar from './Components/BottomBar';
import Notifications from './Components/Notifications';
import Start1 from './Components/Start1';
import Start2 from './Components/Start2';
import Start3 from './Components/Start3';
import Payment from './Components/Payment';
// import { StripeProvider } from '@stripe/stripe-react-native';

// import First from './Components/First';

// import ContactUs from './Buttons/ContactUs';
// import Service from './Buttons/Service';
// import ServiceInner from './Components/ServiceInner';


export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();


  return (
    // <StripeProvider
    //   publishableKey="pk_test_51M8lmWSEqSe94Fe8W3q7kpDkVRWboHEb7WYYptbYVJh1WstNEPH1TiEwl9WNLkoMrUmZruw0xzhGsq6Hd5w9UWjX00nZZLE4tI"
    //   // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    //   // merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    // >
<>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Start1'>
      <Stack.Screen name="Home" options={{headerShown:false}}  component={Home} />
      <Stack.Screen name="Customer"options={{headerTitle: ""}}  component={Customer} />
      <Stack.Screen name="Vendor"  options={{headerTitle: ""}}component={Vendor} />
      <Stack.Screen name="Dashboard" options={{headerTitle: "products List"}} component={Dashboard} />
      <Stack.Screen name="Forgot" options={{headerTitle: ""}} component={Forgot} />
      <Stack.Screen name="Contact"options={{headerTitle: ""}}  component={Contact} />
      <Stack.Screen name="SignUp"options={{headerTitle: ""}}  component={SignUp} />
      <Stack.Screen name="Buyingdetails"options={{headerTitle: ""}}  component={BuyDetails} />
      <Stack.Screen name="Errorpage" options={{headerTitle: ""}} component={Errorpage} />
      <Stack.Screen name="Notifications" options={{headerTitle: ""}} component={Notifications} />
      <Stack.Screen name="Start1" options={{headerShown:false}} component={Start1} />
      <Stack.Screen name="Start2" options={{headerShown:false}} component={Start2} />
      <Stack.Screen name="Start3" options={{headerShown:false}} component={Start3} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  </NavigationContainer>

</>

  // {/* <NavigationContainer>
  // <Drawer.Navigator>
  //   <Drawer.Screen
  //   key='products'
  //   name="products"
  //   component={Dashboard}
  //   />
  // </Drawer.Navigator>
  // </NavigationContainer> */}

  // </StripeProvider>
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