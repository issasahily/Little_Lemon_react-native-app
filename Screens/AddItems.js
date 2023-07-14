import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {validateEmail} from '../util';
import {
  Image,
  Pressable,
  TextInput,
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const AddItems = () => {
  const [value, SetValue] = React.useState('');
  const [itemsList, setItemsList] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      try {
        const items = await AsyncStorage.getItem('items');
        setItemsList(items === null ? [] : JSON.parse(items));
      } catch (e) {}
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem('items', JSON.stringify(itemsList));
      } catch (e) {}
    })();
  }, [itemsList]);
  const Item = ({items}) => {
    return (
      <FlatList
        // style={{flex: 0.3}}
        ListHeaderComponent={() => (
          <Text style={{fontSize: 15}}>Home Daly Items :</Text>
        )}
        ListFooterComponent={() => {
          return (
            <TouchableOpacity
              onPress={() => {
                AsyncStorage.removeItem('items');
                setItemsList('');
              }}>
              <Text> Clear List </Text>
            </TouchableOpacity>
          );
        }}
        data={items}
        renderItem={({item}) => (
          <Text
            style={{
              fontSize: 15,
              marginVertical: 10,
              paddingVertical: 4,
              borderBottomWidth: 0.5,
            }}>
            {item}
          </Text>
        )}
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={myStyle.container}>
        <Image
          style={myStyle.logo}
          source={require('../img/logo.png')}
          resizeMode="contain"
        />
        <Text style={myStyle.textStyle}>
          Subscribe to our newslettler for our latest delicious recipes!
        </Text>

        <TextInput
          style={myStyle.textInputStyle}
          placeholder="Add you Items ."
          value={value}
          onChangeText={SetValue}
        />
        <TouchableOpacity
          onPress={() => {
            setItemsList([...itemsList, value]);
            SetValue('');
          }}
          style={myStyle.buttonStyle}>
          <Text style={myStyle.buttonText}>Add Items</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.4}}>
        <Item items={itemsList} />
      </View>
    </View>
  );
};

export default AddItems;

const myStyle = StyleSheet.create({
  container: {
    flex: 0.6,
    alignItems: 'center',
    // paddingVertical: 30,
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
