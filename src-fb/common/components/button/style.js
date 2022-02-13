import { StyleSheet, Dimensions } from 'react-native';
const screen = Dimensions.get('window');

export default StyleSheet.create({
    btnStyle: {
        // maxWidth:  '30%',
        maxWidth: screen.width <= 360 ? 105 : 140,
        justifyContent: 'space-around',
        borderRadius: 5,
        elevation: 0,
    },
    btnTextStyle: {
        fontSize: 10,
    }

})
