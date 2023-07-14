import * as React from 'react';
// import {createStackNavigator} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import SubscribeScreen from '../Screens/SubscrubeScreen';
import DrawerNavigator from './DrawerNavigator';
import AddItems from '../Screens/AddItems';
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen name="subscripe" component={SubscribeScreen} />
      <Stack.Screen name="addItems" component={AddItems} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
