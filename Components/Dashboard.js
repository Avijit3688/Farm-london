import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import {useCookies } from 'react-cookie';
const Dashboard = () => {
    const [products, setProducts] = useState([])
    const [cookies,setCookie,removeCookie]=useCookies();
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(result => setProducts(result))
        function handleSignOut(){
            removeCookie("name")
            navigate("Customer")
          }
    return (
        <View>
            <View style={{ width: "100%", height: 60, backgroundColor: "red" }}>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-around',
                }}>
                    <Text>
                        <Icon
                            name='location-pin'
                            type='Entypo'
                        />
                        <Text>{cookies.Latitude}</Text>
                        <Text>{cookies.Longitude}</Text>
                    </Text>
                    <Text >
                        <Icon
                            name='notifications'
                            type='Ionicons'
                        />

                        </Text>

                </View>
            </View>
            <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-between',
                }}>
                <Text>Hello {cookies.name}</Text>
                <Text onPress={()=>{handleSignOut}}>Signout</Text>
            </View>
            <View style={{
                        display:"flex",
                        justifyContent: 'space-between',
            }}>
                <TextInput
                style={styles.input}
                placeholder="Search for Goods,Name,etc..."
            />
                        <Icon
                            name='location-pin'
                            type='Entypo'
                        />
            </View>

            <View>
                <View style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }} >
                    {
                        products.map((data) =>
                            <Card style={{ margin: "10px", width: "40vw" }}>
                                {/* <Card.Img style={{height:100,width:100}} src={data.image}> */}
                                {/* </Card.Img> */}
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>{data.description.slice(0, 200)}</Card.Text>
                                    <View style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: 'space-around',
                                    }}>
                                        <Card.Text style={{ color: "blue" }}>
                                            <Icon
                                                name='star'
                                                type='AntDesign'
                                                color='green'
                                            />
                                            <Text>{data.rating.rate}[{data.rating.count}]</Text>

                                        </Card.Text>
                                        <Card.Text style={{ color: "green" }}>
                                            <Text>&#8377;{data.price}</Text>
                                        </Card.Text>

                                    </View>
                                    <Button
                                        onPress={() =>
                                            navigation.navigate('Buyingdetails')
                                        }
                                        title="BuyNow"
                                        color="orange"
                                        accessibilityLabel="Buy items"
                                    />
                                    <hr />
                                </Card.Body>
                            </Card>
                        )
                    }
                </View>



            </View>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    input: {
        height: 40,
        width:"85vh",
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
});