import React from "react";
import { ScrollView } from "react-native";
import { Container, View, Text, Icon, Button, Title } from 'native-base';


import Styles from './style';
const styles = Styles;

//packages
import commonStyles from '../../../../common/components/commonStyles';
import HeaderComponent from "../../../../common/components/header/header";





class CreditHistoryContainer extends React.Component {
    render() {
        return (
            <Container>

                <HeaderComponent
                    headerLeft={
                        (<Button style={[commonStyles.transparentBackgroundColor, commonStyles.elevation0]} onPress={() => this.props.navigation.goBack()}>
                            <Icon name="ios-arrow-back" style={commonStyles.headerIconColor} />
                        </Button>)}
                    headerBody={(<Title style={commonStyles.headerIconColor}>Credit History</Title>)}
                />



                <ScrollView style={styles.rootContainer} showsVerticalScrollIndicator={false}>

                    <View style={styles.viewContainer} >
                        <View style={styles.textViewContainer}>
                            <Text>Data and Compaign</Text>
                            <Text>Amount</Text>
                        </View>
                    </View>
                    <View style={styles.viewContainer} >
                        < View style={styles.textViewContainer}>
                            <Text style={styles.titleTextStyle}> Total Meals</Text>
                            <Text style={styles.titleTextStyle}>7</Text>
                        </View>
                        <View style={styles.textViewContainer}>
                            <View>
                                <Text>$ 50.00</Text>
                                <Text>20/10/2018</Text>
                            </View>

                            <Text>10 meals subscrition</Text>
                        </View>
                    </View>

                </ScrollView>
            </Container >
        )
    }
}


export default CreditHistoryContainer;