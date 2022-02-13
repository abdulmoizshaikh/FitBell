import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Container, Textarea, Item, Input, Left, Right, Button, Icon } from 'native-base';

import Styles from './style.js';
const styles = Styles;

// packages
import commonStyles from '../../common/components/commonStyles';
import HeaderComponent from "../../common/components/header/header";




class ChatContainer extends Component {
    render() {
        return (
            <Container >

                <HeaderComponent
                    headerLeft={
                        <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.goBack()}                            >
                            <Icon name="ios-arrow-back" style={[commonStyles.headerIconColor, commonStyles.padding10]} />
                        </TouchableWithoutFeedback>}
                    headerBody={
                        <View style={styles.headerTitleStyle} >
                            <Icon name="circle" type="Entypo" />
                            <Text style={styles.headerTitleText}>Jack Terry (trainer)</Text>
                        </View>
                    }
                />



                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollViewContainer}>

                    <View style={styles.chatMessageView}>
                        <Right><Text style={styles.rightMessageText}>Hi Jack ! </Text></Right>
                    </View>

                    <View style={styles.chatMessageView}>
                        <Left><Text style={styles.leftMessageText}> Hello Dear </Text></Left>
                    </View>

                    <View style={styles.chatMessageView}>
                        <Right><Text style={styles.rightMessageText}>Where are you from ? </Text></Right>
                    </View>

                    <View style={styles.chatMessageView}>
                        <Left><Text style={styles.leftMessageText}> I rehashed it.</Text></Left>
                    </View>

                    <View style={styles.chatMessageView}>
                        <Right><Text style={styles.rightMessageText}>Hmm, For today?</Text></Right>
                    </View>

                    <View style={styles.chatMessageView}>
                        <Left><Text style={styles.leftMessageText}> Yup</Text></Left>
                    </View>

                    <View style={styles.chatMessageView}>
                        <Right><Text style={styles.rightMessageText}>k </Text></Right>
                    </View>

                    <View style={styles.chatMessageView}>
                        <Left><Text style={styles.leftMessageText}> Then m sending it to </Text></Left>
                    </View>

                    <View style={styles.chatMessageView}>
                        <Left><Text style={styles.leftMessageText}> I'll ask him to put it. </Text></Left>
                    </View>


                    <View style={styles.chatMessageView}>
                        <Right><Text style={styles.rightMessageText}>Ok cool </Text></Right>
                    </View>


                    <View style={styles.chatMessageView}>
                        <Right><Text style={styles.rightMessageText}>This is cool </Text></Right>
                    </View>


                </ScrollView>


                <Item regular style={styles.inputItem}>
                    <Input name="message"
                        placeholder=' 😜  Message' />
                </Item>
            </Container >

        );
    }

}



export default ChatContainer;