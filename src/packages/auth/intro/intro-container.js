import React from "react";
import { Image, AsyncStorage, TouchableOpacity, Animated, ImageBackground, Dimensions } from 'react-native';
import { Text, Container, View, Button, Spinner, Thumbnail } from 'native-base'
const { width, height } = Dimensions.get('window')

// import ImageSlider from 'react-native-image-slider';
import Swiper from 'react-native-swiper'
import FacebookButton from '../../../common/components/FacebookButon/index'
// import Config from 'react-native-config';

import AppLogo from '../../../common/assets/fitbowlLogo.png';
import bg1 from '../../../common/assets/bg3.png';
import bg2 from '../../../common/assets/bg2.jpg';
import bg3 from '../../../common/assets/bg1.jpg';

// redux
import { accountOperations } from '../../account/duck';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { snackbarOperations } from '../../snackbar/duck';


import styles from "./style";



class IntroContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Container style={styles.rootContainer}>
                <Swiper
                    width={width}
                    height={height}
                    dotColor='#aaa'
                    activeDotColor='#fff'
                    showsButtons={false}
                    paginationStyle={{ bottom: 230 }}
                >
                    <ImageBackground source={bg1} style={styles.imageBackgroundWrapper}>
                        <Text light style={styles.imageBackgroundText}>Order a Fitbowl as long as you need and only pay for the meals you order.</Text>
                    </ImageBackground>
                    <ImageBackground source={bg2} style={styles.imageBackgroundWrapper}>
                        <Text light style={styles.imageBackgroundText}>Order a Fitbowl as long as you need and only pay for the meals you order.</Text>
                    </ImageBackground>
                </Swiper>

                <View style={styles.introFooterSection}>
                    <View style={styles.authButtonsWrapper}>
                        <Button primary block
                            style={styles.loginButton}
                            onPress={() => this.props.navigation.navigate('Login')}
                        >
                            {this.props.isFetching ? <Spinner color="#fff" /> : <Text style={{fontSize: 17, fontWeight: '600'}} uppercase={false} >Log In</Text>}
                        </Button>

                        <FacebookButton navigation={this.props.navigation} iconName="facebook" iconColor="#fff" iconType="FontAwesome" textColor="#fff" borderColor="#fff" />
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
                        <Text style={{ color: '#fff' }}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Container>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        isFetching: state.account.isFetching,
        restrictionsInUser: state.account.user.restrictions,
        allergiesInUser: state.account.user.allergies,
        fitnessGoalInUser: state.account.user.fitness_goal
    }
}




function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            getProfile: accountOperations.getProfile,
            showSnackbar: snackbarOperations.showSnackbar,
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroContainer);

