import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const Start1 = () => {
    const navigation=useNavigation()
  return (
    <View>
      <Image
        style={{height:"95vh",width:"100vw"}}
        source={{
          uri: 'https://images-cdn.ubuy.co.in/63502c095d877832c70e29e8-country-farms-super-fruit-and-veggies.jpg',
        }}
      />
      <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: 'space-between',
                margin:"4px",
                color:"red"
            }}>
        <Text
        style={{color:"red"}}
        onPress={() =>
        navigation.navigate('Start2')
      }>Skip</Text>
        <Text
        style={{color:"red"}}
        onPress={() =>
        navigation.navigate('Home')
      }>Get started</Text>
      </View>
    </View>
  )
}

export default Start1

const styles = StyleSheet.create({})