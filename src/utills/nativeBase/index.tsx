import React from 'react';
import {Toast, Box, KeyboardAvoidingView} from 'native-base';
import {View, Text, Platform} from 'react-native';
import styles from '../../theme/styles';
import {Fonts, Metrix, themeColors} from '../../theme';
import {ToasterWrapper, CloseButton} from './style';
// import {SuccessIcon, WarningIcon} from '../../assets/svg';
import Icon from 'react-native-vector-icons/FontAwesome';

export function showToast(message: string, status = 'success') {
  /**
   * Closes toaster
   */
  const closeToast = () => Toast.closeAll();

  Toast.show({
    placement: 'bottom',
    textAlign: 'center',
    duration: 3000,
    render: () => (
      <Box
        shadow={5}
        bg={themeColors.white}
        mt={3}
        px={4}
        py={4}
        rounded={'md'}
        mb={5}>
        <ToasterWrapper>
          {/* {status === 'success' ? (
            <SuccessIcon
              height={Metrix.VerticalSize(16)}
              width={Metrix.HorizontalSize(16)}
            />
          ) : (
            <WarningIcon
              height={Metrix.VerticalSize(16)}
              width={Metrix.HorizontalSize(16)}
            />
          )} */}
          <Text
            style={styles.styledText}
            marginLeft={7}
            marginRight={7}
            size={14}
            align={'center'}
            color={themeColors.dark}
            font={Fonts['Inter-Medium']}>
            {message}
          </Text>
          <CloseButton onPress={() => closeToast()}>
            <View>
              <Icon name={'close'} size={10} color={themeColors.white} />
            </View>
          </CloseButton>
        </ToasterWrapper>
      </Box>
    ),
  });
}

export default {showToast};
