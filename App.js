import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FriendsScreen from './FriendsScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './Signup';
import SetPinScreen from './pinLock';
import Dashboard from './Dashboard';
import Menu from './Menu';
import CreateWorkorder from './components/Workorder/createWorkorder'
import CreateVendor from './components/Vendor/createVendor';
import ExampleFour from './screens/vendorDetails'
import VendorDetails from './screens/vendorDetails';
import CreateDeliveryChallan from './components/DeliveryChallan/CreateDeliveryChallan';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
           <Stack.Screen
            name="Signup"
            component={SignupScreen}
          />
          <Stack.Screen
            name="Setpin"
            component={SetPinScreen}
          />
           <Stack.Screen
            name="Dashboard"
            component={Dashboard}
          />
           <Stack.Screen
            name="createWorkorder"
            component={CreateWorkorder}
          />
           <Stack.Screen
            name="createVendor"
            component={CreateVendor}
          />
            <Stack.Screen
            name="vendorTable"
            component={VendorDetails}
          />
           <Stack.Screen
            name="createChallan"
            component={CreateDeliveryChallan}
          />
          
           
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
