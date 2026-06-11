import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Usignup from './Usignup'
import Ulogin from './Ulogin'
import Home from './Home'
import Profile from './Profile'
import Edit from './Edit'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import Products from './Products'
import Productsubmit from './Productsubmit'
const Stack = createNativeStackNavigator();
export default function App() {
  const[fontsLoaded]= useFonts({
      'Aladin-Regular' : require('./assets/fonts/Aladin-Regular.ttf'),
      'Orbitron-Bold' : require('./assets/fonts/Orbitron-Bold.ttf'),
      'Orbitron-ExtraBold' : require('./assets/fonts/Orbitron-ExtraBold.ttf')
    });
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="User Login"  
            component={Ulogin}
            options={{
              title:'Influenz-R',
              headerStyle: {
                backgroundColor:'#325ed8' ,
              },
              headerTintColor: '#fff',
              headerTitleAlign:'center',
              headerTitleStyle:{
                fontSize: 24,
                fontFamily:'Orbitron-ExtraBold',
                letterSpacing: 3,
              }
            }}
          />
          <Stack.Screen 
            name="SIGNUP" 
            component={Usignup}
            options={{
              title:'Influenz-R',
              headerStyle: {
                backgroundColor:'#325ed8' ,
              },
              headerTintColor: '#fff',
              headerTitleAlign:'center',
              headerTitleStyle:{
                fontSize: 24,
                fontFamily:'Orbitron-ExtraBold',
                letterSpacing: 3,
              }
            }}
          />
          
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title:'Influenz-R',
              headerStyle: {
                backgroundColor:'#325ed8' ,
              },
              headerLeft: () => null,
              headerTintColor: '#fff',
              headerTitleAlign:'center',
              headerTitleStyle:{
                fontSize: 24,
                fontFamily:'Orbitron-ExtraBold',
                letterSpacing: 3,
              }
            }}
          />
          <Stack.Screen name='Products' component={Products}/>
          <Stack.Screen name="Productsubmit" component={Productsubmit}/>
          <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
      </NavigationContainer>
  );

};
