import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Button } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import ListProducts from './components/ListProducts';
import AddProducts from './components/AddProducts';

export default function App() {

  const [items,setItems] = useState([]);
  const [visible,setVisible] = useState(false);

  const deleteItem=id=>{
    setItems(prevItems=>{
      return prevItems.filter(item=>item.id != id);
    })
  }

  const addItem=text=>{
    if(!text){
      Alert.alert('Error','Please enter an item');
    }
      else{
        setItems(prevItems=>{
          return [{id:uuidv4(),text},...prevItems]
        })
      }
    setVisible(false);
  };

  const cancelBlock=()=>{
      setVisible(false);
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Item" onPress={()=>setVisible(true)}/>
      <AddProducts visible={visible} onCancel={cancelBlock} addItem={addItem}/>
      <FlatList 
      data={items}
      renderItem={({item})=><ListProducts item={item} deleteItem={deleteItem}/>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:60
  },
});
