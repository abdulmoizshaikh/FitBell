import { StyleSheet } from "react-native";


export default StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        height: 70,
        marginLeft: 20
    },

    // listItem Wrappers
    leftIconWrapper: {
        height: "100%",
        justifyContent: 'center',
        width: "20%",
        alignItems: "flex-start",
    },
    iconStyle: {
        color: '#ffffff',
        backgroundColor: '#95ca31',
        padding: 10,
        borderRadius: 10,
        fontSize: 25
    },
    bodyWrapper: {
        justifyContent: 'center',
        height: "100%",
        width: "65%",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    bodyTitleWrapper: {
        flexDirection: 'row'
    },
    bodyText1: {
        fontSize: 17,
        color: '#95ca31',
    },
    bodyText2: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    rightIconWrapper: {
        flex: 1,
        height: 44,
        justifyContent: 'center',
        width: "10%",
        height: "100%",
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'flex-end',
        paddingRight: 20
    },
    rightArrow: {
        color: '#c4cacc',
        fontSize: 18
    },

})