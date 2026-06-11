import { Alert, Button, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';

const UserLogin = ({ navigation }) => 
{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true);
  const goSignup =()=>{
    navigation.navigate('SIGNUP')
  }
  const Login = async () => {
    if(!username || !password){
      Alert.alert("Enter Username and Password");
        return;
    }
    try{
      const response = await fetch(
        'http://10.230.43.178:8080/UserLogin',
        {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            username,
            password
          })
        }
      );
      const data = await response.json();
      if(data.success){
        Alert.alert("Login Successful");
        navigation.navigate('Home', {
          user: data.user
        });
      }
      else{
        Alert.alert(data.message);
      }
    }
    catch(error){
      console.log(error);
      Alert.alert("Server Error");
    }
  }
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS=== 'ios'?'padding':'height'}>
    <View style={styles.container}>
      
      
      <Text style={styles.heading}>
        User Login
      </Text>


      <TextInput
        label='Username'
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />


      <TextInput
        label='Password'
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={isSecure}
        right={
          <TextInput.Icon 
            icon={isSecure ? "eye" : "eye-off"} 
            onPress={() => setIsSecure(!isSecure)} 
          />
        }
      />


      <Button
        title='Login'
        onPress={Login}
      />

      
      <TouchableOpacity onPress={goSignup}>
        <Text style={styles.newtext}>Dont Have an account?</Text>
      </TouchableOpacity>


    </View>
    </KeyboardAvoidingView>
  )
}


export default UserLogin


const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    justifyContent: "center",
    backgroundColor:'#fff'
    },

  heading:{
    fontSize:28,
    textAlign:'center',
    marginBottom:50,
    fontWeight:'bold'
  },

  newtext:{
    color: '#6b74f1',
    fontSize: 14,
    marginTop: 10,
    marginLeft:67
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