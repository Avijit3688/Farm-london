import { PermissionsAndroid, StyleSheet, Image, Text, View, TextInput, Button,ToastAndroid } from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { useState } from 'react';
import axios from "axios"
import { useCookies } from 'react-cookie'
const Customer = () => {
  const [users,setUsers]=useState();
  const [cookies,setCookie,removeCookie]=useCookies();
  const [userDetails, setUserDetails] = useState({
    Mobile: "", Password: ""
  });
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Farm London App location Permission",
          message:
            "Farm London App needs access to your location " +
            "in order to serve you better.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // setCookie("name",user.FirstName);
        console.log("You can access location");

      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(()=>{
    axios.get("http://localhost:4080/getusers")
         .then(response=>{
          setUsers(response.data)
         })
  },[]);
  const navigation = useNavigation()
  useEffect(() => {
    requestLocationPermission()
  }, [])
  const handleMobileChange = (e) => {
    setUserDetails({
      Mobile: e.target.value,
      Password: userDetails.Password
    })
  }
  const handlePasswordChange = (e) => {
    setUserDetails({
      Mobile: userDetails.Mobile,
      Password: e.target.value
    })
  }
  // navigator.geolocation.getCurrentPosition(showPosition);
  // function showPosition(position) {
  //   setCookie("Latitude",position.coords.latitude)
  //   setCookie("Longitude",position.coords.longitude)
  // }
  const handleLogin = () => {
    for(var user of users){
      if(user.Mobile==userDetails.Mobile && user.Pwd==userDetails.Password){
        setCookie("name",user.FirstName);
        navigation.navigate("Dashboard")  ;
        ToastAndroid.show("Logged in successfully", ToastAndroid.SHORT);

        break;
       }
       else{
        navigation.navigate("Errorpage")
        ToastAndroid.show("Try again", ToastAndroid.SHORT);
       }
       }
  }
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3f0a9b26044181.5634eb7e36d57.jpg',
          }}
        />
      </View>
      <View style={{ marginTop: "15%" }}>
        <View>
          <Text style={{ fontSize: 20, color: "green" }}>Login To your account</Text>
          <TextInput style={styles.input} placeholder="Enter your mobile number" onChange={handleMobileChange} />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            onChange={handlePasswordChange}
          >
          </TextInput>
          <View >
            <Icon
              name='eye'
              type='evilicon'
            />
          </View>
          <Text onPress={() => navigation.navigate('Forgot')} style={{ textAlign: 'right', color: "blue" }}>Forgot Credentials ?</Text>
          <View style={{ margin: "5%" }}>
            <Button
              onPress={handleLogin}
              // navigation.navigate('Dashboard')
              title="Login"
              color="red"
              accessibilityLabel="Enter"
            />
          </View>
        </View>
        <View style={{
          display: "flex",
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text>Not a Member Yet ? <Text style={{ color: "yellowgreen" }} onPress={() =>navigation.navigate('SignUp')}>Sign up</Text></Text>
        </View>
      </View>
      <View style={styles.largeGap}>
        <Text onPress={() => navigation.navigate('Contact')} className="fa-fa-phone" style={{ color: "yellowgreen" }}>Contact us</Text>
      </View>
    </View>
  )
}
export default Customer

const styles = StyleSheet.create({
  tinyLogo: {
    height: 100,
    width: 160
  },
  container: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "15%"
  },
  largeGap: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "10%"
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
  }
})