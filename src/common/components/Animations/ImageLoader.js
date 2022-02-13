import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

import styles from "./styles";
export default class ImageLoader extends Component {
    state = {
        opacity: new Animated.Value(0),
        bgYPosition: new Animated.Value(-100),
    }

    onLoad = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 2500,
            easing: true,
            useNativeDriver: true
        }).start();
    }
    componentWillMount() {
        console.log("----------------- ender imnage koader")
        if (this.props.verticalPositionAnimation) {
            Animated.timing(this.state.bgYPosition, this.props.verticalPositionAnimation).start()
        }
    }

    render() {
        // const imageHeightStyle = this.props.verticalPositionAnimation ? {} : { height: backgroundImageHeight }
        return (
            //   <Animated.Image
            //     onLoad={this.onLoad}
            //     {...this.props}
            //     style={[
            //       {
            //         opacity: this.state.opacity,
            //         transform: [
            //           {
            //             scale: this.state.opacity.interpolate({
            //               inputRange: [0, 1],
            //               outputRange: [0.85, 1],
            //             })
            //           },
            //         ],
            //       },
            //       this.props.style,
            //     ]}
            //   />
            <View style={[styles.backgroundImage, styles.screenBackground]}>
                <Animated.Image
                    resizeMode='cover'
                    style={[styles.coverImage, { transform: [{ translateY: this.state.bgYPosition }] }]}
                    source={this.props.source}
                />
            </View>


        );
    }
}
