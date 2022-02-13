import { StyleSheet } from 'react-native'
import theme from 'source/constants/colors'

export default StyleSheet.create({
    drawerContentContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-end',
        backgroundColor: theme.primary
    },
    contentView: {
        marginTop: 80
    },
    closeIcon: {
        width: 13,
        height: 13,
        marginRight: 28,
    },
    drawerItem: {
        alignItems: 'flex-end',
        marginVertical: 0,
        color: "white"
    },
    drawerItemContainer: {
        marginTop: 30,
        paddingLeft: 40,
        paddingRight: 28,
    },
    activeItem: {
        paddingTop: 8,
        paddingBottom: 8,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        backgroundColor: theme.secondary
    },
    drawerLabel: {
        fontSize: 16,
        color: 'white',
        textAlign: 'right',
        fontFamily: 'Sansation-Bold'
    },
});