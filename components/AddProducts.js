import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Modal,Button} from 'react-native';

const AddProducts=({addItem,visible,onCancel})=>{

    const[text,setText] = useState('');

    const onChange=textValue=> setText(textValue);

    const onEnter=()=>{
      addItem(text);
      setText('');
    }

  return (
     <Modal visible={visible} animationType='slide'>
 <View style={styles.cont}>
     <TextInput placeholder="Add Item..." style={styles.input} onChangeText={onChange}/>
     <View style={styles.box}>
         <Button title="Cancel" color="red" onPress={onCancel}/>
         <Button title="Add Item" onPress={onEnter}/>
     </View>
    </View>
     </Modal>
  );
}

export default AddProducts;

const styles = StyleSheet.create({
 cont:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
 input:{
    height:60,
    padding:8,
    fontSize:16
 },
 box:{
   flexDirection:'row',
   width:'45%',
   justifyContent:'space-between',
 }
});
