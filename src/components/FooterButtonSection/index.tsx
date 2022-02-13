import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppButton, SocialNetworks} from '..';
import {Metrix} from '../../theme';

export type Props = {
  onPress?: Function;
  btnTitle: string;
  isHeading?: boolean;
  headingText?: string;
  SocialNetwork?: boolean;
};

const FooterButtonSection: React.FC<Props> = props => {
  return (
    <View
      style={[
        GlobalStyles.MTAuto,
        GlobalStyles.MB(20),
        styles.footerTxtBtnWrapper,
      ]}>
      {props?.isHeading && (
        <Text style={GlobalStyles.heading2}>{props?.headingText}</Text>
      )}

      {props?.SocialNetwork && <SocialNetworks />}

      <AppButton
        title={props?.btnTitle}
        onPress={props?.onPress}
        style={styles.appButton}
      />
    </View>
  );
};

export default FooterButtonSection;

export const styles = StyleSheet.create({
  footerTxtBtnWrapper: {
    width: '100%',
    marginBottom: Metrix.VerticalSize(20),
  },
  appButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
