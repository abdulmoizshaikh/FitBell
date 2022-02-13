import { StyleSheet } from "react-native";

export default StyleSheet.create({
    H20: {
        height: 20,
        backgroundColor: '#fafafa',
    },
    sectionWrapper: {
        margin: 20
    },
    subPkgsTitleWrapper: {
        paddingTop: 30,
        paddingBottom: 20,
        marginLeft: 20,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: "bold",
    },

    // header card style
    headerCardWrapper: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    cardStyle: {
        width: '100%',
        flexDirection: 'row',
        borderWidth: 0,
    },
    cardImage: {
        width: 64,
        height: 64,
        borderRadius: 10
    },


    bodyWrapper: {
        paddingHorizontal: 20,
        alignSelf: 'center',
    },
    bodyTextTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    calorieText: {
        fontSize: 14
    },
    rightArrow: {
        color: '#c4cacc',
        fontSize: 18
    },
    footerSectionWrapper: {
        padding: 20,
        backgroundColor: '#fafafa',
    },
    footerText: {
        fontSize: 13,
        color: '#8a8a8f'
    },

})