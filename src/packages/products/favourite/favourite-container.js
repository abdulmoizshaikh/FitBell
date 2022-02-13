import React from "react";
import { FlatList, AsyncStorage } from 'react-native';
import { DrawerActions } from 'react-navigation';
import { Container, Icon, View, Spinner, Button, Title } from 'native-base';

// Packages
import VerticalCardComponent from '../../../common/components/vertical-card/vertical-card-component';

import commonStyles from '../../../common/components/commonStyles';
import HeaderComponent from "../../../common/components/header/header";

import Styles from './style';
const styles = Styles;


// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { productOperations } from "../duck";


class FavouriteContainer extends React.Component {
    constructor(props) {
        super(props);
        this.getFavouriteProductsHandler();
    }



    getFavouriteProductsHandler = async () => {
        const token = await AsyncStorage.getItem("access_token");
        await this.props.actions.getFavouriteProducts(token)
    }



    render() {
        const favouriteProducts = [...this.props.favouriteProducts.data];

        return (
            <Container>

                <HeaderComponent
                    headerLeft={
                        (<Button style={[commonStyles.transparentBackgroundColor, commonStyles.elevation0]} onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                            <Icon name="menu" style={commonStyles.headerIconColor} />
                        </Button>)}
                    headerBody={(<Title style={commonStyles.headerIconColor}>Favourite</Title>)}
                />


                <View style={styles.cardsViewContainer}>
                    {favouriteProducts.length === 0 && this.props.isFetching ? <Spinner /> :
                        <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            data={[...favouriteProducts]}
                            renderItem={({ item }) => {
                                return (<VerticalCardComponent
                                    style={styles}
                                    image={{ uri: item.image }}
                                    name={item.name}
                                    description={item.description.substring(0, 40)}
                                    isFavourite={item.is_favourite}
                                    calories={`${(4 * item.carbs + 9 * item.fat + 4 * item.protein).toString().substring(0, 3)}  Cal`}
                                    footer={true}
                                    onPress={() => this.props.navigation.navigate('CardsOrders', { _id: item._id })}
                                />)
                            }}
                        />}
                </View>
            </Container >
        )
    }
}




const mapStateToProps = (state) => {
    return {
        isFetching: state.products.isFetching,
        favouriteProducts: state.products.favouriteProducts
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getFavouriteProducts: productOperations.getFavouriteProducts,
        }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FavouriteContainer);




