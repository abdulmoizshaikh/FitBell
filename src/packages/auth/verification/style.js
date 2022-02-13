import { StyleSheet, Dimensions } from "react-native";
let screenHeight = Dimensions.get('window').height;


export default StyleSheet.create({
    content: {
        paddingHorizontal: 30,
    },
    // all wrapper
    contentWrapper: {
        height: screenHeight / 1.7,
        justifyContent: "space-between"
    },
    // content
    headingText: {
        fontSize: 36,
    },
    headingDescription: {

    },
    inputBoxWrapper: {
        flexDirection: 'row'
    },
    inputField: {
        borderBottomColor: 'grey',
        fontWeight: 'bold',
        borderBottomWidth: 2,
        textAlign: 'center',
        marginRight: 5,
    },
    lastInputField: {
        borderBottomColor: 'grey',
        fontWeight: 'bold',
        borderBottomWidth: 2,
        textAlign: 'center'
    }
    ,
    submitBtn: {
        borderRadius: 5,
        elevation: 0,
        marginHorizontal: 20,
    }
})
