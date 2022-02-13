import React, { Component } from 'react';
import { ListView, FlatList, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Text, Input, Button, View, Item } from 'native-base';

import Styles from './style.js';
const styles = Styles;

// Packages
import ButtonComponent from "../../../../../common/components/button/button-component";
import { OtherAllergiesRestrictionsFromValidators } from '../validator';
import ExclimationIcon from 'react-native-vector-icons/FontAwesome5';

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { accountOperations } from '../../../duck/index.js';

var ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
});



class OtherAllergiesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allergies: '',
            searchedAllergies: [],
            myOtherAllergies: [],
        }
    }


    onChangeAllergiesHandler = (value, name) => {
        const allergies = [...this.props.allergies.ingredients];
        // Auto complete feature
        var searchedAllergies = allergies.filter((item) => {
            return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
        });

        this.setState({
            allergies: value,
            searchedAllergies: searchedAllergies
        },
            () => {
                if (this.state.allergies == "")
                    this.setState({ searchedAllergies: [] })
                this.handleFormValidation(name)
            });
    }


    handleFormValidation = (name) => {
        this.setState({
            errors: OtherAllergiesRestrictionsFromValidators(name, this.state)
        })
    }


    renderAllergiesList = (item) => {
        return (
            <TouchableWithoutFeedback
                onPress={this.onSelectAllergies.bind(this, item)}>
                <View style={styles.listItemStyle}>
                    <Text>{item.name}</Text>
                </View>
            </TouchableWithoutFeedback >
        );
    };


    onSelectAllergies = (item) => {
        const myOtherAllergies = [...this.state.myOtherAllergies]
        var myOtherAllergiesId = myOtherAllergies.map(ele => ele._id);
        if (myOtherAllergiesId.includes(item._id)) {
        } else {
            myOtherAllergies.push({ name: item.name, _id: item._id })
            console.log('myOtherAllergies', myOtherAllergies)
        }
        this.setState({
            myOtherAllergies: myOtherAllergies
        })
    }



    toggleAllergiesOnPress = (item) => {
        const myOtherAllergies = [...this.state.myOtherAllergies];
        var myOtherAllergiesId = myOtherAllergies.map(ele => ele._id);
        if (myOtherAllergiesId.includes(item._id)) {
            // var new2 = myOtherAllergies.filter(ele => ele._id !== item._id)
            // console.log("new2", new2);
            const ind = myOtherAllergiesId.indexOf(item._id);
            myOtherAllergies.splice(ind, 1);
            // console.log('myOtherAllergies', myOtherAllergies)
        } else {
            myOtherAllergies.push({ name: item.name, _id: item._id })
            // console.log('myOtherAllergies', myOtherAllergies)
        }
        this.setState({
            myOtherAllergies: myOtherAllergies
        })
    }



    otherAllergiesSubmithandler = () => {
        const myOtherAllergies = [...this.state.myOtherAllergies];
        // console.log("myOtherAllergies", myOtherAllergies);
        this.props.actions.updateMyOtherAllergies(myOtherAllergies);
        this.props.navigation.goBack();
    }



    render() {
        return (
            <View>

                <ExclimationIcon name="exclamation-circle" size={25} color="#900" style={styles.exclimationIcon} />

                <View>
                    <Text style={styles.titleStyle}>What are you allergic to ?{'\n'}</Text>
                    <Text>Note the item you can't or don't want to eat.</Text>
                </View>

                <View style={styles.ListViewStyle}>
                    <Item>
                        <Input style={[styles.TextArea, {paddingLeft: 0}]}
                            placeholder='Input the Items'
                            onChangeText={(text) => { this.onChangeAllergiesHandler(text, "allergies") }}
                            value={this.state.allergies}
                        />
                    </Item>

                    <ListView
                        dataSource={ds.cloneWithRows(this.state.searchedAllergies)}
                        renderRow={this.renderAllergiesList}
                        enableEmptySections={true}
                    />

                    <FlatList
                        columnWrapperStyle={styles.colWrapStyle}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={3}
                        horizontal={false}
                        data={[...this.state.myOtherAllergies]}                  //check this
                        renderItem={({ item, index }) => {
                            return (
                                <ButtonComponent
                                    itemName={item.name}
                                    item={item}
                                    bordered
                                    style={styles.btnCompStyle}
                                    onPress={this.toggleAllergiesOnPress}
                                />
                            )
                        }}
                    />
                </View>

                <Button primary block
                    style={{borderRadius: 5, elevation: 0}}
                    onPress={this.otherAllergiesSubmithandler}
                    disabled={this.state.myOtherAllergies.length == 0}
                    
                >
                    <Text>Add</Text>
                </Button>
            </View >

        );
    }
}




const mapStateToProps = (state) => {
    return {
        allergies: state.account.allergies,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            updateMyOtherAllergies: accountOperations.updateMyOtherAllergies,
        }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(OtherAllergiesComponent);
