import { ENV } from '../config/env';

const { BASE_URL } = ENV;
const TRANSACTIONS = (id) => `${BASE_URL}/ledgers/${id}/contacts`;
const TRANSACTION = (id) => `${BASE_URL}/transactions/${id}`;
const BUSINESSES = (id) => `${BASE_URL}/users/${id}/businesses`;
const ACCOUNT_BUSINESSES = (id) => `${BASE_URL}/businesses/${id}`;
const BUSINESSES_TYPES = () => `${BASE_URL}/business-types`;
const CUSTOMER_TRANSACTIONS = (id) => `${BASE_URL}/contacts/${id}/transactions`;
const CONTACT_BY_ID = (id) => `${BASE_URL}/contacts/${id}`;
// const TRANSACTION_REPORT = (id, startDate, endDate) =>
// 	`${BASE_URL}/contacts/${id}/transaction-report?startDate=${startDate}&endDate=${endDate}`;
// const ACCOUNT_SUMMARY = (id, startDate, endDate) =>
// 	`${BASE_URL}/ledgers/${id}/summary-report?startDate=${startDate}&endDate=${endDate}`;
const TRANSACTION_REPORT = (id) => `${BASE_URL}/contacts/${id}/transaction-report`;
const ACCOUNT_SUMMARY = (id) => `${BASE_URL}/ledgers/${id}/summary-report`;
const GET_ALL_REMINDERS = (id) => `${BASE_URL}/ledgers/${id}/reminders`;
const REMINDERS = (id) => `${BASE_URL}/contacts/${id}/reminders`;
const REMINDER = (id) => `${BASE_URL}/reminders/${id}`;
const SMS = (id) => `${BASE_URL}/contacts/${id}/sms`;
const LOGIN = () => `${BASE_URL}/auth/users/login`;
const USERS = (id) => `${BASE_URL}/users/${id}`;
const PASSWORD = () => `${BASE_URL}/auth/users/forgot-password`;
const SIGN_UP = () => `${BASE_URL}/auth/users/sign-up`;

export default {
	TRANSACTIONS,
	BUSINESSES,
	ACCOUNT_BUSINESSES,
	BUSINESSES_TYPES,
	CUSTOMER_TRANSACTIONS,
	CONTACT_BY_ID,
	TRANSACTION,
	TRANSACTION_REPORT,
	ACCOUNT_SUMMARY,
	GET_ALL_REMINDERS,
	REMINDERS,
	REMINDER,
	SMS,
	LOGIN,
	USERS,
	PASSWORD,
	SIGN_UP,
};
