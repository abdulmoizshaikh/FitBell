import React from 'react';
import {
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Text,
  Container,
  View,
  Item,
  Input,
  Button,
  Spinner,
  Icon,
  H1,
  Label,
  Form,
} from 'native-base';
import {StackActions, NavigationActions} from 'react-navigation';
import styles from '../styles/inputFormStyle.js';

// packages
import {
  loginFromValidatorsOnChange,
  loginFromValidatorsOnBlur,
} from './validator';
import {isValid} from '../../../common/utils/form-validator';

import commonStyles from '../../../common/components/commonStyles';
import HeaderComponent from '../../../common/components/header/header';
import FacebookButton from '../../../common/components/FacebookButon';

// redux
import {bindActionCreators} from 'redux';
import {authOperations} from '../duck';
import {connect} from 'react-redux';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        email: '',
        password: '',
      },
      errors: {
        email: false,
        password: false,
      },
      errorsMsgs: {
        email: '',
        password: '',
      },
      showPassword: true,
      emailFieldStyle: {},
      passwordFieldStyle: {},
    };
    this.inputs = {};
  }

  onChangeHandler = (value, name) => {
    this.setState(
      {
        credentials: {
          ...this.state.credentials,
          [name]: value,
        },
      },
      () => {
        this.handleFormValidationOnChange(name);
      },
    );
  };

  handleFormValidationOnChange = name => {
    let data = loginFromValidatorsOnChange(name, this.state);
    this.setState({
      errors: data.errors,
      errorsMsgs: {
        ...this.state.errorsMsgs,
        [name]: '',
      },
    });
  };

  onBlurHandler = props => {
    let data = {...this.state};
    this.handleFormValidationOnBlur(props.name, data);
    this.setState({
      [props.fieldStyle]: {},
    });
  };

  handleFormValidationOnBlur = (name, state) => {
    let data = loginFromValidatorsOnBlur(name, state);
    this.setState({
      errorsMsgs: data.errorsMsgs,
    });
  };

  onFocusHandler = props => {
    this.setState({
      [props.fieldStyle]: styles.fieldStyleOnFocus,
    });
  };

  focusNextField = id => {
    this.inputs[id]._root.focus();
  };

  // show pass toggle
  toggleSwitch = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  onSubmitHandler = async () => {
    const user = {...this.state.credentials};
    await this.props.actions.login(user);
    this.getProfileHandler();
  };

  getProfileHandler = async () => {
    const token = await AsyncStorage.getItem('access_token');
    if (token) {
      // const restrictionsInUser = [...this.props.restrictionsInUser], allergiesInUser = [...this.props.allergiesInUser], fitnessGoalInUser = { ...this.props.fitnessGoalInUser };

      this.props.navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: 'CardsList'})],
        }),
      );
      // console.log(`restrictionsInUser =${restrictionsInUser} \n allergiesInUser =${allergiesInUser} \n fitnessGoalInUser=${fitnessGoalInUser}`)
      // if (restrictionsInUser.length === 0 || allergiesInUser.length === 0) {
      //     this.props.navigation.dispatch(StackActions.reset({
      //         index: 0,
      //         actions: [
      //             NavigationActions.navigate({ routeName: "AllergiesRestriction" })
      //         ]
      //     }))
      // } else if (Object.keys(fitnessGoalInUser).length === 0 || fitnessGoalInUser === "") {
      //     this.props.navigation.dispatch(StackActions.reset({
      //         index: 0,
      //         actions: [
      //             NavigationActions.navigate({ routeName: "FitnessGoals" })
      //         ]
      //     }))
      // } else {
      //     this.props.navigation.dispatch(StackActions.reset({
      //         index: 0,
      //         actions: [
      //             NavigationActions.navigate({ routeName: "CardsList" })
      //         ]
      //     }))
      // }
    }
  };

  render() {
    return (
      <Container>
        <HeaderComponent
          headerLeft={
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.goBack()}>
              <Icon
                name="ios-arrow-back"
                style={[commonStyles.headerIconColor, commonStyles.padding10]}
              />
            </TouchableWithoutFeedback>
          }
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}>
          {/* title wrapper */}
          <View style={styles.titleWrapper}>
            <Text style={styles.headingText}>{`Welcome back`}</Text>
            <Text info>Sign in to continue</Text>
          </View>

          {/* form wrapper */}
          <Form style={styles.formWrapper}>
            <Item
              error={this.state.errorsMsgs.email !== ''}
              stackedLabel
              style={styles.item}>
              <Label style={styles.label}>Email</Label>
              <Input
                name="email"
                autoCapitalize="none"
                placeholder="Enter your email"
                value={this.state.credentials.email}
                onChangeText={text => this.onChangeHandler(text, 'email')}
                ref={inputRef => (this.inputs['email'] = inputRef)}
                onSubmitEditing={() => this.focusNextField('password')}
                autoFocus
                style={[
                  this.state.emailFieldStyle,
                  styles.inputTag,
                  {paddingLeft: 0},
                ]}
                onFocus={this.onFocusHandler.bind(this, {
                  fieldStyle: 'emailFieldStyle',
                })}
                onBlur={this.onBlurHandler.bind(this, {
                  name: 'email',
                  type: 'email',
                  fieldStyle: 'emailFieldStyle',
                })}
              />
            </Item>
            {this.state.errorsMsgs.email !== '' && (
              <Text style={styles.errorText}>
                {this.state.errorsMsgs.email}
              </Text>
            )}
            <Item
              error={this.state.errorsMsgs.password !== ''}
              stackedLabel
              style={[styles.item]}>
              <Label style={[styles.label]}>Password</Label>
              <Input
                name="password"
                secureTextEntry={this.state.showPassword}
                placeholder="Enter your password"
                value={this.state.credentials.password}
                onChangeText={text => this.onChangeHandler(text, 'password')}
                ref={inputRef => (this.inputs['password'] = inputRef)}
                // onfocus
                style={[
                  this.state.passwordFieldStyle,
                  styles.inputTag,
                  {paddingLeft: 0},
                ]}
                onFocus={this.onFocusHandler.bind(this, {
                  fieldStyle: 'passwordFieldStyle',
                })}
                onBlur={this.onBlurHandler.bind(this, {
                  name: 'password',
                  type: 'password',
                  fieldStyle: 'passwordFieldStyle',
                })}
              />
              {/* <Text style={styles.toggleText} onPress={this.toggleSwitch}>{(this.state.showPassword) ? ("Show") : ("Hide")}</Text> */}
            </Item>
            {this.state.errorsMsgs.password !== '' && (
              <Text style={styles.errorText}>
                {this.state.errorsMsgs.password}
              </Text>
            )}

            <Text
              style={styles.forgotPassText}
              onPress={() =>
                this.props.navigation.navigate('ForgotPass', {translateX: true})
              }>
              Forgot Password
            </Text>

            <Button
              primary
              full
              style={styles.authButton}
              disabled={!isValid(this.state.errors, this.state.credentials)}
              onPress={this.onSubmitHandler}>
              {this.props.isFetching ? (
                <Spinner color="#fff" />
              ) : (
                <Text
                  uppercase={false}
                  style={{fontSize: 17, fontWeight: '600'}}>
                  Sign In
                </Text>
              )}
            </Button>
          </Form>

          {/* button wrapper */}

          <View style={styles.fbBtnAndTextWrapper}>
            <View style={styles.hrlineView}>
              <View style={styles.hairline} />
              <Text info style={styles.loginButtonBelowText1}>
                OR CONNECT WITH
              </Text>
              <View style={styles.hairline} />
            </View>
            <View style={styles.fbBtnWrapper}>
              <FacebookButton
                iconName="facebook-with-circle"
                iconColor="#4267b2"
                iconType="Entypo"
                textColor="#000"
                borderColor="#A2A2A2"
                navigation={this.props.navigation}
              />
            </View>

            {/* footer Wrapper */}
            <View style={styles.footerWrapper}>
              <Text info style={styles.footerText}>
                Don't have an account yet?
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Signup')}
                style={styles.footerTouchableText}>
                <Text style={styles.fontWeightBold}> Join now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.auth.isFetching,
    // check user data in account
    restrictionsInUser: state.account.user.restrictions,
    allergiesInUser: state.account.user.allergies,
    fitnessGoalInUser: state.account.user.fitness_goal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        login: authOperations.login,
      },
      dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
