import React, {useState, useEffect} from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Dimensions } from 'react-native';
import * as SecureStore from 'expo-secure-store';


export default function UserMainScreen() {

    const lattitude_delta = 0.004;
    const longitude_delta = lattitude_delta * (Dimensions.get('window').width / Dimensions.get('window').height);

    var lat1 = 18.5204;
    var lng1 = 73.8567;

    const [location, getLocation] = useState([lat1, lng1]);
    const [rlocation, getRegionLocation] = useState([lat1,lng1]);

    async function aaa(){
        let a = await SecureStore.getItemAsync('location');
        getRegionLocation(a.split(','));
        console.log(a.split(','));
    }

    useEffect(() => {
        aaa();
        setInterval(async() => {
            //let result = await SecureStore.getItemAsync("location_api");
            const response = await fetch('http://himya702.pythonanywhere.com/getlocation');
            const mytext = await response.text();
            const my = mytext.split(',')
            getLocation(my);
        }, 1000);
    },[])

    return (
        <View style={styles.mainContainer}>
            <View>
                <Text style={styles.title} >Total Registered Vehicles 1</Text>

                <MapView  style={styles.mapViewContainer}
                          region={{latitude: parseFloat(rlocation[0]), 
                                          longitude: parseFloat(rlocation[1]),
                                         latitudeDelta: lattitude_delta,
                                         longitudeDelta: longitude_delta}} >
                    <Marker coordinate={{latitude: parseFloat(location[0]), 
                        longitude: parseFloat(location[1])}} 
                        title={"MH14HN0000"}
                        description={"Himanshu Tekade"}  >
                            {/* <Image source={require('../../assets/Crane-Art.png')} 
                                    style={{height: 60, width: 60}} /> */}
                    </Marker>
                </MapView>
            </View>
        </View>
    );
}
