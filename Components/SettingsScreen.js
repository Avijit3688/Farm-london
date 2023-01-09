import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
const SettingsScreen = () => {
  const navigation=useNavigation()
  function handleSignOut(){
    console.log("signout pressed")
    removeCookie("name")
    navigation.navigate('Customer')
  }
  return (
    <View>
               <View onPress={()=>{navigation.navigate('Notifications')}} style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    margin:"4px",
                    borderBottomWidth:"1px"
                }}>
                <Text>Notifications</Text>
                <Icon name="arrow-forward-circle" type="Ionicons"/>
                </View>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    margin:"4px",
                    borderBottomWidth:"1px"
                }}>
                <Text>Saved Address</Text>
                <Icon name="arrow-forward-circle" type="Ionicons"/>
                </View>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    margin:"4px",
                    borderBottomWidth:"1px"
                }}>
                <Text>Saved Cards</Text>
                <Icon name="arrow-forward-circle" type="Ionicons"/>
                </View>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    margin:"4px",
                    borderBottomWidth:"1px"
                }}>
                <Text>Change Password</Text>
                <Icon name="arrow-forward-circle" type="Ionicons"/>
                </View>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    margin:"4px",
                    borderBottomWidth:"1px"
                }}>
                <Text>About us</Text>
                <Icon name="arrow-forward-circle" type="Ionicons"/>
                </View>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    margin:"4px",
                    borderBottomWidth:"1px"
                }}>
                <Text>Terms and conditions</Text>
                <Icon name="arrow-forward-circle" type="Ionicons"/>
                </View>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    margin:"4px",
                    borderBottomWidth:"1px"
                }}>
                <Text>Privacy Policy</Text>
                <Icon name="arrow-forward-circle" type="Ionicons"/>
                </View>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    margin:"4px",
                    borderBottomWidth:"1px"
                }}>
                <Text>Contact us</Text>
                <Icon name="arrow-forward-circle" type="Ionicons"/>
                </View>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    margin:"4px",
                    borderBottomWidth:"1px"
                }}>
                <Text>Share App</Text>
                <Icon name="arrow-forward-circle" type="Ionicons"/>
                </View>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    margin:"4px",
                    borderBottomWidth:"1px"
                }}>
                <Text onPress={handleSignOut}>Logout</Text>
                <Icon name="arrow-forward-circle" type="Ionicons"/>
                </View>
                <View
                style={{
                  display: "flex",
                  justifyContent: 'center',
                  margin:"10px",
                }}>
                </View>
    </View>
  )
}
export default SettingsScreen

const styles = StyleSheet.create({})