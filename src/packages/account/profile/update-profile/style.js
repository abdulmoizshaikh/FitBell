import { PixelRatio, StyleSheet } from 'react-native';

export default StyleSheet.create({
    // header style
    // headerStyle: {
    //     backgroundColor: '#fff',
    //     elevation: 0,
    //     // marginHorizontal: 10
    // },
    // headerBodyStyle: {
    //     flex: 1,
    //     alignItems: 'center'
    // },
    // headerTitleStyle: {
    //     textAlign: "center",
    //     flex: 1,
    //     fontWeight: 'normal'
    // },
    // headerTextColor: {
    //     color: '#000',
    // },
    rootContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150,
    },
    btnsView: {
        marginTop: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    btnText: {
        width: '100%',
        textAlign: 'center'
    },
    btnStyle: {
        width: "40%"
    },
    // input field style
    errorText: {
        color: "red",
        marginLeft: 6,
        fontSize: 13,
        width: "100%"
    },
    fieldStyleOnFocus: {
        borderBottomWidth: 2,
        borderBottomColor: 'green'
    },
    toggleText: {
        position: "absolute",
        right: 0,
        padding: 10
    },

})