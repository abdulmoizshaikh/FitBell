import { StyleSheet } from 'react-native';


export default StyleSheet.create({


    sidemenuHeaderContainer: {
        flex: 1,
        height: 290,
    },
    sidemenuHeaderBackground: {
        backgroundColor: 'rgb(149, 202, 49)',
        width: 300,
        height: 280,
        borderBottomLeftRadius: 180,
        borderBottomRightRadius: 150,
        transform: [
            { scaleX: 1.5 }
        ],
        position: 'absolute',
    },
    sidemenuTitleSectionWrapper: {
        width: '100%',
        height: '100%'
    },
    sidemenuTitleRightSection: {
        justifyContent: 'center',
        flex: 3
    },
    userName: {
        marginHorizontal: 15,
        fontSize: 20,
        marginBottom: 5,
        color: '#242a37'
    },
    sidemenuTitleSectionContent: {
        flexDirection: 'row',
        marginTop: 40,
        position: 'relative'
    },
    headerThumbnailWrapper: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    headerThumbnail1: {
        borderWidth: 3,
        borderColor: "#fff"
    },
    ketoIconWrapper: {
        marginRight: 15,
        elevation: 2
    },
    headerThumbnail2: {
        borderWidth: 2,
        borderColor: "#fff",
        width: 36,
        height: 36,
    },
    headerIcons: {
        width: 36,
        height: 36,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: 5
    },
    ketoAndEditIconWrapper: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: 100,
        justifyContent: 'center',
        padding: 5,
        borderRadius: 20,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    editIcon: {
        color: "#969fa2",
        fontSize: 20
    },
    ketoTextColor: {
        color: "#242a37"
    },
    sidemenuDetaisSection: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        // backgroundColor: 'pink'
    },
    IconDescriptionContainer: {
        // backgroundColor: 'yellow',
        width: 85,
        height: 60,
        marginTop: 10,
    },
    IconDescriptionTitle: {
        textAlign: 'center',
        fontSize: 14
    },
    IconDescriptionText: {
        textAlign: 'center',
        fontSize: 12,
        width: 60,
        alignSelf: 'center',
        color: '#242a37',
        opacity: 0.3,
        marginTop: 5
    },

    listItemsContainer: {
        flexDirection: 'row',
    },
    listItemsIconContainer: {
        width: 45
    },
    listItemsIcon: {
        color: "#cccccc",
        fontSize: 25
    },
    listItemCreditIcon: {
        color: "#cccccc",
        fontSize: 20
    },
    listItemsLogout: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingVertical: 10
    }
})