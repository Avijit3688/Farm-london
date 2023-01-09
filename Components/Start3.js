import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const Start3 = () => {
    const navigation=useNavigation()
  return (

    <View>
      <Image
        style={{height:"95vh",width:"100vw"}}
        source={{
          uri: 'https://be25fc86d34b5fbbed9f-31680fe6a43ab8be2a64aeef2ce2c76b.ssl.cf1.rackcdn.com/article/image/large_c3c2f910-2f57-4f96-92f8-26feb611e924.jpeg',
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
        navigation.navigate('Home')
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

export default Start3

const styles = StyleSheet.create({})