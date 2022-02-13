import { StyleSheet, Dimensions } from 'react-native';
const screen = Dimensions.get('window');

export default StyleSheet.create({
    // header style
    headerStyle: {
        elevation: 0,
        backgroundColor: '#fff',
        // marginHorizontal: 10
    },
    headerTextColor: {
        color: '#000',
    },
    headerRightView: {
        flexDirection: 'row',
    },
    heartSpinnerStyle: {
        height: 30,
        alignSelf: 'center',
        padding: 5,
        marginRight: 5
    },
    headerHeartIconStyle: {
        padding: 10,
        marginRight: 5,
    },
    headerShareIconStyle: {
        padding: 10,
        paddingRight: 15,

    },
    // headerRightStyle: {
    //     padding: 10,
    // },

    // Main Top card Style
    IndividualSection: {
        marginBottom: 20
    },
    topCardStyle: {
        width: "100%",
    },
    topCardImage: {
        width: "100%",
        height: 200,
    },
    topCardFooterView: {
        padding: 5,
    },
    topCardFooterTitle: {
        fontSize: 20,
        // marginBottom: 10,
        fontWeight: 'bold',
        // textTransform: 'capitalize'
    },
    topCardfooterRow: {
        flexDirection: 'row',
        paddingTop: 10
    },
    topCardleftStarView: {
        flexDirection: 'row'
    },
    flex1: {
        flex: 1
    },
    // topCardcalorieText: {
    //     fontSize: 13
    // },

    // HorizontalCard style
    cardStyle: {
        marginRight: 10,
    },
    cardImage: {
        width: 100,
        height: 80,
    },
    footerView: {
        padding: 5,
        width: 100,
    },
    footerTitle: {
        fontSize: 14,
        textAlign: 'center',
    },

    //third order section style 
    titleStyle: {
        fontWeight: 'bold',
        marginVertical: 5
    },
    rowStyle: {
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    // last section
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
        width: "45%"
    }


});
