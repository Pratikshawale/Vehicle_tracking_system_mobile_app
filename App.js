import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { StyleSheet } from 'react-native';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import UserMainScreen from './components/UserMainScreen';
import SettingScreen from './components/SettingScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import * as SecureStore from 'expo-secure-store';


const Stack = createStackNavigator();

export default function App() {

  useEffect(() => {
    registerPushNotification().then(token=>console.log(token)).catch(err=>console.log(err));
    regionLocation();
  }, [])

  async function regionLocation(){
    const response = await fetch('http://himya702.pythonanywhere.com/getlocation');
    const mytext = await response.text();
    await SecureStore.setItemAsync('location', mytext);
  }

  async function registerPushNotification(){
    const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status != 'granted'){
      const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    }
    if (status != 'granted'){
      alert("Please give permission");
      return;
    }
    let token = (await Notifications.getExpoPushTokenAsync()).data;
    await SecureStore.setItemAsync('token', token);
    return token; 
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>

        {/* <Stack.Screen name="Main Screen" component={UserMainScreen} /> */}
        {/* <Stack.Screen name="Forgot Password Screen" component={ForgotPasswordScreen} /> */}
        
        <Stack.Screen name="Login Screen" component={LoginScreen}  />
        <Stack.Screen name="Register Screen" component={RegisterScreen} />
        <Stack.Screen name="Main Screen" component={UserMainScreen} />
        <Stack.Screen name="Settings Screen" component={SettingScreen} />
        <Stack.Screen name="Forgot Password Screen" component={ForgotPasswordScreen} />

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
