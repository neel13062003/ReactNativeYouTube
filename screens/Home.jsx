import { View, Text } from 'react-native';
import React from 'react';
import { Button,Appbar, Avatar,Headline} from 'react-native-paper';
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid';

import Header from '../components/Header';

const Main = ({navigation,title,title1}) => {
  return (
    <View style={{ marginTop: 0, backgroundColor: 'orange',height:'100%' }}>
      {/* <Text>{title}</Text> */}
      <Header />

      <Avatar.Image 
        source={require('../assets/shivaji.webp')} 
        size={160} 
        style={{ marginTop: 40,alignSelf:'center' }}
      />

      <Headline style={{ alignSelf: 'center',marginTop:10, fontSize: 20,fontWeight:"bold",color:"black" }}>
        છત્રપતિ શિવાજી મહારાજ
      </Headline>

      <Button
        style={{ backgroundColor: 'green', margin: 20 , marginHorizontal:40}}
        labelStyle={{ color: 'white' }}
        onPress={() => navigation.navigate('Register')}
        onLongPress={() => navigation.navigate('Screen1',{title1})}
        // onLongPress={() => alert('Hello kalp')}
      >
        Click Or Double Click
      </Button>
    </View>
  );
};

const Home = ({navigation}) => {
  return <SafeAreaViewAndroid Component={Main} navigation={navigation} title1="Screen1 Titlebhai" title="Jay Hind" />
}

export default Home
