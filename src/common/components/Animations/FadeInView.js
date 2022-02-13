// FadeInView.js
import React, { Component } from 'react';
import {
  Animated,

} from 'react-native';
import { View } from 'native-base';
import styles from "./styles";


class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.fadeAnim = new Animated.Value(0);
  }

  componentDidMount() {
    this.animatedView()
  }
  animatedView() {
    this.fadeAnim.setValue(0)
    Animated.timing(this.fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true
    }).start();
  }

  render() {
    // const opacity = this.fadeAnim.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [0, 1]
    // })
    const translateY = this.fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [400, 1]
    })
    const transform = [{ translateY }];
    return (
      <View style={[styles.animateAbsoluteView,{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)'}]}>
          <Animated.View style={[styles.animateAbsoluteView, {transform}]}>
            {this.props.children}
        </Animated.View>
      </View>
    );
  }
}

module.exports = FadeInView;