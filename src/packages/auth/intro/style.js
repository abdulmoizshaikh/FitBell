import { StyleSheet, Dimensions } from 'react-native';
// const screen = Dimensions.get('window');
const { width } = Dimensions.get('window')

export default StyleSheet.create({
    rootContainer: {
        // padding: 45
        flex: 1,
        // paddingHorizontal: 30
    },
    imageContainer: {
        ...StyleSheet.absoluteFillObject,
        // flex: 1,
        // justifyContent: 'center',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    screenBackground: {
        flex: 1
    },
    imageBackgroundWrapper: {
        paddingBottom: 250,
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30
    },
    imageBackgroundText: {
        fontSize: 18,
        fontWeight: '600'
    },
    introFooterSection: {
        position: 'absolute',
        bottom: 40,
        width: width,
        paddingHorizontal: 30
    },
    coverImage: {
        flex: 1,
        height: null,
        width: null
    },

    loginContainer: {
        flex: 2,
        // backgroundColor: 'red',
        justifyContent: 'center',

    },
    loginButton: {
        borderRadius: 5,
        elevation: 0,
        marginBottom: 15,
        height: 55,
    },
    titleImage: {
        width: 255,
        height: 85
    },
    titleText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    imageThumbnailnWrapper: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: 'red'


    },
    imageThumbnail: {
        alignSelf: 'center',
        height: 80,
        // width: 250,
        marginBottom: 50
    },
    captionText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#fff'
    },

    CaptionView: {
        flex: 2,
        justifyContent: 'center',
        // marginTop: 30,
        // backgroundColor: 'blue'

    },

    ButtonView: {
        flex: 1,
        marginBottom: 20,
    },


    authButtonsWrapper: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'green'

    },

    footerView: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 30,
    },
    footerViewLeft: {
        flex: 2,
        paddingVertical: 10
    },
    footerViewLeftText: {
        fontSize: 14,
    },
    footerViewRight: {
        flex: 1,
    },
    footerViewRightText: {
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        color: '#000',
        paddingVertical: 10
    },
});
