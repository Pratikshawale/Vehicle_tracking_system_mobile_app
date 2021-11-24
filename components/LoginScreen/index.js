import React, {useState} from 'react';
import LottieView from 'lottie-react-native'
import { View , Text, TextInput, Pressable, ToastAndroid} from 'react-native';
import styles from './styles'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import * as SecureStore from 'expo-secure-store';

export default function LoginScreen( {navigation} ) {

    const [name, setname] = useState('')
    const [secret, setsecret] = useState('')
    var Value = name;
    var secret_Value = secret;

    async function login_btn(){
        let status = await SecureStore.getItemAsync('loggedin');
        console.log(status);
        if (status == 'true'){
            navigation.navigate('Main Screen');
        } else{
            const response = await fetch("http://himya702.pythonanywhere.com/login?data="+Value+"-"+secret_Value);
            const mytext = await response.text();
            ToastAndroid.show(mytext, ToastAndroid.SHORT);
            if (mytext == 'True') {
                navigation.navigate('Main Screen');
                await SecureStore.setItemAsync("loggedin", "true");
            } else{
                await SecureStore.setItemAsync("loggedin", "false");
                ToastAndroid.show('False data', ToastAndroid.SHORT);
            }
        }
        
    }

    function register_btn(){
        navigation.navigate('Register Screen')
    }

    function settings_btn(){
        navigation.navigate('Settings Screen');
    }

    function terms_condition_btn(){
        alert("🤣🤣 we don't have any terms and conditions ");
    }

    function forgot_password_btn(){
        navigation.navigate('Forgot Password Screen');
    }

    return (
        <View style={styles.container}>
            
            <Pressable onPress={settings_btn}>
                <Icon name='settings' style={styles.settings_icon} />
            </Pressable>

            <LottieView source={require('../../assets/welcome_animation.json')} 
                        autoPlay loop 
                        style = {styles.animation}/>
            <Text style={styles.text}>Login</Text>

            <View style={styles.login_container}>
                <View style={styles.email_container}>
                    <Icon name='email' style={styles.icon} />
                    <TextInput placeholder="Email" 
                                style={{width: '80%'}} 
                                value={Value} 
                                onChangeText={(Value) => { setname(Value)}}>

                    </TextInput>
                </View>
                <View style={styles.password_container}>
                    <Icon name='key' type='ionicon' style={styles.icon} />
                    <TextInput placeholder="Password  " 
                                style={{width: '80%'}} 
                                value={secret_Value}
                                onChangeText={(secret_Value) => {setsecret(secret_Value) }}>
                    </TextInput>
                </View>

                <Pressable style={styles.login_button} onPress={login_btn}>
                    <Text style={{fontSize: 20, color: 'white'}} >Login</Text>
                </Pressable>

                <Text style={{marginBottom: 10,}}>Or</Text>

                <Pressable style={styles.login_button} onPress={register_btn}>
                    <Text style={{fontSize: 20, color: 'white'}} >Register</Text>
                </Pressable>

                <Pressable style={{marginBottom:10}} onPress={terms_condition_btn} >
                    <Text style={{color: '#17C9FA'}} >Terms and conditions</Text>
                </Pressable>

                <Pressable style={{marginBottom:10}} onPress={forgot_password_btn} >
                    <Text style={{color: '#17C9FA'}} >Forgot Password</Text>
                </Pressable>

            </View>

        </View>
    );
}


