import React from 'react';
import {
  View,
  ScrollView,
  AsyncStorage,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Text,
  Container,
  Item,
  Input,
  Button,
  H2,
  Icon,
  Spinner,
  Label,
} from 'native-base';
// import {StackActions, NavigationService} from '@react-navigation/native';
import {changePassFromValidators} from './validator';
import {isValid} from '../../../common/utils/form-validator';
import Styles from './style.js';
const styles = Styles;

// packages
import commonStyles from '../../../common/components/commonStyles';
import HeaderComponent from '../../../common/components/header/header';

// redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {authOperations} from '../duck';
import {accountOperations} from '../../account/duck';
import {NavigationService} from '../../../services';

class ChangePassContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      errors: {
        password: false,
        confirmPassword: false,
      },
      showPassword: true,
      showConfirmPassword: true,
    };
    this.inputs = {};
  }

  onChangeHandler = (value, name) => {
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.handleFormValidation(name);
      },
    );
  };

  handleFormValidation = name => {
    this.setState({
      errors: changePassFromValidators(name, this.state),
    });
  };

  focusNextField = id => {
    this.inputs[id]._root.focus();
  };

  // show pass toggle
  toggleSwitch = props => {
    this.setState({
      ...this.state,
      [props.name]: !this.state[props.name],
    });
  };

  onSubmitHandler = async () => {
    const token = await AsyncStorage.getItem('access_token');
    if (token) {
      const data = {
        new_password: this.state.confirmPassword,
      };
      await this.props.actions.resetPassword(data, token);
      this.getProfileHandler(token);
    } else {
      const data = {
        new_password: this.state.confirmPassword,
        token: this.props.verificationCode,
      };
      await this.props.actions.resetPassword(data, token);
      this.props.navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationService.navigate({routeName: 'Login'})],
        }),
      );
    }
  };

  getProfileHandler = async token => {
    if (token) {
      await this.props.actions.getProfile(token);
      const restrictionsInUser = [...this.props.restrictionsInUser],
        allergiesInUser = [...this.props.allergiesInUser],
        fitnessGoalInUser = {...this.props.fitnessGoalInUser};
      // console.log(`restrictionsInUser =${restrictionsInUser} \n allergiesInUser =${allergiesInUser} \n fitnessGoalInUser=${fitnessGoalInUser}`)
      if (restrictionsInUser.length === 0 || allergiesInUser.length === 0) {
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [
              NavigationService.navigate({routeName: 'AllergiesRestriction'}),
            ],
          }),
        );
      } else if (
        Object.keys(fitnessGoalInUser).length === 0 ||
        fitnessGoalInUser === ''
      ) {
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [NavigationService.navigate({routeName: 'FitnessGoals'})],
          }),
        );
      } else {
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [NavigationService.navigate({routeName: 'CardsList'})],
          }),
        );
      }
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

        <View style={styles.content}>
          {/* content wrapper */}
          <View style={styles.contentWrapper}>
            <Text style={styles.headingText}>Reset password</Text>
            <Item style={styles.item} stackedLabel>
              <Label style={styles.label}>New Password</Label>
              <Input
                placeholder="Enter your new password"
                secureTextEntry={this.state.showPassword}
                onChangeText={text => {
                  this.onChangeHandler(text, 'password');
                }}
                ref={inputRef => (this.inputs['password'] = inputRef)}
                onSubmitEditing={() => this.focusNextField('confirmPassword')}
              />
              {/* <Text style={styles.toggleText} onPress={() => this.toggleSwitch({ name: "showPassword" })}>{(this.state.showPassword) ? ("Show") : ("Hide")}</Text> */}
            </Item>

            <Item style={styles.item} stackedLabel>
              <Label style={styles.label}>Re-type New Password</Label>
              <Input
                placeholder="Enter your new password"
                secureTextEntry={this.state.showConfirmPassword}
                onChangeText={text => {
                  this.onChangeHandler(text, 'confirmPassword');
                }}
                ref={inputRef => (this.inputs['confirmPassword'] = inputRef)}
              />
            </Item>
            <Button
              primary
              block
              style={styles.submitBtn}
              disabled={
                !isValid(this.state.errors, this.state) ||
                !(this.state.password === this.state.confirmPassword)
              }
              onPress={this.onSubmitHandler}>
              {this.props.isFetching ? (
                <Spinner color="#fff" />
              ) : (
                <Text uppercase={false}>Reset</Text>
              )}
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.auth.isFetching,
    verificationCode: state.auth.verificationCode,
    // getprofile work
    restrictionsInUser: state.account.user.restrictions,
    allergiesInUser: state.account.user.allergies,
    fitnessGoalInUser: state.account.user.fitness_goal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        resetPassword: authOperations.resetPassword,
        getProfile: accountOperations.getProfile,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangePassContainer);
