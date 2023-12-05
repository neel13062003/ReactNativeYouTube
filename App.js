import React,{useState} from "react"
import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native';
import Home from "./screens/Home";
import Screen1 from "./screens/Screen1";

import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Register from "./screens/Register";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    <NavigationContainer>
        {/* <SafeAreaView>
            <ScrollView> */}
              <Stack.Navigator initialRouteName="Home">
                  <Stack.Screen name="Home" component={Home} 
                       options={{
                        headerStyle: { backgroundColor: "orange" },
                        headerShown: false, // To hide the header for this screen
                      }}  //headerShown:false
                  />
                  <Stack.Screen name="Screen1" component={Screen1} />
                  <Stack.Screen name="Register" component={Register} 
                         options={{
                          headerShown: false, // To hide the header for this screen
                        }}  
                  />
              </Stack.Navigator>
            {/* </ScrollView>
        </SafeAreaView> */}
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
