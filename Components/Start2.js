import { Image, StyleSheet,  View,Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const Start2 = () => {
    const navigation=useNavigation()
  return (
    <View>
      <Image
        style={{height:"95vh",width:"100vw"}}
        source={{
          uri: 'https://images-na.ssl-images-amazon.com/images/I/51T73kZ+g6L.jpg',
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
        navigation.navigate('Start3')
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

export default Start2

const styles = StyleSheet.create({})