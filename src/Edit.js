import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Edit = ({route,navigation}) => {
  const{user, whichuser}=route.params
  const[username,setUsername]= useState(user.username)
  const[password,setPassword]=useState(user.password) 
  const saveUser = async() =>{
    const data= await AsyncStorage.getItem('users')
    const first= data?JSON.parse(data) : [];
    first[whichuser].username=username
    first[whichuser].password=password
    await AsyncStorage.setItem('users', JSON.stringify(first))
    Alert.alert("Username and password generated")
    navigation.goBack()
  }
  return (
    <View>
      <TextInput
       placeholder='Edit Username'
       value={username}
       onChangeText={setUsername}
      />
      <TextInput
       placeholder='Edit Password'
       value={password}
       onChangeText={setPassword}
      />
      <Button title='Save' onPress={saveUser}/>
    </View>
  )
}

export default Edit