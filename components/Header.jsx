import { View } from 'react-native'
import React from 'react'
import { Appbar} from 'react-native-paper';

const Header = () => {
  return (
    <View>
      <Appbar style={{ backgroundColor: "black" }}>
        <Appbar.Action icon="fire" color='red' />
        <Appbar.Content title="છત્રપતિ શિવાજી" color="white" style={{ alignItems: 'center' }} />
        <Appbar.Action icon="fire" color='red' />  
      </Appbar>
    </View>
  )
}

export default Header