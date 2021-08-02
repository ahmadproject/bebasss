import React from 'react' 
import {Text, View } from 'react-native'

const Likescomp = (props) =>{
    return(
        <View style={{marginTop:0}}>
            <Text style={{ fontweight:'bold', marginLeft: 10, marginTop:0,}}> {props.quantity} suka</Text>
            <Text style={{marginLeft: 15,}}>"jangan pernah mencari yang sempurna, karna ini dunia bukan surga"</Text>
            <Text style={{marginLeft: 50,}}>by:"Badrus Sababidil Mahmudi"</Text>
        </View>
    )    
}    

export default Likescomp;