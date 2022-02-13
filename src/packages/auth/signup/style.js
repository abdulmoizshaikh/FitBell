import { StyleSheet, Dimensions } from "react-native";
let screenHeight = Dimensions.get('window').height;
screenHeight = screenHeight - 80;


export default StyleSheet.create({

    scrollViewContent: {
        marginHorizontal: 30,
    },
    // All wrapper
    titleWrapper: {
        height: screenHeight / 7,
    },
    formWrapper: {
        height: screenHeight / 1.73,
        justifyContent: 'space-around',
    },

    fbBtnAndTextWrapper: {
        height: screenHeight / 4,
        justifyContent: 'space-around',
    },


    // content style

    footerWrapper: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headingText: {
        fontSize: 28
    },
    item: {
        marginLeft: 0
    },
    label: {
        color: "#000",
        fontWeight: "bold",
    },
    inputTag: {
        fontSize: 15,
        paddingLeft: 0
    },
    hrlineView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    hairline: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '25%',
        borderColor: "#A2A2A2"
    },
    loginButtonBelowText1: {
        width: '50%',
        textAlign: 'center',
        fontFamily: 'AvenirNext-Bold',
        fontSize: 14,
        paddingHorizontal: 5,
        alignSelf: 'center',
        color: '#A2A2A2',
    },
    colorGray: {
        color: "#A2A2A2"
    },

    fontWeightBold: {
        fontWeight: 'bold'
    },
    signupButton: {
        borderRadius: 5,
        elevation: 0,
        marginHorizontal: 20,
        marginTop: 20
    },

    fbBtnWrapper: {
        marginHorizontal: 20,
    },

    // footer
    footerText: {
        textAlign: 'center'
    },
    footerTouchableText: {
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },


    // input field style    
    errorText: {
        color: "red",
        marginLeft: 6,
        fontSize: 13
    },
    toggleText: {
        position: "absolute",
        right: 0,
        // padding: 10,
    },
    fieldStyleOnFocus: {
        borderBottomWidth: 2,
        borderBottomColor: 'green'
    },
})
