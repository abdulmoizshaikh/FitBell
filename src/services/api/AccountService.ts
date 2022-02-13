// Constants imports
import { End_Points } from '../../constants';
import { ApiCaller } from '../../services';

/**
 * Deletes user by userId
 * @param userId
 * @returns response
 */
async function deleteUserById(id: any) {
	const DELETE_USER_ENDPOINT = `${End_Points.ACCOUNT_BUSINESSES(id)}`;
	const response = await ApiCaller.Delete(DELETE_USER_ENDPOINT);
	return response;
}

/**
 * Updates Business
 * @param updatedBusiness
 * @returns response
 */
async function updateBusiness(updatedBusiness: any) {
	const UPDATE_BUSINESS_ENDPOINT = `${End_Points.ACCOUNT_BUSINESSES(updatedBusiness.id)}`;
	const response = await ApiCaller.Put(UPDATE_BUSINESS_ENDPOINT, updatedBusiness);
	return response;
}

const AccountService = {
	deleteUserById,
	updateBusiness,
};

export default AccountService;
