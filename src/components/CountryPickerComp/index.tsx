import React from 'react';
import styles from './styles';
import CountryPicker from 'react-native-country-picker-modal';
import {themeColors} from '../../theme';

const CountryCodeList = ['CA', 'US', 'GB', 'RU', 'ES'];

export type Props = {
  countryCode: string;
  toggleDropdown: Function;
  handleSelectCountryCode: Function;
};

const CountryPickerComp: React.FC<Props> = props => {
  const {
    setValidatePhone,
    setCountryCode,
    setPhoneNumber,
    countryCode,
    phoneNumber,
    validatePhone,
    isTitle = true,
    fieldName,
  } = props;

  const onChangeCountryCode = ({cca2}: any) => {
    setValidatePhone({isValid: true, error: ''});
    setCountryCode(cca2);
  };

  // const onChangePhoneNo = (number: string) => {
  //   setValidatePhone({isValid: true, error: ''});
  //   setPhoneNumber(number);
  // };

  return (
    <CountryPicker
      containerButtonStyle={styles.containerButtonStyle}
      theme={{
        onBackgroundTextColor: themeColors.white,
        backgroundColor: themeColors.primary,
        fontSize: 15,
        fontFamily: 'Sansation-Bold',
      }}
      countryCode={countryCode}
      countryCodes={CountryCodeList}
      onSelect={onChangeCountryCode}
      withFilter
      withCallingCode
      withCallingCodeButton
      withEmoji
      // withFlag={false}
      // withFlagButton={false}
      filterProps={
        {
          // placeholder: t('ENTER_COUNTRY_NAME'),
        }
      }
    />
  );
};

export default CountryPickerComp;
