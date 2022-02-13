import { StyleSheet, Dimensions } from 'react-native';
const screen = Dimensions.get('window');
const styles = {
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
        // paddingHorizontal: 10,
        paddingHorizontal: screen.width <= 360 ? 10 : 20 ,
        // width: '100%',
        alignItems:'center',
        // justifyContent:'center',
        flex: 1
    },
    H2Style: {
        paddingTop: 10,
        // paddingHorizontal: screen.width <= 360 ? 15 : 30,
        paddingHorizontal: 20,
        fontSize: 24,
        // backgroundColor: 'red',

    },
    sectionViewContent: {
        marginBottom: 20,
        // justifyContent: 'center'
        width: '100%',
    },
    titleStyle: {
        fontWeight: 'bold',
        marginVertical: 5,
        marginHorizontal: 5
    },
    rowStyle: {
        justifyContent: 'space-between',
        marginVertical: 5
    },
    colWrapStyle: {
        // backgroundColor: 'red',
        // justifyContent: 'space-between',
        paddingVertical: 5,
    },
    btnCompStyle: {
        marginHorizontal: 5
    }

}

export default styles;