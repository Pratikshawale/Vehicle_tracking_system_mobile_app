import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        width: '50%',
    },
    text: {
        fontSize: 30,
        fontFamily: 'monospace',
    },
    login_container: {
        backgroundColor: '#E0E2E5',
        borderRadius: 20,
        marginTop: 10,
        alignItems: 'center',
        width: 250,
    },
    email_container: {
        backgroundColor: '#CCCCCC',
        borderRadius: 5,
        marginTop: 10,
        flexDirection: 'row',
        width: '90%',
    },
    password_container: {
        backgroundColor: '#CCCCCC',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        width: '90%',
    },
    icon: {
        marginRight: 10,
    },
    login_button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#777878',
        width: 120,
        height: 35,
        borderRadius: 50,
        marginBottom: 10
    },
    settings_icon: {
        marginLeft: 280,
        marginBottom: 40
    }
});

export default styles;