import React, {useState} from 'react';
import {View , Text, TextInput, Pressable, ToastAndroid} from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements/dist/icons/Icon';

export default function ForgotPasswordScreen( {navigation} ) {

    const [name, setname] = useState('');
    var Value = name;

    function send_btn(){
        console.log("hello");
    }

    return (
        <View style={styles.container}>

            <Text style={styles.text}>Forgot Password</Text>

            <View style={styles.login_container}>
                <View style={styles.email_container}>
                    <Icon name='email' style={styles.icon} />
                    <TextInput placeholder="Email" 
                                style={{width: '80%'}} 
                                value={Value} 
                                onChangeText={(Value) => { setname(Value)}}>
                                
                    </TextInput>
                </View>

                <Pressable style={styles.login_button} onPress={send_btn}>
                    <Text style={{fontSize: 20, color: 'white'}} >Send</Text>
                </Pressable>

            </View>

        </View>
    );
}

