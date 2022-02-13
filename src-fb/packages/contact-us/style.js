import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    //for RN map
    mapContainer: {
        flex: 1.5,
        backgroundColor: "#F5FCFF"
    },
    map: {
        flex: 1,
    },

    // listItem style
    listItem: {
        paddingTop: 0,
        paddingBottom: 0,
        marginLeft: 0,
        paddingLeft: 18
    },

    // listItem Wrappers
    leftIconWrapper: {
        height: 44,
        justifyContent: 'center',
    },
    bodyTextWrapper: {
        justifyContent: 'center',
        height: 44,
    },
    bodyText: {
        marginLeft: 0
    },
    rightIconWrapper: {
        flex: 1,
        height: 44,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    rightTextWrapper: {
        height: 44,
        justifyContent: 'center',
    },

    // listitem content style
    iconStyle: {
        color: '#c4cacc',
        width: 40,
        alignSelf: 'center',
        // textAlign: 'center'
    },
    rightArrow: {
        color: '#c4cacc',
        fontSize: 18
    },
    rightText: {
        color: '#59b58d',
        fontSize: 16
    },

    // fb twitter btn style
    fbTwitterBtnsWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    btnStyle: {
        elevation: 0,
        borderRadius: 5,
        backgroundColor: '#f4f6f6',
        borderColor: "#fff",
        alignSelf: 'center'
    },
    btnIconColor: {
        color: '#969fa2'
    },
    btnTextStyle: {
        color: "#455154",
        width: 110,
        fontWeight: 'bold'
    }
})