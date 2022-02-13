import React from "react";
import { ScrollView } from 'react-native';
import { Text, Container, Button, Icon, View, Title } from 'native-base';
import { DrawerActions } from "react-navigation";

import Styles from './style.js';
const styles = Styles;

// packages
import commonStyles from '../../common/components/commonStyles';
import HeaderComponent from "../../common/components/header/header";


class Give3Container extends React.Component {
    render() {
        return (
            <Container >

                <HeaderComponent
                    headerLeft={
                        (<Button style={[commonStyles.transparentBackgroundColor, commonStyles.elevation0]} onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                            <Icon name="menu" style={commonStyles.headerIconColor} />
                        </Button>)}
                    headerBody={(<Title style={commonStyles.headerIconColor}>GIVE 3 + GET 3</Title>)}
                />

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.rootContainer}>
                    <Text style={styles.titleStyle}>Add the sweet touch to your friends day. Invite
                    your friends to download our app, and they'll each get $3 in credit to send ad
                    FitBowl. Once they spend their $3 too!</Text>

                    <Button rounded bordered dark block
                        style={styles.btnStyle}>
                        <Text>SHARE</Text>
                    </Button>

                    <Button rounded bordered dark block
                        style={styles.btnStyle}>
                        <Text>E-MAIL</Text>
                    </Button>

                    <Button rounded bordered dark block
                        style={styles.btnStyle}>
                        <Text>SMS</Text>
                    </Button>
                </ScrollView>

            </Container>
        )
    }
}



export default Give3Container;