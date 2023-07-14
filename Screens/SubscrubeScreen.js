import * as React from 'react';
import {validateEmail} from '../util';
import {
  Image,
  Pressable,
  TextInput,
  View,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, setEmail] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  function testEmail() {
    const result = validateEmail(email);
    if (result) {
      return setDisabled(false);
    } else {
      return setDisabled(true);
    }
  }
  return (
    <View style={myStyle.container}>
      <Image
        style={myStyle.logo}
        source={require('../img/person_logo.png')}
        resizeMode="contain"
      />
      <Text style={myStyle.textStyle}>
        Subscribe to our newslettler for our latest delicious recipes!
      </Text>

      <TextInput
        style={myStyle.textInputStyle}
        placeholder="Hello@example.com"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        onChange={() => testEmail()}
      />
      <Pressable
        disabled={disabled}
        onPress={() => Alert.alert('Thanks for Subscriping ,\n Stay tuned!')}
        style={[myStyle.buttonStyle, disabled ? {opacity: 0.2} : '']}>
        <Text style={myStyle.buttonText}>Subscripe</Text>
      </Pressable>
    </View>
  );
};

export default SubscribeScreen;

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 30,
  },
  logo: {
    marginHorizontal: 'auto',
    width: 150,
    height: 150,
  },
  textStyle: {
    fontSize: 22,
    marginVertical: 25,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  textInputStyle: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderColor: '#000000',
    borderRadius: 10,
    borderWidth: 1,
    // paddingHorizontal: 110,
    alignSelf: 'stretch',
    marginHorizontal: 15,
  },
  buttonStyle: {
    backgroundColor: '#000000',
    borderColor: '#000000',
    borderRadius: 10,
    borderWidth: 2,
    alignSelf: 'stretch',
    paddingVertical: 8,
    marginTop: 28,
    marginHorizontal: 15,
  },
  buttonText: {color: 'white', textAlign: 'center'},
});
