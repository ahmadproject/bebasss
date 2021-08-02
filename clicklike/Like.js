import React, {useState} from 'react'
import {Stylesheet, Text,View} from 'react-native'
import ContentComp from '../components/ContentComp'
import Likescomp from '../components/Likescomp'

const Like =()=> { 
    const [jmllike,setJmllike] = useState(0)
    return(
    <View>
        <ContentComp Klik = {()=> setJmllike(jmllike +1)}/>
        <Likescomp quantity={jmllike}/>
        </View>
    )
} 
export default Like;