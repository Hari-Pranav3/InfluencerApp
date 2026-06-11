import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React ,{useState}from 'react'
import { Button } from 'react-native'
import { TextInput } from 'react-native-paper'
const Products = ({route,navigation}) => {
    const {id} = route.params;
    const [products, setProducts]= useState({
        supercrete: 0,
        supergrade: 0,
        supersteel:0,
        superfine:0,
        superfast:0,
        supercoast: 0,
        samudra: 0,
        ksuperplus: 0,
    });
    const increment = (name) =>{
        setProducts(prev=>({
            ...prev,
            [name]: prev[name]+1,
        }))
    }
    const decrement = (name) =>{
        setProducts(prev=>({
            ...prev,
            [name]: Math.max(0,prev[name]-1)
        }))
    }
    const HandleIt=(id)=>{
        Alert.alert(
            "Confirm Submission",
            "Are you sure you want to proceed",
            [
                {
                    text:"no",
                    onPress : ()=>console.log("Closed"),
                    style : "cancel"
                },
                {
                    text:"yes",
                    onPress: ()=>{
                        console.log("Products:",products)
                        navigation.navigate('Productsubmit',{id,products})
                    }
                }
            ]
        )
    }
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS=== 'ios'?'padding':'height'}> 
    <ScrollView contentContainerStyle={styles.container}>
       
        <View style={styles.row}>
            <Image source={require('./assets/images/RamcoSupercrete.png')} style={styles.image} resizeMode="cover"/>
            <Image source={require('./assets/images/Ramco Supergrade.png')} style={styles.image} resizeMode="cover"/>
        </View>
         <View style={styles.row}>
            <Text style={styles.text}>Ramco Supercrete</Text>
            <Text style={styles.text}> Ramco Supergrade</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.newrow}>
            <TouchableOpacity style={styles.button} onPress={()=>increment('supercrete')}>
                <Text style={styles.buttontxt}>+</Text>
            </TouchableOpacity>
            <TextInput 
            style={styles.input}
            keyboardType='numeric'
            value={String(products.supercrete)}
            onChangeText={(text)=>
                setProducts(prev=>({
                    ...prev,
                    supercrete: Number(text)
                }))
            }
            />
            <TouchableOpacity style={styles.button} onPress={()=>decrement('supercrete')}>
                <Text style={styles.buttontxt}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.newrow}>
            <TouchableOpacity style={styles.button} onPress={()=>increment('supergrade')}>
                <Text style={styles.buttontxt}>+</Text>
            </TouchableOpacity>
            <TextInput 
            style={styles.input}
            keyboardType='numeric'
            value={String(products.supergrade)}
            onChangeText={(text)=>setProducts((prev)=>({
                ...prev,
                supergrade: Number(text)
            }))}
            />
            <TouchableOpacity style={styles.button} onPress={()=>decrement('supergrade')}>
                <Text style={styles.buttontxt}>-</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.row}>
            <Image source={require('./assets/images/Ramco Supersteel.png')} style={styles.image} resizeMode="cover"/>
            <Image source={require('./assets/images/Ramco Superfine.png')} style={styles.image} resizeMode="cover"/>
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Ramco SuperSteel</Text>
            <Text style={styles.text}> Ramco Superfine</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.newrow}>
            <TouchableOpacity style={styles.button} onPress={()=>increment('supersteel')}>
                <Text style={styles.buttontxt}>+</Text>
            </TouchableOpacity>
            <TextInput 
            style={styles.input}
            keyboardType='numeric'
            value={String(products.supersteel)}
            onChangeText={(text)=>setProducts((prev)=>({
                ...prev,
                supersteel: Number(text)
            }))}
            />
            <TouchableOpacity style={styles.button} onPress={()=> decrement('supersteel')}>
                <Text style={styles.buttontxt}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.newrow}>
            <TouchableOpacity style={styles.button} onPress={()=>increment('superfine')}>
                <Text style={styles.buttontxt}>+</Text>
            </TouchableOpacity>
            <TextInput 
            style={styles.input}
            keyboardType='numeric'
            value={String(products.superfine)}
            onChangeText={(text)=>setProducts((prev)=>({
                ...prev,
                superfine: Number(text)
            }))}
            />
            <TouchableOpacity style={styles.button} onPress={()=>decrement('superfine')}>
                <Text style={styles.buttontxt}>-</Text>
            </TouchableOpacity>
          </View>
        </View>


        






        <View style={styles.row}>
            <Image source={require('./assets/images/Ramco Superfast.png')} style={styles.image} resizeMode="cover"/>
            <Image source={require('./assets/images/Ramco SuperCoast.png')} style={styles.image} resizeMode="cover"/>
        </View>
         <View style={styles.row}>
            <Text style={styles.text}>Ramco SuperFast</Text>
            <Text style={styles.text}> Ramco SuperCoast</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.newrow}>
            <TouchableOpacity style={styles.button} onPress={()=>increment('superfast')}>
                <Text style={styles.buttontxt}>+</Text>
            </TouchableOpacity>
            <TextInput 
            style={styles.input}
            keyboardType='numeric'
            value={String(products.superfast)}
            onChangeText={(text)=>setProducts((prev)=>({
                ...prev,
                superfast: Number(text)
            }))}
            />
            <TouchableOpacity style={styles.button} onPress={()=>decrement('superfast')}>
                <Text style={styles.buttontxt}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.newrow}>
            <TouchableOpacity style={styles.button} onPress={()=>increment('supercoast')}>
                <Text style={styles.buttontxt}>+</Text>
            </TouchableOpacity>
            <TextInput 
            style={styles.input}
            keyboardType='numeric'
            value={String(products.supercoast)}
            onChangeText={(text)=>setProducts((prev)=>({
                ...prev,
                supercoast: Number(text)
            }))}
            />
            <TouchableOpacity style={styles.button} onPress={()=>decrement('supercoast')}>
                <Text style={styles.buttontxt}>-</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.row}>
            <Image source={require('./assets/images/Ramco Samudra.png')} style={styles.image} resizeMode="cover"/>
            <Image source={require('./assets/images/Ramco KarthicSuperPlus.png')} style={styles.image} resizeMode="cover"/>
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Ramco Samudra</Text>
            <Text style={styles.text}> Ramco Karthic SuperPlus</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.newrow}>
            <TouchableOpacity style={styles.button} onPress={()=>increment('samudra')}>
                <Text style={styles.buttontxt}>+</Text>
            </TouchableOpacity>
            <TextInput 
            style={styles.input}
            keyboardType='numeric'
            value={String(products.samudra)}
            onChangeText={(text)=>setProducts((prev)=>({
                ...prev,
                samudra: Number(text)
            }))}
            />
            <TouchableOpacity style={styles.button} onPress={()=>decrement('samudra')}>
                <Text style={styles.buttontxt}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.newrow}>
            <TouchableOpacity style={styles.button} onPress={()=>increment('ksuperplus')}>
                <Text style={styles.buttontxt}>+</Text>
            </TouchableOpacity>
            <TextInput 
            style={styles.input}
            keyboardType='numeric'
            value={String(products.ksuperplus)}
            onChangeText={(text)=>setProducts((prev)=>({
                ...prev,
                ksuperplus: Number(text)
            }))}
            />
            <TouchableOpacity style={styles.button} onPress={()=>decrement('ksuperplus')}>
                <Text style={styles.buttontxt}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.cart} onPress={()=>HandleIt(id)}>
            <Text style={styles.textcart}>Submit Products</Text>
        </TouchableOpacity>
    
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Products

const styles = StyleSheet.create({
   container:{
    flexGrow: 1,
    paddingBottom: 100,
    backgroundColor:"#fff"
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth:1,
    borderColor:"#fff"
  }, 
  newrow:{
    flexDirection: 'row',
  },
  image:{
    marginTop: 15,
    height: 200,
    width: 150
  },
  button:{
    width:30,
    height:40,
    borderWidth: 1,
    borderColor:"#dddddd"
  },
  buttontxt:{
    textAlign:"center",
    marginTop:5
  },
  text:{
    marginBottom:10,
  },
  input:{
    backgroundColor:"#fff",
    marginLeft: 4,
    marginRight: 4,
    borderColor:"#c9c9c9",
    height: 40
  },
  cart:{
    backgroundColor:"#314de7",
    height: 50,
    marginLeft:90,
    width: 160,
    borderWidth:1,
    marginTop:24
  },
  textcart:{
    textAlign:'center',
    color:"#fff",
    marginTop: 10,
    fontSize: 16
  }
})