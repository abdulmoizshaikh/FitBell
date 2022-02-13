import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Left, Right, Text, ListItem, Icon } from 'native-base';


const IngredientsList = (props) => {
    const styles = { ...props.style };

    return (

            <View style={{marginHorizontal: 10}}>
                <ListItem noBorder noIndent style={{ paddingLeft: 0 }}>
                    <Left noIndent>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Ingredient</Text>
                    </Left>
                    <Right>
                        <TouchableOpacity style={{height: 30, width: 50, alignItems:"flex-end"}} onPress={props.collapse}>
                            <Icon style={{ fontSize: 30 }} name={props.isCollapse ? "ios-arrow-up" : "ios-arrow-down"} />
                        </TouchableOpacity>
                    </Right>
                </ListItem>
                {props.isCollapse && props.ingredients.length ? props.ingredients.map((item, index) => {
                    return (
                        <ListItem noBorder noIndent style={{ paddingLeft: 0 }} key={index}>
                            <Left style={{flex: 0.6}}>
                                <Text dark>{item.ingredient.name}</Text>
                            </Left>
                            <Right style={{flex: 0.4}}>
                                <Text>{item.amount + ' ' + item.unit}</Text>
                            </Right>
                        </ListItem>
                    )
                }): null}
            </View>
    );
}

export default IngredientsList;