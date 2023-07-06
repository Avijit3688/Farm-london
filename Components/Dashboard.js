import { StyleSheet, Text, TextInput, View,TouchableOpacity,Image,CheckBox } from 'react-native';
import React, { useEffect } from 'react';
import { Icon } from '@rneui/themed';
import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import {useCookies } from 'react-cookie';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FilterScreen from './FilterScreen';
import {Button,Card , Title ,Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Profile from './Profile';
import SettingsScreen from './SettingsScreen';
import Cart from './Cart';
import BottomBar from './BottomBar';
import { NavigationContainer } from '@react-navigation/native';

const Dashboard = () => {
    const [products, setProducts] = useState([])
    const [name, setName] = useState([])
    const [cookies,setCookie,removeCookie]=useCookies();
    const [inputData , setInputData] =useState("");
    // const [selectItem , setSelectItem] =useState("");
    const Drawer = createDrawerNavigator();
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation()
    // fetch('https://6327cb305731f3db995e3372.mockapi.io/ishop')
    //     .then(res => res.json())
    //     .then(result => setProducts(result))
        function handleSignOut(){
            console.log("signout pressed")
            removeCookie("name")
            navigation.navigate('Customer')
          }
    const filterBy = ["Latest"," Popularity","Price[Highest-lowsest]", "Price[Lowest-highest]", "Name[A-Z]", "Name[Z-A]","Distance"]
    function handleSearch(e){
        console.log(e.target.value);
            setInputData(e.target.value)
        }
        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(result => setProducts(result))
            setName(products)

        }, [name])
        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(result => setName(result))
            console.log("name",name);
        }, [])
