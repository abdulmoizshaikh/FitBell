import React, { Component } from 'react';
import { ListView, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Text, Input, Button, View, Item } from 'native-base';

import Styles from './style.js';
const styles = Styles;

// packages
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


class OtherRestricitonsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            restrictions: '',
            searchedRestrictions: [],
            myOtherRestrictions: [],
        }
    }


    onChangeRestrictionsHandler = (value, name) => {
        const restrictions = [...this.props.restrictions.data];
        // console.log("restrictions", restrictions);
        // Auto complete feature
        var searchedRestrictions = restrictions.filter(function (item) {
            return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
        });

        this.setState({
            restrictions: value,
            searchedRestrictions: searchedRestrictions
        }, () => {
            if (this.state.restrictions == "")
                this.setState({ searchedRestrictions: [] })
            this.handleFormValidation(name)
        });
    }


    handleFormValidation = (name) => {
        this.setState({
            errors: OtherAllergiesRestrictionsFromValidators(name, this.state)
        })
    }



    renderRestrictionsList = (item) => {
        return (
            <TouchableWithoutFeedback
                onPress={this.onSelectRestrictions.bind(this, item)}>
                <View style={styles.listItemStyle}>
                    <Text>{item.name}</Text>
                </View>
            </TouchableWithoutFeedback >
        );
    };



    onSelectRestrictions = (item) => {
        const myOtherRestrictions = [...this.state.myOtherRestrictions]
        var myOtherRestrictionsId = myOtherRestrictions.map(ele => ele._id);
        if (myOtherRestrictionsId.includes(item._id)) {
        } else {
            myOtherRestrictions.push({ name: item.name, _id: item._id })
            // console.log('myOtherRestrictions', myOtherRestrictions)
        }
        this.setState({
            myOtherRestrictions: myOtherRestrictions
        })
    }


    toggleRestrictionsOnPress = (item) => {
        const myOtherRestrictions = [...this.state.myOtherRestrictions];
        var myOtherRestrictionsId = myOtherRestrictions.map(ele => ele._id);
        if (myOtherRestrictionsId.includes(item._id)) {
            const ind = myOtherRestrictionsId.indexOf(item._id);
            myOtherRestrictions.splice(ind, 1);
        } else {
            myOtherRestrictions.push({ name: item.name, _id: item._id })
        }
        this.setState({
            myOtherRestrictions: myOtherRestrictions
        })
    }


    otherRestrictionsSubmithandler = () => {
        const myOtherRestrictions = [...this.state.myOtherRestrictions];
        // console.log("myOtherRestrictions", myOtherRestrictions);
        this.props.actions.updateMyOtherRestrictions(myOtherRestrictions);
        this.props.navigation.goBack();
    }


    render() {
        return (
            <View>
                <ExclimationIcon name="exclamation-circle" size={25} color="#900" style={styles.exclimationIcon} />

                <View>
                    <Text style={styles.titleStyle}>Any dietary Restrictions ?{'\n'}</Text>
                    <Text>Note any item you want to restrict.</Text>
                </View>
                <View style={styles.ListViewStyle}>
                  
                    <Item>
                        <Input style={[styles.TextArea, {paddingLeft: 0}]}
                            placeholder='Input the Items'
                            onChangeText={(text) => { this.onChangeRestrictionsHandler(text, "restrictions") }}
                            value={this.state.restrictions}
                        />
                    </Item>


                    <ListView
                        dataSource={ds.cloneWithRows(this.state.searchedRestrictions)}
                        renderRow={this.renderRestrictionsList}
                        enableEmptySections={true}
                    />

                    <FlatList
                        columnWrapperStyle={styles.colWrapStyle}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={3}
                        horizontal={false}
                        data={[...this.state.myOtherRestrictions]}                  //check this
                        renderItem={({ item, index }) => {
                            return (
                                <ButtonComponent
                                    itemName={item.name}
                                    item={item}
                                    bordered
                                    style={styles.btnCompStyle}
                                    onPress={this.toggleRestrictionsOnPress}
                                />
                            )
                        }}
                    />
                </View>

                <Button primary block
                    style={{borderRadius: 5, elevation: 0}}
                    onPress={this.otherRestrictionsSubmithandler}
                    disabled={this.state.myOtherRestrictions.length == 0}
                >
                    <Text>Add</Text>
                </Button>
            </View >

        );
    }
}




const mapStateToProps = (state) => {
    return {
        restrictions: state.account.restrictions,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            updateMyOtherRestrictions: accountOperations.updateMyOtherRestrictions
        }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(OtherRestricitonsComponent);

