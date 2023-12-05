import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid';
import { Button, Headline, TextInput, Checkbox } from 'react-native-paper';
import Header from '../components/Header';

const Main = ({ navigation }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View>
      <Header />
      <Headline style={styles.heading}> Register </Headline>
      <TextInput placeholder='Full Name' style={styles.inputs} />
      <TextInput placeholder='Email' style={styles.inputs} />
      <TextInput placeholder='Password' style={styles.inputs} secureTextEntry={true} />

      <View style={{ alignSelf: 'center', marginBottom: 10, alignItems: 'center', flexDirection: 'row' }}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked((prev) => !prev)}
          color='rgba(108,21,222,1)'
        />
        <Text>Please Accept Terms & Condition</Text>
      </View>

      <Button
        style={styles.btn}
        labelStyle={{ color: 'white' }}
        onPress={() => {
          if (checked) {
            console.log('Pressed');
          } else {
            console.log('Button is disabled');
          }
        }}
        disabled={!checked}
      >
        Register
      </Button>
    </View>
  );
};

const Register = ({ navigation }) => {
  return <SafeAreaViewAndroid Component={Main} navigation={navigation} />;
};

export default Register;

const styles = StyleSheet.create({
  inputs: {
    backgroundColor: 'white',
    marginHorizontal: 60,
    marginVertical: 20,
    borderRadius: 20,
  },
  heading: {
    textAlign: 'center',
    marginVertical: 20,
    color: 'rgba(108,21,222,1)',
    fontWeight: 'bold',
    marginTop: 40,
  },
  btn: {
    backgroundColor: 'green',
    borderRadius: 50,
    paddingVertical: 5,
    alignSelf: 'center',
    width: '60%',
    marginTop: 10,
  },
});
