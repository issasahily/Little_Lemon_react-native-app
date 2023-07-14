import * as React from 'react';
import {View, Image, StyleSheet, Text, Pressable} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  // Add welcome screen code here.

  return (
    <View style={myStyle.container}>
      <View style={myStyle.imageContainer}>
        <Text style={myStyle.logoText}> L I T T L E</Text>
        <Image
          source={require('../img/logo.png')}
          resizeMode="contain"
          style={myStyle.logoStyle}
        />
        <Text style={myStyle.logoText}>L E M O N</Text>
      </View>
      <View style={myStyle.innerContainer}>
        <Text style={myStyle.textStyle}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
        <Pressable onPress={() => navigation.navigate('subscripe')}>
          <Text style={myStyle.buttonStyle}>Newsletter</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoStyle: {
    width: 200,
    height: 200,
    marginHorizontal: 'auto',
  },
  textStyle: {
    marginBottom: 'auto',
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoText: {
    fontSize: 35,
    color: 'rgb(18, 59, 10)',
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 6,
  },
  buttonStyle: {
    color: '#ffffff',
    fontSize: 20,
    backgroundColor: 'rgb(97, 100, 96)',
    borderRadius: 10,
    textAlign: 'center',
    marginHorizontal: 25,
    paddingVertical: 8,
  },
  innerContainer: {
    flex: 0.3,
    justifyContent: 'flex-end',
    marginBottom: 25,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.7,
  },
});
