import AsyncStorageAdapter from '../../utills/asyncStorageAdapter/';

const { getData, clearAll } = new AsyncStorageAdapter('@HisaabApp');

export const getToken = async () => {
	const token = await getData('Token');
	return token;
};

export const getID = async () => {
	const id = await getData('ID');
	return id;
};

export const getLanguage = async () => {
	const language = await getData('Language');
	return language;
};

export const clearAllData = async () => {
	const isClear = await clearAll();
	return isClear;
};

export default {
	getToken,
	getID,
	clearAllData,
	getLanguage,
};
