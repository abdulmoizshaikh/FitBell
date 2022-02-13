import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = {
    // header style
    headerStyle: {
        elevation: 0,
    },
    headerTitleStyle: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitleText: {
        marginLeft: 10
    },

    // content style
    root: {
        width: width,
        height: height,
        backgroundColor: '#eee',
    },

    scrollViewContainer: {
        borderRadius: 5,
        // backgroundColor: '#eee',
        width: '90%',
        alignSelf: 'center',
        marginVertical: 5
    },
    chatMessageView: {
        flexDirection: 'row'
    },
    rightMessageText: {
        backgroundColor: '#e5fccf',
        margin: 5,
        padding: 10,
        borderRadius: 50
    },
    leftMessageText: {
        backgroundColor: '#fff',
        margin: 5,
        padding: 10,
        borderRadius: 50
    },
    inputItem: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 2,
        marginBottom: 10,
        backgroundColor: '#fff'
    }
};

export default styles;