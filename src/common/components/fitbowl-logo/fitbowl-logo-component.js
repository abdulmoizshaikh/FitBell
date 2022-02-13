import React from 'react';
import { Image } from 'react-native';
import { View } from 'native-base';
// image
import fitbowlLogo from '../../assets/fitbowlLogo.png';

import Styles from './style.js';
const styles = Styles;



const FitbowlLogoComponent = (props) => {

    props.sidebar ? (headerStyle = styles.headerImageSidebar, logoImage = styles.logoImageSidebar) :
        (headerStyle = styles.headerImage, logoImage = styles.logoImage)

    return (
        <View style={headerStyle}>
            <Image
                style={logoImage}
                source={fitbowlLogo}
            />
        </View>
    );
}


export default FitbowlLogoComponent;