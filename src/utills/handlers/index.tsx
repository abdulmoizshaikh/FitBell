import moment from 'moment';
import React from 'react';
// import {LeneHainSvg, DeneHainSvg, ClearHaiSvg} from '../../assets/svg';
import {Variable} from '../../constants';
import {useTranslation} from 'react-i18next';
import {Share} from 'react-native';

export const renderHeaderTitle = (transactionType: string) => {
  switch (transactionType) {
    case Variable.GIVEN:
      return 'MAINE_LENE_HAIN';

    case Variable.TAKEN:
      return 'MAINE_DENE_HAIN';

    case Variable.SETTLED:
      return 'HISAAB_CLEAR_HAI';

    default:
      return '';
  }
};

// export const renderTransactionHeaderIcon = (transactionType: string) => {
//   switch (transactionType) {
//     case Variable.TAKEN:
//       return <DeneHainSvg />;

//     case Variable.GIVEN:
//       return <LeneHainSvg />;

//     case Variable.SETTLED:
//       return <ClearHaiSvg />;

//     default:
//       return null;
//   }
// };

export const numberWithCommas = x =>
  x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// export const renderTransactionBtnIcon = (transactionType: string) => {
//   switch (transactionType) {
//     case Variable.TRANSACTION_TYPES.DEBIT:
//       return <DeneHainSvg />;

//     case Variable.TRANSACTION_TYPES.CREDIT:
//       return <LeneHainSvg />;

//     default:
//       return null;
//   }
// };

export const addDays = numberOfDays => moment().add(numberOfDays, 'days');

/**
 * Returns language type based on it's name
 */
export const languageType = type => {
  const language = {
    [`${Variable.LANGUAGE_TYPES.ENGLISH}`]: 'EN',
    [`${Variable.LANGUAGE_TYPES.ROMAN_URDU}`]: 'RU',
    [`${Variable.LANGUAGE_TYPES.URDU}`]: 'UR',
    [`${Variable.LANGUAGE_TYPES.ARABIC}`]: 'AR',
    default: type,
  };
  return language[type] || language[type];
};

/**
 * Returns language name based on it's type
 */
export const languageName = type => {
  const language = {
    EN: Variable.LANGUAGE_TYPES.ENGLISH,
    RU: Variable.LANGUAGE_TYPES.ROMAN_URDU,
    UR: Variable.LANGUAGE_TYPES.URDU,
    AR: Variable.LANGUAGE_TYPES.ARABIC,
    default: type,
  };
  return language[type] || language[type];
};

export const getTextReplaced = (string, variable) =>
  string.replace('FIELD', variable);

export const onShare = async shareOption => {
  try {
    const result = await Share.share(shareOption);
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};
