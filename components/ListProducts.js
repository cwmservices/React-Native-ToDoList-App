import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ListProducts = ({item,deleteItem}) =>{
  return (
    <TouchableOpacity style={styles.listItems}>
      <View style={styles.listItemsView}>
      <Text style={styles.listItemsText}>{item.text}</Text>
      <Ionicons name="remove-circle" size={32} color="firebrick" onPress={()=>deleteItem(item.id)}/>
      </View>
    </TouchableOpacity>
  );
}

export default ListProducts;

const styles = StyleSheet.create({
  listItems:{
    padding:15,
    backgroundColor:'#f8f8f8',
    borderBottomWidth:1,
    borderColor:'#eee'
  },
  listItemsView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  listItemsText:{
    fontSize:18
  }
});
