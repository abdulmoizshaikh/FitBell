import React from "react";
import { FlatList, AsyncStorage, ScrollView } from "react-native";
import { DrawerActions } from 'react-navigation';
import { Container, Icon, View, Button, Text, Left, Right, Spinner, Title } from 'native-base';


//packages
import ButtonComponent from "../../../../common/components/button/button-component";

import commonStyles from '../../../../common/components/commonStyles';
import HeaderComponent from "../../../../common/components/header/header";


// redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { accountOperations } from "../../duck";

import Styles from './style';
const styles = Styles;



class DietPreferencesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.getMyIngredientsHandler();
        this.getMyRestrictionsHandler();
    }


    getMyIngredientsHandler = async () => {
        const token = await AsyncStorage.getItem("access_token")
        // console.log("access token get ingredients  ", token);
        await this.props.actions.getMyAllergies(token)
    }


    getMyRestrictionsHandler = async () => {
        const token = await AsyncStorage.getItem("access_token")
        // console.log("access token  getRestrictionsHandler  ", token);
        await this.props.actions.getMyRestrictions(token)
    }


    render() {
        const myAllergies = [...this.props.myAllergies];
        const myRestrictions = [...this.props.myRestrictions];

        return (
            <Container>

                <HeaderComponent
                    bodyFlex3={true}
                    headerLeft={
                        <Button style={[commonStyles.transparentBackgroundColor, commonStyles.elevation0]} onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                            <Icon name="menu" style={commonStyles.headerIconColor} />
                        </Button>}
                    headerBody={(<Title style={commonStyles.headerIconColor}>Diet Prefrences + Goals</Title>)}
                />



                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.rootContainer} style={{ width: '100%' }}>

                    {/* First Row */}
                    <View style={styles.IndividualSection}>

                        <View style={{ flexDirection: 'row' }}>
                            <Left style={{ flex: 3 }}>
                                <Text style={styles.titleStyle}>What are you algeric to?</Text>
                            </Left>
                            <Right style={{ flex: 1 }}>
                                <Text onPress={() => { this.props.navigation.navigate("AllergiesRestriction") }} style={styles.editColor}>Edit</Text>
                            </Right>
                        </View>

                        <View style={styles.btnRowStyle}>
                            {
                                this.props.isFetching ? <Spinner /> :
                                    <FlatList
                                        columnWrapperStyle={styles.colWrapStyle}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={(item, index) => index.toString()}
                                        numColumns={3}
                                        horizontal={false}
                                        data={[...myAllergies]}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <ButtonComponent
                                                    itemName={item.name}
                                                    key={item._id}
                                                    danger={true}
                                                    style={styles.btnCompStyle}
                                                    onPress={() => { return null }}
                                                />
                                            )
                                        }}
                                    />
                            }

                        </View>
                    </View>



                    {/* Second Row */}
                    <View style={styles.IndividualSection}>
                        <View style={{ flexDirection: 'row' }}>
                            <Left style={{ flex: 3 }}>
                                <Text style={styles.titleStyle}>Any dietary Restricitons ?</Text>
                            </Left>
                            <Right style={{ flex: 1 }}>
                                <Text onPress={() => { this.props.navigation.navigate("AllergiesRestriction") }} style={styles.editColor}>Edit</Text>
                            </Right>
                        </View>

                        <View style={styles.btnRowStyle}>
                            {
                                this.props.isFetching ? <Spinner /> :
                                    <FlatList
                                        columnWrapperStyle={styles.colWrapStyle}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={(item, index) => index.toString()}
                                        numColumns={3}
                                        horizontal={false}
                                        data={[...myRestrictions]}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <ButtonComponent
                                                    itemName={item.name}
                                                    key={item._id}
                                                    danger={true}
                                                    style={styles.btnCompStyle}
                                                    onPress={() => { return null }}

                                                />
                                            )
                                        }}
                                    />
                            }
                        </View>
                    </View>



                    {/* third Row */}
                    <View style={styles.IndividualSection}>
                        <View style={{ flexDirection: 'row' }}>
                            <Left style={{ flex: 3 }}>
                                <Text style={styles.titleStyle}>What are your fitness goals?</Text>
                            </Left>
                            <Right style={{ flex: 1 }}>
                                <Text onPress={() => { this.props.navigation.navigate("AllergiesRestriction") }} style={styles.editColor}>Edit</Text>
                            </Right>
                        </View>

                        <View style={styles.btnRowStyle}>
                            <Button style={styles.greenBtnStyle} success>
                                <Text>Keto</Text>
                            </Button>
                        </View>
                    </View>

                </ScrollView>

            </Container >
        )
    }
}





const mapStateToProps = (state) => {
    return {
        isFetching: state.account.isFetching,
        myAllergies: state.account.myAllergies,
        myRestrictions: state.account.myRestrictions

    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            // ALLERGIES
            getMyAllergies: accountOperations.getMyAllergies,
            // RESTRICTIONS
            getMyRestrictions: accountOperations.getMyRestrictions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DietPreferencesContainer);
