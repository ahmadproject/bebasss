import React from 'react'
import {View, Image,} from 'react-native';

const NavbarComp = () => {
    return (
            <View>
              <Image 
                source={require('../assets/navbar.jpg')}
                style={{width:420,height:60,}}
                />
            </View>
    )
}

export default NavbarComp
