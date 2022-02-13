import React from "react";
import { TouchableOpacity, Image, ScrollView, AsyncStorage } from 'react-native';
import { Text, Container, View, Item, Input, Icon, Button, Title, DatePicker, Form, Label, List, ListItem, Content, Left, Right } from 'native-base';
import { DrawerActions } from 'react-navigation';
import { updateProfileFormValidatorsOnChange, updateProfileFormValidatorsOnBlur } from "./validator.js";
import ImagePicker from 'react-native-image-picker';
import { isValid, isMatch } from '../../../../common/utils/form-validator';
import Styles from './style.js';
const styles = Styles;

//packages
import commonStyles from '../../../../common/components/commonStyles';
import HeaderComponent from "../../../../common/components/header/header";
import DefaultUseImage from "../../../../common/assets/user-avatar.png";

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { accountOperations } from "../../duck";


class UpdateProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updateProfileData: {
                userName: this.props.user.name,
                email: this.props.user.email,
                // birthday: this.getDefaultBirthDate(),
                // newPassword: "",
                // confirmPassword: ""
            },
            avatarSource: null,
            errors: {
                userName: false,
                // newPassword: false,
                // confirmPassword: false

            },
            errorsMsgs: {
                userName: "",
                // newPassword: "",
                // confirmPassword: ""
            },
            userNameFieldStyle: {},
            // newPasswordFieldStyle: {},
            // confirmPasswordFieldStyle: {},

            editableMode: false,
            editableText: true,
            datePickerKey: new Date().getTime(),
            // showNewPassword: true,
            // showConfirmPassword: true

        }
        // this.inputs = {};
    }
    // watchID: ?number = null;

    

onChangeHandler = (value, name) => {
    // console.log("name , value", name, value)
    this.setState({
        updateProfileData: {
            ...this.state.updateProfileData,
            [name]: value
        }
    }, () => {
        this.handleFormValidationOnChange(name)
    });
}

handleFormValidationOnChange = (name) => {
    let data = updateProfileFormValidatorsOnChange(name, this.state);
    this.setState({
        errors: data.errors,
        errorsMsgs: {
            ...this.state.errorsMsgs,
            [name]: ""
        }
    })
}


onBlurHandler = (props) => {
    this.handleFormValidationOnBlur(props.name);
    this.setState({
        [props.fieldStyle]: {},
    })
}

handleFormValidationOnBlur = (name) => {
    let data = updateProfileFormValidatorsOnBlur(name, this.state);
    this.setState({
        errorsMsgs: data.errorsMsgs
    })
}

onFocusHandler = (props) => {
    this.setState({
        [props.fieldStyle]: styles.fieldStyleOnFocus
    })
}

// focusNextField = (id) => {
//     this.inputs[id]._root.focus();
// }

//handler for selecting image by image-picker
selectPhotoTapped = () => {
    const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
            skipBackup: true,
        },
    };

    ImagePicker.showImagePicker(options, (response) => {
        // console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled photo picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        } else {
            let source = { uri: response.uri };

            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };

            this.setState({
                avatarSource: source,
            });
        }
    });
}


editProfileTogglerHandler = () => {
    this.setState({
        editableMode: !this.state.editableMode,
        editableText: !this.state.editableText,
        datePickerKey: new Date().getTime()
    })
}



// toggleSwitch = (props) => {
//     this.setState({
//         ...this.state,
//         [props.name]: !this.state[props.name],
//     });
// }


setDateAndFocusNextField = (date, id) => {
    console.log("date in on change", date)
    this.setState({
        updateProfileData: {
            ...this.state.updateProfileData,
            birthday: date
        }
    });
}

getDefaultBirthDate = () => {
    let date = this.props.user.birthdate.substr(0, 10);
    let birthdate = new Date(date);
    // birthdate.setDate(birthdate.getDate() - 1);
    console.log(" getDefaultBirthDate birthdate", birthdate)
    return birthdate;
}

getMaximumDateForBirthday = () => {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 8);
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;
    // console.log("formattedDate", formattedDate)
    return formattedDate
}


onSaveHandler = async () => {
    // let passChecker;
    // passChecker = isMatch(this.state.updateProfileData.newPassword, this.state.updateProfileData.confirmPassword);
    // if (passChecker) {
    const user = {
        name: this.state.updateProfileData.userName,
        birthdate: this.state.updateProfileData.birthday,
        // password: this.state.updateProfileData.confirmPassword
    }
    console.log("user", user)
    // checking access_token in AsyncStorage if true then call /me API
    const token = await AsyncStorage.getItem("access_token")
    await this.props.actions.updateProfile({ user, token });
    this.props.navigation.navigate("CardsList");
    // }
    // else {
    //     return alert("pass must be same");
    // }
}





