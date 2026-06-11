import { View, Text, Image, Alert, Button, StyleSheet, TextInput } from 'react-native'
import React,{useState, useEffect} from 'react'
import { multiply } from 'react-native/types_generated/Libraries/Animated/AnimatedExports'
import { keyBy, pullAllBy } from 'lodash'
import { LayoutAnimation } from 'react-native/types_generated/index'
import { withSubscription } from 'react-native/types_generated/Libraries/LogBox/Data/LogBoxData'


const Signup = () => {
  const[name ,setName]=useState('')
  const[mobileno,setMobileno]=useState('')
  const[email,setEmail]=useState('')
  const[age,setAge]=useState('')
  const[isformvalid,setIsformvalid]=useState(false)
  const[touch,setTouch]=useState({})
  const[type,setType]=useState('')
  const[errors,setErrors]=useState('')
  const InfluencerType =[
    {title: Mason},
    {title: Builder},
    {title: Engineer},
    {title: Contractor},
    {title: Designer},
    {title: Architect}
  ]
  useEffect=(()=>{
    validateform();
  },[])
  const validateform =()=>{
     let errors={}
     if(!name){
         
     }
  }
  return (
    <View>
      <Text>Signup</Text>
      <Image
              source={require('./assets/images/Building.jpg')}
              style={{width:350, height:700}}
            />
    </View>
  )
}

export default Signup