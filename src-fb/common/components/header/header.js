import React from 'react';
import { Header, Left, Right, Body } from "native-base";
import Styles from "./style";
const styles = Styles;


var headerBodyStyle;

const HeaderComponent = (props) => {
    if (props.bodyFlex3) headerBodyStyle = styles.headerBodyStyleFlex3
    else if (props.bodyFlex4) headerBodyStyle = styles.headerBodyStyleFlex4
    else headerBodyStyle = styles.headerBodyStyleFlex2


    if (props.rightFlex2) headerRightStyle = styles.headerRightFlex2
    else headerRightStyle = styles.headerRightStyle

    return (
        <Header androidStatusBarColor="#000"
            style={props.isBordered ? [styles.headerStyle, styles.borderHeaderStyle] : [styles.headerStyle]}>
            <Left style={styles.headerLeftStyle}>{props.headerLeft}</Left>
            <Body style={headerBodyStyle}>{props.headerBody}</Body>
            <Right style={headerRightStyle}>{props.headerRight}</Right>
        </Header>
    )
}

export default HeaderComponent;









{/* <Button transparent onPress={props.onPressLeft}>
                    {props.headerLeft}
                </Button> */}


{/* <Title style={styles.headerTitleStyle}>{props.title}</Title> */ }


{/* <Button transparent onPress={props.onPressRight}>
                    <Text style={styles.headerTextColor}>{(props.editableMode) ? (props.profileHeaderRightText) : (props.headerRightText)}</Text>
                </Button> */}
