import React from 'react'
import { useEffect,useState } from 'react'
import { Button, Image, PermissionsAndroid,Text, View,Modal,Pressable,Alert } from "react-native";
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
const requestPhonePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CALL_PHONE,
        {
          title: "Farm London App Phone calls Permission",
          message:
            "Farm London App needs to get access for phone calls " +
            "to give you seamless experience.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the call log");
      } else {
        console.log("Call permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const styles = StyleSheet.create({
    Logo: {
      width: 400,
      height:300,
    },
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        centeredView: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22
        },
        modalView: {
          margin: 20,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 35,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5
        },
        button: {
          borderRadius: 20,
          padding: 10,
          elevation: 2
        },
        buttonClose: {
          backgroundColor: "red",
        },
        textStyle: {
          color: "white",
          fontWeight: "bold",
          textAlign: "center"
        },
        modalText: {
          marginBottom: 15,
          textAlign: "center"
        }
  });


const Home = () => {
  useEffect(() => {
    setModalVisible(true)
  }, [])
  const [modalVisible, setModalVisible] = useState(false);

    const navigation=useNavigation()
    useEffect(() => {
        requestPhonePermission()
    }, [])

    Geolocation.getCurrentPosition(
      (position) => {
        console.log(`Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`);
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyD2Qh7j87r2z90kMhOWqK0DQpEOGgugaPw`)
        .then((response) => response.json())
        .then((data) => {
          console.log("data",data);
        });
       }
    );
  return (
    <>
        <View style={styles.container}>
      <Text>
      <Image
      style={styles.Logo}
        source={{
          uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3f0a9b26044181.5634eb7e36d57.jpg',
        }}
      />
      </Text>
      <View>
      <Button
      onPress={() =>
        navigation.navigate('Customer')
      }
      title="Customer"
      color="green"
      accessibilityLabel="Customer panel to buy foodgrains,vegetables,etc"
      />
      <View style={{marginTop:"30%"}}/>
      <Button
      onPress={() =>
        navigation.navigate('Vendor')
      }
      title="Vendor"
      color="red"
      accessibilityLabel="vendor panel to list foodgrains,vegetables,etc"
      />
      </View>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
                   FarmLondon app gives portal for both farmers and customers to sell and buy their products respectively.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel sunt ullam impedit voluptatem eligendi aliquid in eius minus odio? Nihil debitis veniam cum quod exercitationem. Accusantium blanditiis libero itaque repudiandae a dolores. Nostrum nihil expedita accusamus velit? Temporibus eius, quam at voluptatum suscipit alias consequuntur voluptas, ipsum deserunt, maiores quibusdam?
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Got it</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      </View>
    </>

  )
}

export default Home