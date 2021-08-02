import React, { Component } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import Likescomp from './Likescomp'

const ContentComp = (props)=>{
        return (
        <View>
                <Image 
                        source={require('../assets/fotohome.jpg')}
                        style={{width:425,height:500,marginTop:10,marginBottom:0,}}
                />
                <View style={{backgroundColor: '#FFFFFF',flexDirection: 'row',height:50,marginLeft:15}}>
                        <View style={{flex:.2,}}>
                                <TouchableOpacity onPress={props.Klik}>
                                        <Image 
                                                source={require('../assets/love.png')} 
                                                style={{width: 27, height: 25,marginTop: 10, marginleft: 20,}}
                                        /> 
                                </TouchableOpacity>
                        </View>
                        <View style={{flex:.2,}}> 
                                <Image 
                                        source={require('../assets/coment.png')} 
                                        style={{width:20, height:20,marginTop:10,}} 
                                />
                        </View> 
                        <View style={{flex:.6,}}> 
                                <Image
                                        source={require('../assets/send.png')} 
                                        style={{width:25, height:25,marginTop:10,}}
                                />
                        </View> 
                        <View style={{flex:.2,}}> 
                                <Image 
                                        source={require('../assets/share.png')} 
                                        style={{width:25, height:25,marginTop:10,}} 
                                />
                        </View> 
                </View> 
        </View> 
        )
}

export default ContentComp