import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, { useState } from 'react'
import { Card, TextInput } from 'react-native-paper';
import { set } from 'lodash';
const Home = ({ route,navigation }) => {
  const {user} = route.params
  const goProducts=()=>{
    navigation.navigate('Products',{id:user.InfluencerID})
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
       <TouchableOpacity onPress={goProducts}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardtext}> Products </Text>
          </Card.Content>
        </Card>
       </TouchableOpacity>
       <TouchableOpacity>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardtext}> Sites </Text>
          </Card.Content>
        </Card>
       </TouchableOpacity>
      </View>
      <View style={styles.row}>
       <TouchableOpacity>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardtext}> Points </Text>
          </Card.Content>
        </Card>
       </TouchableOpacity>
       <TouchableOpacity>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardtext}> Status </Text>
          </Card.Content>
        </Card>
       </TouchableOpacity>
      </View>
      <View style={styles.row}>
       <TouchableOpacity>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardtext}> Points </Text>
          </Card.Content>
        </Card>
       </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
export default Home

const styles = StyleSheet.create({
  container:{
    flexGrow: 1,
    padding: 20,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardtext:{
    textAlign: "center"
  },
  card:{
    marginTop: 20,
    backgroundColor: "#43eee0",
    width:150,
    paddingVertical: 54,
    borderWidth:2,
    borderColor:"#129cf8"
  }
})