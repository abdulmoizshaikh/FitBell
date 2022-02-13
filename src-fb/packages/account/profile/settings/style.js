import { StyleSheet } from 'react-native';

export default StyleSheet.create({


    DailyConfirmationRightView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    DailyConfirmationRightText: {
        fontSize: 14,
        color: '#969fa2',
        marginRight: 5
    },
    itemDividerName: {
        color: '#969fa2',
        fontSize: 12
    },
    listItemName: {
        fontSize: 16
    },
    DailyConfirmationRightIcon: {
        color: '#c4cacc',
        fontSize: 18
    },
    rightArrow: {
        color: '#c4cacc',
        fontSize: 18
    },
    height100: {
        height: 100
    },
    switchStyle: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
        alignSelf: 'center'
    }
})