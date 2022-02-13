import { StyleSheet, Dimensions } from "react-native";
let screenHeight = Dimensions.get('window').height;


export default StyleSheet.create({
    content: {
        paddingHorizontal: 30,
    },
    
    // all wrapper
    contentWrapper: {
        height: screenHeight / 1.5,
        justifyContent: "space-between",
    },
    // content
    headingText: {
        fontSize: 36,
    },
    item: {
        marginLeft: 0
    },
    label: {
        color: "#000",
        fontWeight: 'bold'
    },
    toggleText: {
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        padding: 10,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    submitBtn: {
        borderRadius: 5,
        elevation: 0,
        marginHorizontal: 20,
    }
})