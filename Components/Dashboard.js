import { Button, StyleSheet, Text, TextInput, View,Picker,Check } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import {useCookies } from 'react-cookie';
const Dashboard = () => {
    const [products, setProducts] = useState([])
    const [cookies,setCookie,removeCookie]=useCookies();
    const [inputData , setInputData] =useState("");
    const [searchData , setSearchData] =useState("");
    const [searchResult , setSearchResult] =useState(false);
    const [filterClick , setFilterClick] =useState(false);
    const [items, setitems] = useState([])
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(result => setProducts(result))
        function handleSignOut(){
            removeCookie("name")
            navigate("Customer")
          }
          function handleSearch(e){
            setInputData(e.target.value)
            if(!inputData){
                setSearchResult(false)
            }
            if(inputData){
                setSearchResult(true)
            }
        }
        const handleFilterChange=()=>{
            switch(e.target.value){
                case "Sort By Price[Highest-lowsest]":
                   return  setitems(
                            //ascending-console.log(products.sort((p1, p2) => (p1.price < p2.price) ? -1 : 0))
                            //Descending-console.log(products.sort((p1, p2) => (p1.price > p2.price) ? -1 : 0))
                            products.sort((p1, p2) => (p1.price > p2.price) ? -1 : 0)
                    )
                case "Sort By Price[Lowest-highest]":
                   return  setitems(
                           products.sort((p1, p2) => (p1.price < p2.price) ? -1 : 0)
                    )
                case "Sort By Name[A-Z]":
                   return  setitems(
                        products.sort((p1, p2) => (p1.title < p2.title) ? -1 : 0)
                    )
                case "Sort By Name[Z-A]":
                   return  setitems(
                            products.sort((p1, p2) => (p1.title > p2.title) ? -1 : 0)
                    )
                case "Sort By popularity":
                   return  setitems(
                         products.map((ele)=>ele.sort((p1,p2)=>(p1.rating.rate>p2.rating.rate)? -1:0))
                    )

            }
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
                onKeyPress={handleSearch}
            />
                        <Icon
                            onPress={()=>setFilterClick(true)}
                            name='filter'
                            type='AntDesign'
                        />
            </View>
            <View>
                {
                    !searchResult?
                    <View style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }} >
                    {
                        items.map((data) =>
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
                    </View> :
                    <View style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }} >
                                {

                                    products.filter((items)=>items.includes(inputData)).map((data) =>
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
                }
                {
                    filterClick?<>
                        <Icon
                            onPress={()=>setFilterClick(false)}
                            name='cross'
                            type='Entypo'
                        />
                    <View style={styles.container}>
                        <Text>Sort By</Text>
                        <CheckBox
                        value="Sort By popularity"
                        onValueChange={handleFilterChange}
                        />
                        <CheckBox
                        value="Sort By Price[Highest-lowsest]"
                        onValueChange={handleFilterChange}
                        />
                        <CheckBox
                        value="Sort By Price[Lowest-highest]"
                        onValueChange={handleFilterChange}
                        />
                        <CheckBox
                        value="Sort By Name[A-Z]"
                        onValueChange={handleFilterChange}
                        />
                        <CheckBox
                        value="Sort By Name[Z-A]"
                        onValueChange={handleFilterChange}
                        />
                      {/* <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150}}
                        onValueChange={handleFilterChange}
                      >
                        <Picker.Item label="Sort By popularity" value="Sort By popularity" />
                        <Picker.Item label="Sort By Price[Highest-lowsest]" value="Sort By Price[Highest-lowsest]" />
                        <Picker.Item label="Sort By Price[Lowest-highest]" value="Sort By Price[Lowest-highest]" />
                        <Picker.Item label="Sort By Name[A-Z]" value="Sort By Name[A-Z]" />
                        <Picker.Item label="Sort By Name[Z-A]" value="Sort By Name[Z-A]" />
                      </Picker> */}
                    </View>
                     </>:""
                }




            </View>
        </View>
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