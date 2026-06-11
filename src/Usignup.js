import { View, Text, Alert, Button, TextInput, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native'
import React, {use, useState, useEffect}from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Usignup = ({navigation}) => {
  const[fontsLoaded]= useFonts({
    'Aladin-Regular' : require('./assets/fonts/Aladin-Regular.ttf'),
    'Mohave-VariableFont_wght': require('./assets/fonts/Mohave-VariableFont_wght.ttf'),
    'AlikeAngular-Regular' : require('./assets/fonts/AlikeAngular-Regular.ttf')
  });
  const[isLoading,setIsloading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileno, setMobileno] = useState('')
  const [age, setAge] = useState('')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')
  const [isformValid, setIsFormValid] = useState(false)
  const [errors, setErrors] = useState('')
  const [touch, setTouch] = useState({});
  const [message, setMessage]= useState('');
  const influencerType= [
    {title: 'Builder'},
    {title: 'Mason'},
    {title: 'Architect'},
    {title: 'Engineer'},
    {title: 'Interior Designer'},
    {title: 'Contractor'},
    {title: 'Other'},
  ]
  useEffect(() => {
     validateForm();
  },[name, email, mobileno, age, location, type])
  const validateForm = () => {
    let errors = {};
    if(!name){
      errors.name = "Name is required"
    }else if(name.length < 3){
      errors.name = "Name must be at least 3 characters"
    }
    if(!email){
      errors.email = "Email is required"
    } else if(!/\S+@\S+\.\S+/.test(email)){
      errors.email = "Email is invalid"
    }
    if(!mobileno){
      errors.mobileno = "Mobile No is required"
    }else if(!/^\d{10}$/.test(mobileno)){
      errors.mobileno = "Mobile No is invalid"
    }
    if(!age){
      errors.age = "Age is required"
    }else if(isNaN(age) || age < 18 || age > 100){
      errors.age = "Age must be a number between 18 and 100"
    }
    if(!location){
      errors.location = "Location is required"
    }
    if(!type){
      errors.type = "Influencer Type is required"
    }
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  }
  const handleSignup = async() => {
    setIsloading(true)
    if(!isformValid){
      setTimeout(() => {
        Alert.alert("Fill required fields properly")
        setIsloading(false)
      }, 2000);
      return;
    }
    else{
      try{
         const response = await fetch("http://10.230.43.178:8080/signup",{
           method: 'POST',
           headers:{
                'content-type':'application/json'
           },
           body:JSON.stringify({
              name: name,
              age: age,
              type: type,
              mobileno: mobileno,
              location: location,
              email: email
           })
        })
        const data= await response.json();
        const serverMessage = data.message;
        setMessage(serverMessage);
        Alert.alert(
          "Confirm Submission",
          "Are you sure you want to proceed?",
          [
            {
              text:"no",
              onPress : ()=>console.log("Closed"),
              style : "cancel"
            },
            {
              text:"yes",
              onPress : ()=>{
                Alert.alert("Server Response:" ,serverMessage)
                setTimeout(() => {
                  navigation.navigate('User Login')
                },3000);
              }
            }
          ]
       );
      }
      catch(error){
        Alert.alert("Server Error")
      }
      finally{
      setIsloading(false)
      }
    }   
  }
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios'?'padding':'height'}> 
      <ScrollView style={styles.scrollview} nestedScrollEnabled={true} keyboardShouldPersistTaps="handled">
        <Text style={styles.heading}>User Signup</Text>
        <View style={styles.labelrow}>
      
      
          <View style={{flexDirection:'row',alignItems: 'center'}}>
            <Text style={styles.subinput}>Name:</Text>
            <Text style={styles.trial}>*</Text>
          </View>
          {touch.name && errors.name && (
            <Text style={styles.error}>{errors.name}</Text>
          )}
          </View>
          <TextInput
            placeholder='Enter Your Name'
            style={styles.input}
            value={name}
            onChangeText={setName} 
            onBlur={() => setTouch(last =>
              ({...last , name: true})
            )}
          />


        <View style={styles.labelrow}>
          <View style={{flexDirection:'row',alignItems: 'center'}}>
            <Text style={styles.subinput}> Email ID:</Text>
            <Text style={styles.trial}>*</Text>
          </View>
          {touch.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}
        </View>
        <TextInput
          placeholder='Enter Your Email'
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          onBlur={() => setTouch(last =>
         ({...last , email: true})
        )} 
        />



      <View style={styles.labelrow}>
        <View style={{flexDirection:'row',alignItems: 'center'}}>
          <Text style={styles.subinput}>Mobile Number:</Text>
          <Text style={styles.trial}>*</Text>
        </View>
        {touch.mobileno && errors.mobileno && (
          <Text style={styles.error}>{errors.mobileno}</Text>
        )}
      </View>
      <TextInput
        placeholder='Enter Your Mobile Number'
        keyboardType='numeric' 
        style={styles.input}
        value={mobileno}
        maxLength={10}
        onChangeText={setMobileno} 
        onBlur={() => setTouch(arr => 
          ({...arr, mobileno: true})
        )}
      />


      <View style={styles.labelrow}>
        <View style={{flexDirection:'row',alignItems: 'center'}}>
          <Text style={styles.subinput}>Age:</Text>
          <Text style={styles.trial}>*</Text>
        </View>
        {touch.age && errors.age && (
          <Text style={styles.error}>{errors.age}</Text>
        )}
      </View>
      <TextInput
       placeholder='Enter Your Age' 
       keyboardType='numeric'
       style={styles.input}
       value={age} 
       maxLength={3}
       onChangeText={setAge} 
       onBlur={() => setTouch(arr => 
        ({...arr , age: true })
       )}
       />


      <View style={styles.labelrow}>
        <View style={{flexDirection:'row',alignItems: 'center'}}>
          <Text style={styles.subinput}>Location:</Text>
            <Text style={styles.trial}>*</Text>
          </View>
          {touch.location && errors.location && (
            <Text style={styles.error}>{errors.location}</Text>
          )}
      </View>
      <TextInput 
       placeholder='Enter Your Location' 
       style={styles.input}
       value={location}
       onChangeText={setLocation} 
       onBlur={() => setTouch(arr =>
         ({...arr, location: true})
       )}
       />


      <Text style={styles.subinput}>Influencer Type:</Text>
      <SelectDropdown
        data={influencerType}
        onSelect={(selectedItem, isOpened) =>{
          console.log(selectedItem);
          setType(selectedItem.title)
        }}
        renderButton={(selectedItem, isOpened) =>{
          return(
          <View style={styles.dropdownButtonStyle}>
            <Text style={styles.dropdownButtonTxtStyle}>
              {(selectedItem && selectedItem.title) || 'Select Influencer Type'}
            </Text>
           </View>
          );
           }} 
      renderItem={(item, index, isSelected) => {
        return(
          <View style={{...styles.dropdownItemStyle,...(isSelected )}}>
            <Text style={styles.dropdownItemTxtStyle}>
              {item.title}
            </Text>
           </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={isLoading}>
        {isLoading?(
          <ActivityIndicator color="#ffffff"/>
            ):(
        <Text style={styles.text}> Signup</Text>
        )}
      </TouchableOpacity>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
    </SafeAreaProvider>
  )
};
export default Usignup
const styles = StyleSheet.create({
  container:{
        flex:1,
        padding:20,
        backgroundColor:'#fff'
    },

    heading:{
        fontSize:28,
        textAlign:'center',
        marginBottom:30,
        fontWeight:'bold'
    },

  scrollview: {
    backgroundColor: '#fffcfc',
  },
  subinput:{
    fontSize: 12,
    fontFamily: 'AlikeAngular-Regular' ,
    marginBottom:5,
  },
  labelrow:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#c7d8df',
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 15,
  },

  button: {
    width:'400',
    backgroundColor: '#325ed8',
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 10,
    elevation: 8,
    
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    marginRight: 97
  },

  trial:{
    margin: 4,
    color: 'red',
    fontSize: 10,
  },

  error: {
    color: 'red',
    fontSize: 12,
  },

  dropdownButtonStyle: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#8edfff',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '300',
    color: '#000',
  },

  dropdownMenuStyle: {
    borderRadius: 15,
    maxHeight: 200,
    backgroundColor: '#fff',
  },

  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },

  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '300',
    color: '#000',
  },
});