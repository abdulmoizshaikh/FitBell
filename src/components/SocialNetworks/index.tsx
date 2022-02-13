import React from 'react';
import {View, Text, Image} from 'react-native';
import ImageAssets from '../../assets/images';
import styles from '../../screens/Profile/styles';

export type Props = {};
const SocialNetworks: React.FC<Props> = () => {
  return (
    <View>
      <Text style={[styles.heading2, {fontSize: 15}]}>
        Change Your Social Networks
      </Text>

      <View style={styles.networksView}>
        <View style={styles.iconView}>
          <Image style={styles.icon} source={ImageAssets.YoutubeIcon} />
        </View>
        <View style={styles.iconView}>
          <Image style={styles.icon} source={ImageAssets.InstaIcon} />
        </View>
        <View style={styles.iconView}>
          <Image style={styles.icon} source={ImageAssets.YoutubeIcon} />
        </View>
        <View style={styles.iconView}>
          <Image style={styles.icon} source={ImageAssets.TikTokIcon} />
        </View>
        <View style={styles.iconView}>
          <Image style={styles.icon} source={ImageAssets.MerchIcon} />
        </View>
      </View>
    </View>
  );
};

export default SocialNetworks;
