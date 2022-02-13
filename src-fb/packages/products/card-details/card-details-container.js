import React from "react";
import { View, ScrollView, FlatList, AsyncStorage, TouchableWithoutFeedback } from 'react-native';
import { Container, Row, Grid, Button, Text, Spinner, Header, Left, Body, Right, Title, Item, Textarea, Icon } from 'native-base';

// Icons
import HeartIcon from 'react-native-vector-icons/FontAwesome';
import ShareIcon from 'react-native-vector-icons/FontAwesome';
import MenuIcon from 'react-native-vector-icons/Entypo';

// Packages
// import ProductCard from '../../../common/components/horizontal-card/horizontal-card-component';
import CardInfoComponent from '../../../common/components/card-info/card-info-component';
import IngredientsList from './ingredientsList';

import commonStyles from '../../../common/components/commonStyles';
import HeaderComponent from "../../../common/components/header/header";

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { productOperations } from "../duck";
import { orderOperations } from "../../orders/duck";

import Styles from './style';
const styles = Styles;



class CardDetailsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.getExploreProductDetailsHandler();
        this.state = {
            isCollapse: true
        }
    }



    getExploreProductDetailsHandler = async () => {
        const { params } = this.props.navigation.state;
        const token = await AsyncStorage.getItem("access_token");
        await this.props.actions.getExploreProductDetails(params._id, token)
    }



    AddToFavouriteHandler = async (productDetails) => {
        try {
            const token = await AsyncStorage.getItem("access_token");
            // this api will automatically handler toggle for either add to favourite or remove from favourite by backend
            await this.props.actions.addFavouriteProducts({ product: productDetails }, token);

        } catch (error) {
            console.log("Error", error)
        }
    }



    addProductHandler = async (product) => {
        // console.log("product", product);
        await this.props.actions.setOrderedProductDetails(product);
        this.props.navigation.navigate("DeliveryType")
    }

    componentWillUnmount = () => {
        this.props.actions.onUnMountComponent({ name: "CardDetailsContainer" });
    }

    onCollapse = () => {
        this.setState({
            isCollapse: !this.state.isCollapse
        })
    }

    render() {
        const exploreProductDetails = { ...this.props.exploreProductDetails };
        const ingredients = [...exploreProductDetails.ingredients];
        // console.log("exploreProductDetails", exploreProductDetails)

        return (
            <Container>

                <HeaderComponent
                    isBordered
                    headerLeft={
                        <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.goBack()}                            >
                            <Icon name="ios-arrow-back" style={[commonStyles.headerIconColor, commonStyles.padding10]} />
                        </TouchableWithoutFeedback>
                    }
                    headerRight={
                        <View style={styles.headerRightView}>
                            {/* {
                                exploreProductDetails.is_favourite ?
                                    (this.props.isFetching ? <Spinner style={styles.heartSpinnerStyle} /> :
                                        <HeartIcon name="heart"
                                            style={[{ color: '#e21a20' },
                                            styles.headerHeartIconStyle]}
                                            size={25}
                                            onPress={() => this.AddToFavouriteHandler(exploreProductDetails)} />) :
                                    (this.props.isFetching ? <Spinner style={styles.heartSpinnerStyle} /> :
                                        <HeartIcon name="heart-o"
                                            style={styles.headerHeartIconStyle}
                                            size={25}
                                            onPress={() => this.AddToFavouriteHandler(exploreProductDetails)} />)
                            } */}
                            <MenuIcon style={styles.headerShareIconStyle} size={25} name="dots-three-horizontal" />
                        </View>}
                />



                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 10 }}>

                    {/* Top Card info component*/}
                    {(this.props.isFetching && Object.keys(exploreProductDetails).length <= 1) ? <Spinner /> :
                        <View style={styles.IndividualSection}>
                            <CardInfoComponent
                                style={styles}
                                name={exploreProductDetails.name}
                                image={{ uri: exploreProductDetails.image }}
                                calories={`${(4 * exploreProductDetails.carbs + 9 * exploreProductDetails.fat + 4 * exploreProductDetails.protein).toString().substring(0, 3)}  Cal`}
                                price={`$${exploreProductDetails.price}`}

                            />
                        </View>
                    }
                    <View style={{ borderBottomWidth: 1, marginHorizontal: 10, borderBottomColor: 'rgba(196,202,204, 0.5)' }} />

                    {exploreProductDetails && exploreProductDetails.ingredients.length ?
                        <IngredientsList
                            ingredients={exploreProductDetails.ingredients}
                            isCollapse={this.state.isCollapse}
                            collapse={() => this.onCollapse()}
                        /> : null
                    }


                    {/* ingredients section */}
                    {/* <View style={styles.IndividualSection}>
                        {this.props.isFetching && ingredients.length === 0 ? <Spinner /> :
                            <FlatList
                                numColumns={3}
                                horizontal={false}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                                data={[...ingredients]}
                                renderItem={({ item }) => <ProductCard
                                    style={styles}
                                    name={item.ingredient.name}
                                    image={{ uri: item.ingredient.image }}
                                />}
                            />
                        }
                    </View> */}
                    <View style={{ borderBottomWidth: 1, marginHorizontal: 10, borderBottomColor: 'rgba(196,202,204, 0.5)' }} />
                    <View style={{ marginVertical: 10, marginHorizontal: 10 }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Note</Text>
                        <Item style={{ marginLeft: 0, marginVertical: 20, borderBottomWidth: 0, backgroundColor: 'rgba(196,202,204, 0.2)', borderRadius: 5 }}>
                            <Textarea rowSpan={3} placeholder="Write a note for this meal (exp : no egg ...)" />
                        </Item>
                    </View>

                </ScrollView>

                <Button primary full
                    onPress={() => this.addProductHandler(exploreProductDetails)}
                >
                    <Text>Add</Text>
                </Button>
            </Container>
        )
    }
}






const mapStateToProps = (state) => {
    return {
        isFetching: state.products.isFetching,
        favouriteProducts: state.products.favouriteProducts,
        exploreProductDetails: state.products.exploreProductDetails,
        exploreProducts: state.products.exploreProducts
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getExploreProductDetails: productOperations.getExploreProductDetails,
            onUnMountComponent: productOperations.onUnMountComponent,
            addFavouriteProducts: productOperations.addFavouriteProducts,
            getFavouriteProducts: productOperations.getFavouriteProducts,
            // getExploreProducts: productOperations.getExploreProducts,
            setOrderedProductDetails: orderOperations.setOrderedProductDetails

        }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CardDetailsContainer);





