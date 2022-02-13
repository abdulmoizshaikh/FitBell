import React, { Component } from "react";
import { TouchableWithoutFeedback, Dimensions } from "react-native";
import { Container, View, Icon } from "native-base";
import Video from 'react-native-video'

import styles from './styles';

class VideoTutorials extends Component {
    state = {
        repeat: false,
        rate: 1,
        volume: 1,
        muted: true,
        resizeMode: 'contain', // video's mode: none, cover, stretch, contain
        duration: 0.0, // video's duration set on event onLoad
        currentTime: 0.0, // set on event onProgress
        paused: true, // check if video is pausing or not
        rateText: '1.0', // rate value in component Picker
        pausedText: 'Play', // view to user: 'Play' - when video is pausing, 'Pause' - when video is playing
        hideControls: false, // hide control button when video is playing and show it when user clicks on video
    }


    // load video event
    onLoad = (data) => {
        this.setState({ duration: data.duration });
    };

    // video is playing
    onProgress = (data) => {
        this.setState({ currentTime: data.currentTime });
    };

    // video ends
    onEnd = () => {
        this.setState({ paused: true, pausedText: 'Play' })
        this.video.seek(0);
    };

    renderVideo() {

        let { height, width } = Dimensions.get('window');
        return (
            <TouchableWithoutFeedback onPress={() => this.setState({ paused: !this.state.paused })} style={{}}>
                <Video
                    source={{ uri: 'https://res.cloudinary.com/dwamrecpf/video/upload/v1553002383/FOOD_-_CINEMATIC.mp4' }}
                    style={{ width: width - 40, height: 211, maxWidth: width }}
                    ref={(ref: Video) => { this.video = ref }}
                    muted={this.state.muted}
                    repeat={this.state.repeat}
                    resizeMode="stretch"
                    volume={this.state.volume}
                    rate={this.state.rate}
                    paused={this.state.paused}
                    onLoad={this.onLoad}
                    onProgress={this.onProgress}
                    onEnd={this.onEnd}
                // controls={true}

                />
            </TouchableWithoutFeedback>
        )
    }

    render() {
        return (
            // <Container style={styles.containerStyle}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {this.state.paused ? <TouchableWithoutFeedback onPress={() => this.setState({ paused: !this.state.paused })}>
                    <Icon style={{ position: 'absolute', zIndex: 999, color: 'rgba(255, 255, 255, 0.5)', fontSize: 80 }} type="FontAwesome" name="play-circle-o"></Icon>
                </TouchableWithoutFeedback> : null}

                <View>
                    {this.renderVideo()}
                </View>
            </View>
            // </Container>
        );
    }
}




export default VideoTutorials;



