import React from 'react'
import { useEffect } from 'react'
import { Button, Image, PermissionsAndroid,Text, View } from "react-native";
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-bootstrap/Modal';
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
        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            FarmLondon app gives portal for both farmers and customers to sell and buy their products respectively.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel sunt ullam impedit voluptatem eligendi aliquid in eius minus odio? Nihil debitis veniam cum quod exercitationem. Accusantium blanditiis libero itaque repudiandae a dolores. Nostrum nihil expedita accusamus velit? Temporibus eius, quam at voluptatum suscipit alias consequuntur voluptas, ipsum deserunt, maiores quibusdam?
      </Modal.Body>
      <Modal.Footer>
        <Button
                onPress={()=>setModalshow(false)}
                title="Got It"
                color="red">
        </Button>
      </Modal.Footer>
        </Modal>
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
  });

const Home = () => {


    const navigation=useNavigation()
    useEffect(() => {
        requestPhonePermission()
    }, [])

    navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position) {
      console.log("position",position);
      console.log(`Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`);
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyD2Qh7j87r2z90kMhOWqK0DQpEOGgugaPw`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data",data);
      });
    }

  return (
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
  )
}

export default Home