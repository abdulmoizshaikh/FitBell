import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

import {LanguageSelector, AppButton, AppHeader} from '../../../components';
// import {getRoles} from 'source/redux/actions/utils';
import ImageAssets from '../../../assets/images';
import Swiper from 'react-native-swiper';
import {themeColors} from '../../../theme';
import {Variable} from '../../../constants';
import {NavigationService} from '../../../services';

export type Props = {};

const ChooseLoginOrSignup: React.FC<Props> = props => {
  const {USER} = Variable;
  const [loginType, setLoginType] = useState('');
  // lang
  const [showDropdown, setShowDropdown] = useState(false);
  const [userLang, setUserLang] = useState('');

  // useEffect(() => {
  //   dispatch(getRoles());
  // }, []);

  type SilderContentProps = {
    source: any;
    heading: String;
    description: String;
  };

  const SilderContent = (item: SilderContentProps) => (
    <TouchableOpacity style={styles.slide} activeOpacity={1}>
      <Image source={item?.source} style={styles.image} />
      <Text style={styles.heading1}>{item?.heading}</Text>
      <Text style={GlobalStyles.heading2}>{item?.description}</Text>
    </TouchableOpacity>
  );

  const handleSubmit = (accountType: string) => {
    // if (accountType === USER.ACCOUNT_TYPES.ARTIST) {
    NavigationService.navigate('ArtistFanCreateAccountS1');
  };

  const handleSelectLang = (lang: string) => {
    setUserLang(lang);
    setShowDropdown(false);
  };

  const hideDropdown = () => {
    if (showDropdown) {
      setShowDropdown(false);
    }
  };

  return (
    <View style={styles.container} onTouchEnd={hideDropdown}>
      <LanguageSelector
        showDropdown={showDropdown}
        toggleDropdown={() => setShowDropdown(!showDropdown)}
        handleSelectLang={handleSelectLang}
      />

      <AppHeader {...props} />

      <Swiper
        style={styles.wrapper}
        dotColor={themeColors.grey}
        activeDotColor={themeColors.dots}>
        {entries.length > 0 &&
          entries.map(item => <SilderContent key={item?.id} {...item} />)}
      </Swiper>

      <View style={styles.bottomBtnsWrapper}>
        <AppButton
          style={[styles.btnStyle, styles.createAccountBtn]}
          title="AS AN ARTIST"
          onPress={() => handleSubmit(USER.ACCOUNT_TYPES.ARTIST)}
        />
        <AppButton
          title="AS A FAN"
          style={[styles.btnStyle, styles.signinBtn]}
          onPress={() => handleSubmit(USER.ACCOUNT_TYPES.FAN)}
        />
      </View>
    </View>
  );
};

const entries = [
  {
    id: 1,
    source: ImageAssets.GirlListeningMusic,
    heading: 'PLEASE CREATE AN\nACCOUNT OR SIGNIN',
    description:
      'Please choose if you would like to\nsignin or sigup as a Artist or a Fan',
  },
  {
    id: 2,
    source: ImageAssets.BoyMusic,
    heading: 'CREATE ACCOUNT',
    description:
      'Please choose if you would like to\nsignin or sigup as a Artist or a Fan',
  },
];

export default ChooseLoginOrSignup;
