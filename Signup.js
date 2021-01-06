import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet,TouchableOpacity,Picker,Button,SafeAreaView,ScrollView } from 'react-native';

class CreateVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <View style={styles.middle}>
         
      <TextInput style={styles.TextInput} placeholder='Name'></TextInput>
<TextInput style={styles.TextInput} placeholder='Email Id'></TextInput>
<TextInput style={styles.TextInput} placeholder='Phone No.'></TextInput>
<TextInput style={styles.TextInput} placeholder='Birth Date'></TextInput>
<TextInput style={styles.TextInput} placeholder='Password'></TextInput>
<TextInput style={styles.TextInput} placeholder='Confirmed Password'></TextInput>
<TextInput style={styles.TextInput} placeholder='Photo Upload'></TextInput>
       <View style={{ flexDirection: 'row',paddingTop:20,justifyContent:"center" }}>
  <View style={styles.buttonText1}>
    <Button
      title="Cancel"
     
   />
   </View>
   <View style={styles.buttonText2}>
     <Button
       title="Submit"
      
     />
   </View>
   </View>
 </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        position:"relative"
     },
     scrollView: {
      backgroundColor: '#ffffff',
      marginHorizontal: 20,
    },
      middle:{
      position:'relative',
      width:'100%',
      paddingVertical:'50%',
      top:'5%',
      alignSelf:"center",
    },
     TextInput:{
      margin: 5,
      paddingLeft:5,
      height: 50,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius:10,

     },
     dropdownpicker:{
     
        height: 56,
        width: 300,
        margin:5,
        borderRadius:10,
        borderColor: 'black',
        borderWidth: 1,
      },
      buttonText1:{
        textAlign:"center",
        width:150,
        height:50,
        paddingRight:10,
        borderRadius:25,
      
      },
      buttonText2:{
       textAlign:"center",
       width:150,
        height:50,
        borderRadius:25,
     }
    })

export default CreateVendor;