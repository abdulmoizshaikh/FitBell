import { StyleSheet, Dimensions } from "react-native";
let screenHeight = Dimensions.get('window').height;
screenHeight = screenHeight - 80;

export default StyleSheet.create({
    scrollViewContent: {
        marginHorizontal: 20,
    },

    // All wrapper
    titleWrapper: {
        height: screenHeight / 6, 
    },
    formWrapper: {
        height: screenHeight / 2,
        justifyContent: 'space-around',
    },
    fbBtnAndTextWrapper: {
        height: screenHeight / 3.5,
        justifyContent: 'space-around',
    },
    footerWrapper: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },


    // content
    headingText1: {
        fontSize: 28,
        marginBottom: 10
    },
    headingText2: {
        fontSize: 20,
    },
    item: {
        marginLeft: 0
    },
    label: {
        color: "#000",
        fontWeight: 'bold',
        // marginLeft: 3
    },
    inputField: {
        fontSize: 15,
        paddingLeft: 0
    },
    errorText: {
        color: "red",
        marginLeft: 6,
        fontSize: 13
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

    fieldStyleOnFocus: {
        borderBottomWidth: 2,
        borderBottomColor: 'green'
    },
    hrlineView: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red',
        marginHorizontal: 20
    },
    hairline: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '25%',
        borderColor: "#A2A2A2"
    },

    loginButtonBelowText1: {
        // width: '50%',
        textAlign: 'center',
        // fontFamily: 'AvenirNext-Bold',
        fontSize: 14,
        paddingHorizontal: 15,
        alignSelf: 'center',
        fontWeight: '400'
        // color: '#A2A2A2',
    },
    forgotPassText: {
        alignSelf: 'flex-end',
        color: "#95ca31",
        padding: 10,
    },
    signInButton: {
        borderRadius: 5,
        elevation: 0,
        marginHorizontal: 20,
        marginTop: 10
    },
    fbBtnWrapper: {
        marginHorizontal: 20,
    },

    fontWeightBold: {
        fontWeight: 'bold'
    },
    // footer
    footerView: {
        flex: 0.5,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    footerText: {
        textAlign: 'center',
        fontSize: 14,
        // marginLeft: 10
    },
    footerTouchableText: {
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }
})
