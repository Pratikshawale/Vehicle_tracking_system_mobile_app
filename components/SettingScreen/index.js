import React, {useState} from 'react';
import LottieView from 'lottie-react-native'
import { View , Text, TextInput, Pressable, ToastAndroid} from 'react-native';
import styles from './styles';
import * as SecureStore from 'expo-secure-store';

export default function SetttingScreen( {navigation} ) {

    const [api1, setapi1] = useState("http://himya702.pythonanywhere.com/getlocation");
    const [api2, setapi2] = useState('http://himya702.pythonanywhere.com/login?data=');
    const [api3, setapi3] = useState('http://himya702.pythonanywhere.com/register?data=');
    var Vapi1 = api1;
    var Vapi2 = api2;
    var Vapi3 = api3;

    async function savefnc(){
        await SecureStore.setItemAsync("location_api", Vapi1);
        await SecureStore.setItemAsync("login_api", Vapi2);
        await SecureStore.setItemAsync("register_api", Vapi3);

        ToastAndroid.show("Data saved", ToastAndroid.SHORT);
    }

    return (
        <View style={styles.container}>
            <LottieView source={require('../../assets/settings-icon.json')} 
                        autoPlay loop 
                        style = {styles.animation}/>
                        <Text style={styles.title} >Settings</Text>
            <View style={styles.settings_container}>
                <View style={styles.api_container}>
                    <Text style={styles.names} >API1:-</Text>
                    <TextInput placeholder="Email" 
                                style={{width: '80%', paddingLeft: 8}} 
                                value={Vapi1} 
                                onChangeText={(Vapi1) => { setapi1(Vapi1)}}>
                    </TextInput>
                </View>
                <View style={styles.api_container}>
                    <Text style={styles.names} >API2:-</Text>
                    <TextInput placeholder="Email" 
                                style={{width: '80%', paddingLeft: 8}} 
                                value={Vapi2} 
                                onChangeText={(Vapi2) => { setapi2(Vapi2)}}>
                    </TextInput>
                </View>
                <View style={styles.api_container}>
                    <Text style={styles.names} >API3:-</Text>
                    <TextInput placeholder="Email" 
                                style={{width: '80%', paddingLeft: 8}} 
                                value={Vapi3} 
                                onChangeText={(Vapi3) => { setapi3(Vapi3)}}>
                    </TextInput>
                </View>
                <Pressable style={styles.save_button} onPress={savefnc}>
                        <Text style={{fontSize: 20, color: 'white'}} >Save Data</Text>
                </Pressable>
                
            </View>

        </View>
    );
}


