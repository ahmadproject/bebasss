import React, { Component } from 'react'
import { Image, Text, View, StyleSheet} from 'react-native'

export default class StorysComp extends Component {
    render() {
        return (
            <View>
                <View style={{flexDirection:'row',marginRight:10,}}>
                    <Image
                        source={require('../assets/profile1.jpg')}
                        style={{ width:70,height:70,borderRadius:35, borderWidth: 3,borderColor:'#0000ff',marginTop:10,marginLeft:20,marginBottom:5,marginRight:20,}}
                    />
                    <Text style={{marginTop:90,marginLeft:-30,}}>badrus</Text>
                    <Image
                        source={require('../assets/profile4.jpg')}
                        style={{ width:70,height:70,borderRadius:35, borderWidth: 3,borderColor:'#0000ff',marginTop:10,marginLeft:20,marginBottom:5,marginRight:30,}}
                    />
                    <Text style={{marginTop:90,marginLeft:-30,}}>yuli</Text>
                </View>
            </View>
        )
    } 
}
