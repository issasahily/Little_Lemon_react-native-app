import * as React from 'react';
import WelcomeScreen from '../Screens/WelcomeScreen';
import SubscribeScreen from '../Screens/SubscrubeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AddItems from '../Screens/AddItems';
import AddCustomers from '../componet/AddCustomer';
import Setting from '../Screens/Setting';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="welcome">
      <Drawer.Screen name="welcome" component={WelcomeScreen} />
      <Drawer.Screen name="subscripe" component={SubscribeScreen} />
      <Drawer.Screen name="addItems" component={AddItems} />
      {/* <Drawer.Screen name="AddCustomers" component={AddCustomers} /> */}
      <Drawer.Screen name="setting" component={Setting} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
