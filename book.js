import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Menu from './Menu'

export class book extends Component {
    render() {
        return (
            <View>
                 {/* <Menu/> */}
                 <View style={styles.container}>
                     <h1>hi there</h1>
                 </View>
            </View>
          
        )
    }
}
const styles=StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
     }
})

export default book
