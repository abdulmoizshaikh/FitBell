import { StyleSheet } from "react-native";

export default StyleSheet.create({

    // rootContainer: {
    //     marginHorizontal: 20,
    // },
    titleTextIconWrapper: {
        flexDirection: "row"
    },
    descriptionWrapper: {
        flexDirection: 'row',
        marginTop: 5,
        backgroundColor: 'red'
    },
    descriptionText: {
        // flex: 0.7
    },
    descriptionIconWrapper: {
        // flex: 0.3,
        // flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        // backgroundColor: "yellow"
    },
    titleText: {
        fontWeight: 'bold',
        marginRight: 10,
        alignSelf: 'center'
    },
    titleText2: {
        fontWeight: 'bold'
    },
    titleStyle: {
        fontSize: 24,
        marginBottom: 20,
    },
    slected: {
        borderWidth: 1,
        borderColor: 'rgb(149, 202, 49)',
        backgroundColor: 'transparent',

    },
    ViewWrapper: {
        backgroundColor: 'rgba(196,202,204, 0.2)',
        borderRadius: 5,
        padding: 15,
        marginVertical: 10
    },
    dot: {
        fontSize: 24,
        color: 'rgb(196,202,204)'

    },
    selectedDot: {
        color: 'rgb(149, 202, 49)',
    },
}
)