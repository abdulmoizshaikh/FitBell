import {Variable} from '../../constants';

const passwordRegex = /^(?=.*d)(?=.*[A-Z])(?=.*[a-z])([^s]){8,16}$/;
const emailRegex = /^w+([.-]?w+)*@{1}w+([.-]?w+)*(.[a-zA-Z]{2,3})+$/;
const fullNameRegex =
  /^([a-zA-Z]+|[a-zA-Z]+s{1}[a-zA-Z]{1,}|[a-zA-Z]+s{1}[a-zA-Z]{3,}s{1}[a-zA-Z]{1,})$/;
const phoneNoRegex = /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im;
const cityRegex = /^([^0-9]*)$/;
const newFullNameRegex = /^[ws]{4,20}$/;
const pollTitleRegex = /^[ws]{3,50}$/;

export function validatePassword(password: string) {
  return passwordRegex.test(password);
}
export function validatePhoneNumber(phone: string) {
  return phoneNoRegex.test(phone);
}
export function validateEmail(email: string) {
  return emailRegex.test(email);
}

export function validateAlpha(name: string) {
  return fullNameRegex.test(name);
}

export const validateResponse = (response: any) => {
  // console.log('response.status', response.status);
  return new Promise((res, rej) => {
    let statusArr = [200, 201];
    try {
      if (response) {
        if (statusArr.includes(response.status)) {
          res({success: true});
        } else {
          res({success: false});
        }
      } else {
        res({success: false});
      }
    } catch (err) {
      console.warn(err);
      rej({success: false});
    }
  });
};

export const fetchUserContactsfromPhonebook = async (
  useContactPermission: any,
  {title, message}: any,
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const pbContacts = await useContactPermission({title, message});
      const parsedPBContacts = await parsePbContacts(pbContacts);
      const filteredContacts = await filterGarbageContactsOfPB(
        parsedPBContacts,
      );
      resolve(filteredContacts);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * @param pbContacts
 * @returns
 *
 * @description
 * contacts parser here that will filter out garbage phone numbers contacts
 * and format contacts with ideal prefix for PK
 */
export const filterGarbageContactsOfPB = (pbContacts: []) => {
  return new Promise((resolve, reject) => {
    try {
      const response: any = [];
      pbContacts.forEach((item: any) => {
        let number = item?.mobile;
        if (Boolean(number)) {
          number = number.replace(/\s/g, '');
          if (validatePhoneNumber(number)) {
            number[0] === '0' ? (number = number.replace('0', '+92')) : '';
            item.mobile = number;
            response.push(item);
          }
        }
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const parsePbContacts = (_filteredContacts: any) => {
  return new Promise((resolve, reject) => {
    try {
      const response = _filteredContacts.map((item: any) => {
        const {recordID, displayName} = item;
        const mobile = item?.phoneNumbers[0]?.number;
        return {
          id: recordID,
          name: displayName,
          mobile: mobile,
          type: Variable.USER_TYPES.CUSTOMER,
          isExist: false,
        };
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const normalizeAndParsedDBAndPBContacts = (
  phonebookContacts: any = [],
  databaseContacts: any = [],
) => {
  let filteredPhonebookContacts: any = [...phonebookContacts];
  for (let i = 0; i < databaseContacts?.length; i++) {
    const contactExistIndex = filteredPhonebookContacts.findIndex(
      (item: any) => item.mobile === databaseContacts[i]?.mobile,
    );
    if (contactExistIndex > -1) {
      filteredPhonebookContacts.splice(contactExistIndex, 1);
    }
  }
  const concat = [...filteredPhonebookContacts, ...databaseContacts];
  return concat;
};

export default {
  validateResponse,
  validateAlpha,
  validateEmail,
  validatePassword,
  validatePhoneNumber,
};
