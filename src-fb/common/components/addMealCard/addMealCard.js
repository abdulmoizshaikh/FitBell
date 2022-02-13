import React, { Component } from 'react';
import { TouchableWithoutFeedback } from "react-native";
import { Text, View, Card, CardItem } from "native-base";

// packages
import MealAddIcon from 'react-native-vector-icons/SimpleLineIcons';

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { orderOperations } from "../../../packages/orders/duck";

// stylesheet
import Styles from './style.js';
const styles = Styles;





class AddMealCard extends Component {

    addMeadHandler = async (date) => {
        await this.props.actions.setOrderDate(date)
        this.props.navigation.navigate("Menu",
            { addMealIcon: true, _date: date })
    }

    render() {
        // console.log("this.props", this.props)
        return (
            <TouchableWithoutFeedback
                onPress={() => this.addMeadHandler(this.props._date)}
            >
                <Card style={[styles.cardStyle]} transparent>
                    <CardItem cardBody>
                        <View style={[styles.cardImage, styles.mealAddIconView]} >
                            <MealAddIcon name="plus" style={styles.addMealIcon} />
                        </View>
                    </CardItem>
                    <View style={styles.footerView}>
                        <Text style={styles.addMealfooterTitle}>Add meal here</Text>
                    </View>
                </Card>
            </TouchableWithoutFeedback>

        );
    }
}




const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            setOrderDate: orderOperations.setOrderDate,
        }, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(AddMealCard);
