import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B3BBC2',
    },
    mapViewContainer: {
        width: 330,
        height: 450,
        marginTop: 30,
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
    },
    ring: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "rgba(130,4,150, 0.3)",
        position: "absolute",
        borderWidth: 1,
        borderColor: "rgba(130,4,150, 0.5)",
    },
    marker: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "rgba(130,4,150, 0.9)",
    },

});

export default styles;