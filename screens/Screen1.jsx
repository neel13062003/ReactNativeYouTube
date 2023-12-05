import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

const Screen1 = ({navigation, route}) => {
  const { title1 } = route.params;
  return (
    <View style={{ marginTop: 0, backgroundColor: 'grey' }}>
      <Text>{title1}</Text>
      <Button
        style={{ backgroundColor: 'green', margin: 20 }}
        labelStyle={{ color: 'white' }}
        onPress={() => navigation.navigate('Home')}
        onLongPress={() => alert('Hello Neel')}
      >
        Home
      </Button>
    </View>
  )
}

export default Screen1