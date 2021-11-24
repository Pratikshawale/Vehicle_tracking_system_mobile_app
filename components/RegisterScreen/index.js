import React, {useState} from 'react';
import LottieView from 'lottie-react-native'
import { View , Text, TextInput, Pressable, ToastAndroid, Alert} from 'react-native';
import styles from './styles'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import * as Notifications from 'expo-notifications';


function RegisterScreen( {navigation} ) {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    var emailValue = email;
    var passwordValue = password;

    async function register() {
        if (emailValue != "" && passwordValue != ""){
            let token = (await Notifications.getExpoPushTokenAsync()).data;
            const response = await fetch("http://himya702.pythonanywhere.com/register?data="+emailValue+"-"+passwordValue+"-"+token);
            const mytext = await response.text();
            ToastAndroid.show(mytext, ToastAndroid.SHORT);
        }else{
            alert("🙄🙄 Invalid input");
        }
    }

    function terms_condition_btn(){
        alert("🤣🤣 we don't have any terms and conditions ");
    }

    function forgot_password_btn(){
        navigation.navigate('Forgot Password Screen');
    }

    return (
        <View style={styles.container}>

            <LottieView source={require('../../assets/register_animation.json')} 
                                    autoPlay loop 
                                    style={{width: '50%'}} />
            
            <Text style={{fontSize: 30, fontFamily: 'monospace'}}>Register</Text>

            <View style={styles.register_container} >

                <View style={styles.email_container}>
                    <Icon name='email' style={styles.icon} />
                    <TextInput placeholder = 'Email'
                               style={{width: '80%'}}
                               value={emailValue}
                               onChangeText={(emailValue) => {setemail(emailValue)}}
                               onSubmitEditing={register} />
                </View>

                <View style={styles.password_container}>
                    <Icon name='key' type='ionicon' style={styles.icon} />
                    <TextInput placeholder = 'Password'
                               style={{width: '80%'}}
                               value={passwordValue}
                               onChangeText={(passwordValue) => {setpassword(passwordValue)}}
                               onSubmitEditing={register} />
                </View>

                <Pressable style={styles.register_button} onPress={register} >
                    <Text style={{fontSize: 20, color: 'white'}} >Register</Text>
                </Pressable>

                <Text style={{marginBottom: 10,}}>Or</Text>

                <Pressable style={{marginBottom:10}} onPress={forgot_password_btn} >
                    <Text style={{color: '#17C9FA'}} >Forgot Password</Text>
                </Pressable>

                <Pressable style={{marginBottom:10}} onPress={terms_condition_btn} >
                    <Text style={{color: '#17C9FA'}} >Terms and conditions</Text>
                </Pressable>

                

            </View>

        </View>
    );
}

export default RegisterScreen;