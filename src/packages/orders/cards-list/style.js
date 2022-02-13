import { StyleSheet } from "react-native";

export default StyleSheet.create({
    headerRightView: {
        flexDirection: 'row'
    },
    headerCalenderIconStyle: {
        padding: 10,
        marginRight: 5,
    },
    headerCommentsIconStyle: {
        padding: 10,
    },

    // today text style
    titleView: {
        height: 40,
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginVertical: 10
    },
    leftView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftTitle: {
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    leftTitleNormal: {
        paddingHorizontal: 10
    },
    rightTitle: {
        padding: 10,
    },
    rightConfirmBtn: {
        width: 100,
        height: 32,
        borderRadius: 4,
        backgroundColor: '#7ed321'
    },
    confitmBtnText: {
        fontSize: 12,
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
        textAlign: 'center'
    },
    rowView: {
        flex: 1,
        paddingHorizontal: 20,
        // flexDirection: 'row'
    },
    // card style
    cardStyle: {
        width: 160,
        // height: 187,
        marginRight: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealAddIconView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    addMealIcon: {
        fontSize: 50,
        color: '#000',
    },
    addMealfooterTitle: {
        // fontSize: 12,
        // fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    cardImage: {
        width: 170,
        height: 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    footerView: {
        padding: 10,
        // backgroundColor: "yellow",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    footerTitle: {
        // fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
        // backgroundColor: "red"
    },
    footerLastCaption: {
        fontSize: 15
    },
    tutorilasCloseBtnWrapper: {
        position: 'absolute',
        right: 10,
        top: 0,
        backgroundColor: '#fff',
        zIndex: 1,
        borderRadius: 50,
        elevation: 3,
        width: 35,
        height: 35,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#7ed321'
    },
    noMealIcon: {
        alignSelf: 'center',
        width: 200,
        height: 200
    },
    MV10: {
        marginVertical: 10
    }
});