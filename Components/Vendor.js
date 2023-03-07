import { Button, Linking, StyleSheet, Text, TextInput, View,Image } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
const Vendor = () => {
  return (
    <>
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
          <TextInput style={styles.input} placeholder="Enter your mobile number"  />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
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
      <View style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <Text>
       Wanna start business with us,REACH US
      </Text>
      <Button style={{color:"blue"}} onPress={() => Linking.openURL('mailto:avijitbehera01@gmail.com') }
      title="avijitbehera01@gmail.com" />

    </View>
    </>

  )
}
export default Vendor
const styles = StyleSheet.create({})