import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontFamily: 'monospace',
        marginTop: -30
    },
    animation: {
        width: '50%',
    },
    settings_container: {
        backgroundColor: '#E0E2E5',
        borderRadius: 20,
        marginTop: 10,
        alignItems: 'center',
        width: 300,
       
    },
    names: {
        alignSelf: 'flex-start',
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 4
    },
    api_container: {
        backgroundColor: '#CCCCCC',
        borderRadius: 5,
        marginTop: 10,
        flexDirection: 'row',
        width: '90%',
        marginBottom: 10
    },
    save_button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#777878',
        width: 120,
        height: 35,
        borderRadius: 50,
        marginBottom: 10,
    },
});

export default styles;