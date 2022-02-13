import React, { Component } from 'react';
import { View, FlatList, AsyncStorage } from 'react-native';
import { Container, Spinner, Icon, Button, Title } from 'native-base';
import { DrawerActions } from 'react-navigation';


// Icons
import SearchIcon from 'react-native-vector-icons/FontAwesome';

// Packages
import VerticalCardComponent from '../../../common/components/vertical-card/vertical-card-component';

import commonStyles from '../../../common/components/commonStyles';
import HeaderComponent from "../../../common/components/header/header";

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { productOperations } from "../duck";

import Styles from './style.js';
const styles = Styles;


class ExploreContainer extends Component {
    constructor(props) {
        super(props);
        this.getExploreProductsHandler();
    }



    getExploreProductsHandler = async () => {
        const token = await AsyncStorage.getItem("access_token")
        await this.props.actions.getExploreProducts(token)
    }

    onPressVerticalCardHandler = (item) => {
        this.props.navigation.navigate('CardsOrders', { _id: item._id });
    }



    render() {
        const exploreProductsData = [...this.props.exploreProducts.data];

        return (
            <Container>

                <HeaderComponent
                    headerLeft={
                        <Button style={[commonStyles.transparentBackgroundColor, commonStyles.elevation0]} onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                            <Icon name="menu" style={commonStyles.headerIconColor} />
                        </Button>}
                    headerBody={(<Title style={commonStyles.headerIconColor}>Explore</Title>)}
                    headerRight={
                        <Button style={[commonStyles.transparentBackgroundColor, commonStyles.elevation0]} >
                            <SearchIcon size={25} name="search" style={commonStyles.padding10} />
                        </Button>}
                />





                <View style={styles.cardsViewContainer}>
                    {this.props.isFetching && exploreProductsData.length === 0 ? <Spinner /> :
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                            data={[...exploreProductsData]}
                            renderItem={({ item }) => {
                                return (
                                    <VerticalCardComponent
                                        style={styles}
                                        item={item}
                                        image={{ uri: item.image }}
                                        name={item.name}
                                        description={item.description.substring(0, 40)}
                                        isFavourite={item.is_favourite}
                                        calories={`${(4 * item.carbs + 9 * item.fat + 4 * item.protein).toString().substring(0, 3)}  Cal`}
                                        footer={true}
                                        onPress={this.onPressVerticalCardHandler}
                                    // onPress={() => this.props.navigation.navigate('CardsOrders', { _id: item._id })}
                                    />)
                            }}
                        />}
                </View>
            </Container>

        );
    }

}






const mapStateToProps = (state) => {
    return {
        isFetching: state.products.isFetching,
        exploreProducts: state.products.exploreProducts

    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getExploreProducts: productOperations.getExploreProducts,
        }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);