// JavaScript program to calculate Distance Between
// Two Points on Earth

    function distance(lat1,
        lat2, lon1, lon2)
{

// The math module contains a function
// named toRadians which converts from
// degrees to radians.
lon1 =  lon1 * Math.PI / 180;
lon2 = lon2 * Math.PI / 180;
lat1 = lat1 * Math.PI / 180;
lat2 = lat2 * Math.PI / 180;

// Haversine formula
let dlon = lon2 - lon1;
let dlat = lat2 - lat1;
let a = Math.pow(Math.sin(dlat / 2), 2)
    + Math.cos(lat1) * Math.cos(lat2)
    * Math.pow(Math.sin(dlon / 2),2);

let c = 2 * Math.asin(Math.sqrt(a));

// Radius of earth in kilometers. Use 3956
// for miles
let r = 6371;

// calculate the result
return(c * r);
}
const handleFilterChange=(selectItem)=>{
                switch(selectItem){
                case "Price[Highest-lowsest]":
                   return  setName(
                            //ascending-console.log(products.sort((p1, p2) => (p1.price < p2.price) ? -1 : 0))
                            //Descending-console.log(products.sort((p1, p2) => (p1.price > p2.price) ? -1 : 0))
                            products.sort((p1, p2) => (p1.price > p2.price) ? -1 : 0),
                            console.log(products.sort((p1, p2) => (p1.price > p2.price) ? -1 : 0))
                    )
                case "Price[Lowest-highest]":
                   return  setName(
                           products.sort((p1, p2) => (p1.price < p2.price) ? -1 : 0)
                    )
                case "Name[A-Z]":
                   return  setName(
                        products.sort((p1, p2) => (p1.title < p2.title) ? -1 : 0)
                    )

                case "Name[Z-A]":
                   return  setName(
                            products.sort((p1, p2) => (p1.title > p2.title) ? -1 : 0)
                    )
                case "Popularity":
                   return  setName(
                         products.map((ele)=>ele.sort((p1,p2)=>(p1.rating.rate>p2.rating.rate)? -1:0))
                    )
                case "Distance":
                   return  setName(
                        products.sort((p1,p2)=>(distance(cookies.Latitude,p1.latitude,cookies.Longitude,p2. longitude)>distance(cookies.Latitude,p2.latitude,cookies.Longitude,p2.longitude))? -1:0))
                    )
                default:
                   return  setName(
                           products
                    )
            }
}
console.log("products",name);
    return (
        <>
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
                <Text onPress={handleSignOut}>Signout</Text>
            </View>
            <View style={{
                        display:"flex",
                        justifyContent: 'center',
            }}>
                <TextInput
                style={styles.input}
                placeholder="Search for Goods,Name,etc..."
                onChange={handleSearch}
                />
            </View>
            <View>
                <View>
                <View style={styles.container}>
                        <Text style={{color:"lightblue"}}>Sort By</Text>
                        <SelectDropdown
                        searchInputStyle={{Color:"lightblue"}}
	                    data={filterBy}
                        onSelect={handleFilterChange}
	                    // onSelect={(selectedItem, index) => {
                        //     setSelectItem(selectedItem)
	                	// console.log(selectedItem, index)
	                    // }}
                        />
                    </View>
                </View>

            </View>
                {/* <Drawer.Navigator>
                    <Drawer.Screen
                    key='products'
                    name="products"
                    component={FilterScreen}
                    />
                </Drawer.Navigator> */}
            <View style={{ display: "flex", flexWrap: "wrap", flexDirection: "row",marginBottom:"6vh" }} >
             {
                name.filter((user)=>user.title.toLowerCase().includes(inputData)).length>0 ?
                name.filter((user)=>user.title.toLowerCase().includes(inputData)).map((data)=>
            //     <Card style={{ margin: "10px", width: "40vw" }}>
            //     <Card.Image
            //     style={{height:100,width:100}}
            //     source={{ uri: data.image }}
            //      />
            //     <Card.Body>
            //         <Card.Title>{data.title}</Card.Title>
            //         <Card.Text>{data.description.slice(0, 200)}</Card.Text>
            //         <View style={{
            //             display: "flex",
            //             flexDirection: "row",
            //             justifyContent: 'space-around',
            //         }}>
            //             <Card.Text style={{ color: "blue" }}>
            //                 <Icon
            //                     name='star'
            //                     type='AntDesign'
            //                     color='green'
            //                 />
            //                 <Text>{data.rating.rate}[{data.rating.count}]</Text>

            //             </Card.Text>
            //             <Card.Text style={{ color: "green" }}>
            //                 <Text>&#8377;{data.price}</Text>
            //             </Card.Text>

            //         </View>
            //         <Button
            //             onPress={() =>
            //                 navigation.navigate('Buyingdetails')
            //             }
            //             title="BuyNow"
            //             color="orange"
            //             accessibilityLabel="Buy items"
            //         />
            //         <hr />
            //     </Card.Body>
            //    </Card>

            <Card style={{ margin: "10px", width: "40vw" }}>
            <Card.Content>
                <Title>{data.title}</Title>
            </Card.Content>
            <Card.Cover
                 style={{height:100,width:100}}
                 source={{ uri: data.image }}/>
           <Card.Content>
            <Paragraph>{data.description.slice(0, 200)}</Paragraph>
            </Card.Content>
           <Card.Content>
            <Paragraph>{data.description.slice(0, 200)}</Paragraph>
            </Card.Content>
            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: 'space-around',
            }}>
                <Card.Content style={{ color: "blue" }}>
                    <Icon
                        name='star'
                        type='AntDesign'
                        color='green'
                    />
                    <Text>{data.rating.rate}[{data.rating.count}]</Text>
                </Card.Content>
                <Card.Content style={{ color: "green" }}>
                    <Text>&#8377;{data.price}</Text>
                </Card.Content>
            </View>
            <Card.Actions>
              <Button onPress={()=>{navigation.navigate('Payment')}}>Buy Now</Button>
            </Card.Actions>
          </Card>
                ):<Text>No product found</Text>
             }
             </View>
  <NavigationContainer independent={true} style={{position:"absolute",bottom:"4px"}}>
    <BottomBar/>
  </NavigationContainer>
{/* <View >
<BottomBar  />
</View> */}
          </View>
    </>
    )
}
export default Dashboard
const styles = StyleSheet.create({
    input: {
        height: 40,
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
