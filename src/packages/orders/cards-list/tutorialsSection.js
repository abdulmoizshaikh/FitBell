import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, Container, View, Icon} from 'native-base';

import ImageSlider from 'react-native-image-slider';
import VideoTutorials from '../../../common/components/Tutorials/VideoTutorialComponent';

import Styles from '../../auth/intro/style';
const styles = Styles;

import StyleCloseBtn from './style';

class TutorialsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlideIndex: 1,
    };
  }

  onSlideChange = index => {
    this.setState({
      currentSlideIndex: index,
    });
  };

  render() {
    const images = ['bg1', 'bg2', 'bg3'];
    const {currentSlideIndex} = this.state;
    return (
      <Container style={[{marginTop: 10, height: 293}]}>
        <View style={[styles.backgroundImage]}>
          <TouchableOpacity
            style={StyleCloseBtn.tutorilasCloseBtnWrapper}
            onPress={() => this.props.onClose()}>
            <Icon style={{color: '#7ed321', fontSize: 20}} name="close" />
          </TouchableOpacity>
          {/* <ImageSlider
                        style={[styles.coverImage, { backgroundColor: 'transparent' }]}
                        // loopBothSides
                        // autoPlayWithInterval={3000}
                        onPositionChanged={this.onSlideChange}
                        images={images}
                    /> */}
        </View>

        <View style={{borderBottomWidth: 1, borderBottomColor: '#c7c7cc'}}>
          {
            {
              0: (
                <View style={{alignItems: 'center'}}>
                  <Text dark>Discover good meals that fits your goal!</Text>
                </View>
              ),
              1: (
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 10,
                    marginBottom: 20,
                  }}>
                  <VideoTutorials />
                  <Text dark style={{fontSize: 24, fontWeight: 'bold'}}>
                    {' '}
                    Quick Tutorials{' '}
                  </Text>
                  <Text info style={[]}>
                    {' '}
                    Get started and learn about fitbowl.{' '}
                  </Text>
                </View>
              ),
              2: (
                <View style={{alignItems: 'center'}}>
                  <Text dark>
                    Meals made fresh daily and delivered to you on site.
                  </Text>
                </View>
              ),
            }[currentSlideIndex]
          }
        </View>
      </Container>
    );
  }
}

export default TutorialsSection;
