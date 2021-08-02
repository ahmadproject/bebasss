import React from 'react'
import { View, Text, Image } from 'react-native'

const HeaderComp = () => {
    return (
        <View style={{backgroundColor:'#fff',flexDirection:'row',height:50,marginTop:0,}}>
            <View style={{flex:3,}}>
                <Image 
                source={require('../assets/logo.png')}
                style={{width:125,height:40,marginTop:5,marginLeft:10,}}
                />
            </View>
            <View style={{flex:.5,}}>
                <Image 
                source={require('../assets/like.png')}
                style={{width:30,height:30,marginTop:10, marginLeft:0,}}
                />
            </View>
            <View style={{flex:.5,}}>
                <Image 
                source={require('../assets/kirim.png')}
                style={{width:30,height:25,marginTop:10,}}
                />
            </View>
        </View>
    )
}

export default HeaderComp