render() {
    // console.log("this.props.user", this.props.user);
    // console.log(this.props.user.birthdate.substr(0, 10), "this.props.user.birthdate.substr(0, 10)")
    // // let date = this.props.user.birthdate;
    // // console.log("date", date
    return (
        <Container>

            <HeaderComponent
                headerLeft={
                    this.state.editableMode ?
                        <Button style={[commonStyles.transparentBackgroundColor, commonStyles.elevation0]}
                            onPress={this.editProfileTogglerHandler}>
                            <Icon name="ios-arrow-back" style={commonStyles.headerIconColor} />
                        </Button> : <Button style={[commonStyles.transparentBackgroundColor, commonStyles.elevation0]}
                            onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                            <Icon name="menu" style={commonStyles.headerIconColor} />
                        </Button>
                }
                headerBody={(<Title style={commonStyles.headerIconColor}>{this.state.editableMode ? 'Edit Profile' : 'Profile'}</Title>)}
                headerRight={
                    this.state.editableMode ?
                        <Button style={[commonStyles.transparentBackgroundColor, commonStyles.elevation0]}
                            onPress={this.editProfileTogglerHandler}>
                            <Text primary>Done</Text>
                        </Button> :
                        <Button style={[commonStyles.transparentBackgroundColor, commonStyles.elevation0]}
                            onPress={this.editProfileTogglerHandler}>
                            <Text dark>Edit</Text>
                        </Button>
                }
            />



            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.rootContainer}>

                <View style={{ marginTop: 20 }}
                    onPress={this.selectPhotoTapped.bind(this)}
                    disabled={this.state.editableText}>

                    <View
                        style={[
                            styles.avatar,
                            styles.avatarContainer,
                            { marginBottom: 20 },
                        ]}
                    >
                        {this.state.avatarSource === null ? (
                            <Image source={DefaultUseImage} style={styles.avatar} />
                        ) : (
                                <Image style={styles.avatar} source={this.state.avatarSource} />
                            )}
                    </View>
                    <TouchableOpacity style={{
                        backgroundColor: 'rgba(149, 202, 49, 0.9)',
                        width: 50, height: 50,
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        position: 'absolute',
                        justifyContent: 'center',
                        bottom: 25,
                        borderRadius: 50
                    }}>
                        <Icon style={{ color: '#fff' }} name="camera" />
                    </TouchableOpacity>
                </View>

                {/* update profile form section */}
                <Form style={{ alignItems: 'flex-start', marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text info style={{ flex: 0.2 }}>Name</Text>
                        <Item style={{ flex: 0.8 }}>
                            <Input placeholder='User name'
                                onChangeText={(text) => this.onChangeHandler(text, "userName")}
                                value={this.state.updateProfileData.userName}
                                disabled={this.state.editableText}
                                style={[this.state.userNameFieldStyle]}
                                onFocus={this.onFocusHandler.bind(this, { fieldStyle: "userNameFieldStyle" })}
                                onBlur={this.onBlurHandler.bind(this,
                                    { name: 'userName', type: "userName", fieldStyle: "userNameFieldStyle" })}
                            />
                        </Item>
                    </View>

                    {
                        this.state.errorsMsgs.userName !== "" &&
                        <Text style={styles.errorText}>{this.state.errorsMsgs.userName}</Text>
                    }
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text info style={{ flex: 0.2 }}>Email</Text>
                        <Item style={{ flex: 0.8 }}>
                            <Input placeholder='Email Address'
                                value={this.props.user.email}
                                disabled={true}
                            />
                        </Item>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text info style={{ flex: 0.2 }}>d.b.o.</Text>
                        <Item style={{ flex: 0.8 }}>
                            <DatePicker
                                maximumDate={new Date(this.getMaximumDateForBirthday())}
                                locale={"en"}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                // defaultDate={this.getDefaultBirthDate()}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                key={this.state.datePickerKey}
                                onDateChange={(date) => this.setDateAndFocusNextField(date, "newPassword")}
                                disabled={this.state.editableText}
                            />
                        </Item>
                    </View>
                </Form>

                {/* {
                        this.state.editableMode &&
                        <View>
                            <View style={styles.btnsView}>
                                <Button success style={styles.btnStyle}
                                    disabled={!isValid(this.state.errors, this.state.updateProfileData)}
                                    onPress={this.onSaveHandler}
                                >
                                    <Text style={styles.btnText} >Save</Text>
                                </Button>
                            </View>
                        </View>
                    } */}
                {/* other profile settings section */}
                <Content style={{ marginTop: 20, width: '100%' }}>
                    <ListItem noIndent>
                        <Text info uppercase={true}>Other Information</Text>
                    </ListItem>
                    <ListItem noIndent first>
                        <Left>
                            <Text dark>E-mail</Text>
                        </Left>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem noIndent>
                        <Left>
                            <Text dark>Password</Text>
                        </Left>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem noIndent>
                        <Left>
                            <Text dark>Privacy Settings</Text>
                        </Left>
                        <Right>
                            <Icon name="ios-arrow-forward" />
                        </Right>
                    </ListItem>

                </Content>
            </ScrollView>

        </Container >
    )
}
}


const mapStateToProps = (state) => {
    return {
        user: state.account.user
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            updateProfile: accountOperations.updateProfile
        }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfileContainer);







