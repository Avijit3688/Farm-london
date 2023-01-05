import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const Errorpage = () => {
    const navigation=useNavigation()
  return (
    <View>
        <View style={styles.container}>
        <Text style={{color:"red"}}>Invalid Credentials</Text>
        </View>
        <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-around',
                }}>
      <Text style={{color:"blue"}}onPress={() =>
        navigation.navigate('Customer')
      }>please login again</Text>
      <Text>or</Text>
      <Text style={{color:"blue"}} onPress={() => navigation.navigate('Contact')}>Contact us</Text>
      </View>

    </View>
  )
}

export default Errorpage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})