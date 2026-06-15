import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Provider,Card } from 'react-native-paper';
import { bindKey } from 'lodash';
import { jsx } from 'react/jsx-runtime';

const Points = ({route,navigation}) => {
    const {id}=route.params;
    const [users,setUsers]= useState([]);
    const detailFetch=async(id)=>{
        const response = await fetch(`http://10.162.113.178:8080/Transaction/${id}`)
        const data = await response.json();
        setUsers(data);
        console.log(data);
    }
    useEffect(()=>{
        detailFetch(id);
      },[])
    const renderItem = ({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate('Tracker',{transaction: item})}>
        <Card style={styles.card}>
            <Card.Content>
                <Text>TransactionID: {item.TransactionID}</Text>
                <Text>Transaction Status: {item.TransactionStatus} </Text>
                <Text> No.Of Products Bought: {item.Total}</Text>
                <Text>Date: {item.SubmitDate.split('T')[0]} </Text>
                <Text>Time: {item.SubmitTime.substring(11,19)} </Text>
            </Card.Content>
        </Card>
        </TouchableOpacity>
    )

  return (
    <Provider>
        <View style={styles.container}>
            <Text style={styles.heading}> Transaction History</Text>
            <FlatList
            data={users}
            keyExtractor={(item)=>item.TransactionID.toString()}
            renderItem={renderItem}
            />
        </View>
    </Provider>
  )
}

export default Points

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent:'center',
        padding:10,
    },
    heading:{
        fontSize:28,
        textAlign:'center',
        marginBottom:10,
     },
    card:{
        margin: 10,
        backgroundColor:"#ffffff",
        borderWidth: 1,
        borderColor: "#cbcccc",
        borderRadius: 0
    }
})