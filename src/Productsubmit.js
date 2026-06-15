import { Button, KeyboardAvoidingView, StyleSheet, Text, View, Alert, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';


const Productsubmit = ({route, navigation}) => {
    const {id,products}=route.params;
    console.log("recieved", products)
    const[dealername, setDealerName]= useState('')
    const[organisation, setOrganisation]= useState('')
    const total =
      products.supercrete +
      products.supergrade +
      products.supersteel +
      products.superfine +
      products.superfast +
      products.supercoast +
      products.samudra +
      products.ksuperplus;
    const handleSubmit=async(id)=>{
      if(!dealername || !organisation){
        Alert.alert("Enter the details");
        return;
      }
      try{
        const response = await fetch(`http://10.162.113.178:8080/Products/${id}`,
          {
            method: 'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify({
              ...products,
              dealername,
              organisation,
              total
            }),
        })
        const data = await response.json();
        console.log(data);
        Alert.alert(data.message)
      } catch(error) {
        console.log(error);
      }
    }
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS=== 'ios'?'padding':'height'}>
     <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}> Product Preview </Text>
       { products.supercrete>0 && (
        <Text style={styles.text}> Ramco Supercrete : {products.supercrete}</Text>
       )}
       {products.supergrade>0 && (
        <Text style={styles.text}> Ramco Supergrade: {products.supergrade}</Text>
       )}
       {products.supersteel>0 && (
        <Text style={styles.text}> Ramco Supersteel: {products.supersteel} </Text>
       )}
       {products.superfine>0 && (
        <Text style={styles.text}> Ramco Superfine: {products.superfine}</Text>
       )}
       {products.superfast>0 && (
        <Text style={styles.text}> Ramco Superfast: {products.superfast} </Text>
       )}
       {products.supercoast>0 && (
        <Text style={styles.text}> Ramco Supercoast: {products.supercoast}</Text>
       )}
       {products.samudra>0 && (
        <Text style={styles.text}> Ramco Samudra: {products.samudra}</Text>
       )}
       {products.ksuperplus>0 && (
        <Text style={styles.text}> Ramco Karthic SuperPlus: {products.ksuperplus}</Text>
       )}
      <Text style={styles.text}> Total: {total}</Text>
      <TextInput label='Dealers Name' value={dealername} onChangeText={setDealerName} style={styles.input}/>
      <TextInput label='Dealers Organisation' value={organisation} onChangeText={setOrganisation} style={styles.input}/>
      <Button title='Submit' onPress={()=>handleSubmit(id)} style={styles.button}/>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Productsubmit

const styles = StyleSheet.create({
  container:{
    padding:20,
    backgroundColor:'#fff',
    paddingBottom: 100, 
  },
  heading:{
    fontSize:28,
    textAlign:'center',
    marginBottom:50,
    fontWeight:'bold'
  },
  text:{
    marginLeft: 28,
    marginBottom: 15,
    fontSize:15,
  },
  button:{
    marginTop: 14
  },
  input:{
    height:60,
    borderWidth:1,
    borderColor:'#ebe8e8',
    borderRadius:7,
    paddingHorizontal:10,
    marginBottom:20,
    backgroundColor: '#fffafa',
  }
})