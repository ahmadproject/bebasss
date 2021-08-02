import React, {useState} from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import HeaderComp from './components/HeaderComp'
import ContentComp from './components/ContentComp'
import NavbarComp from './components/NavbarComp'
import StorysComp from './components/StorysComp'
import Like from './clicklike/Like'
import Likescomp from './components/Likescomp'

const App = () => {
  const [jmllike, setJmllike] = useState(0)
  return (
    <View style={{flex:1,}}>
      <HeaderComp />
        <ScrollView>
          <ScrollView horizontal>
            <StorysComp/>
            <StorysComp/>
            <StorysComp/>
            <StorysComp/>
            <StorysComp/>
            <StorysComp/>
            <StorysComp/>
            <StorysComp/>
            <StorysComp/>
            <StorysComp/>
          </ScrollView>
          <Like/>
          <Like/>
          <Like/>
          <Like/>
          <Like/>
          <Like/>
          <Like/>
          <Like/>
          <Like/>
        </ScrollView>
        <NavbarComp/>
    </View>
  );
};

export default App