import { validateEmail, validatePassword, validateUsername, isExist } from '../../../../common/utils/form-validator';



function updateProfileFormValidatorsOnChange(type, data) {
    // let errors = { ...data.errors };
    switch (type) {
        case "userName":
            data.errors[type] = !validateUsername(data.updateProfileData.userName);
            break;
        // case "email":
        //     errors[type] = !validateEmail(data.updateProfileData.email);
        //     break;
        // case "birthday":
        //     errors[type] = !isExist(data.updateProfileData.birthday);
        //     break;
        // case "newPassword":
        //     data.errors[type] = !validatePassword(data.updateProfileData.newPassword);
        //     break;
        // case "confirmPassword":
        //     data.errors[type] = !validatePassword(data.updateProfileData.confirmPassword);
        //     break;
        default:
    }
    return data;

}


const updateProfileFormValidatorsOnBlur = (type, data) => {
    switch (type) {

        case "userName":
            data.errors[type] = !validateUsername(data.updateProfileData.userName);

            if (data.updateProfileData.userName !== "" && data.errors[type]) {
                data.errorsMsgs.userName = "Username should not more than 20 letters"
            }
            else if (data.updateProfileData.userName == "") {
                data.errorsMsgs.userName = "User name is required"
            }
            else {
                data.errorsMsgs.userName = ""
            }
            break;

        // case "email":
        //     data.errors[type] = !validateEmail(data.updateProfileData.email);

        //     if (data.updateProfileData.email !== "" && data.errors[type]) {
        //         data.errorsMsgs.email = "Invalid Email Address"
        //     }
        //     else if (data.updateProfileData.email == "") {
        //         data.errorsMsgs.email = "Email is required"
        //     }
        //     else {
        //         data.errorsMsgs.email = ""
        //     }
        //     break;


        // case "birthday":
        //     data.errors[type] = !isExist(data.updateProfileData.birthday);
        //     break;


        // case "newPassword":
        //     data.errors[type] = !validatePassword(data.updateProfileData.newPassword);

        //     if (data.updateProfileData.newPassword !== "" && data.errors[type]) {
        //         data.errorsMsgs.newPassword = "Invalid newPassword"
        //     }
        //     else if (data.updateProfileData.newPassword == "") {
        //         data.errorsMsgs.newPassword = "New password is required"
        //     }
        //     else {
        //         data.errorsMsgs.newPassword = ""
        //     }
        //     break;

        // case "confirmPassword":
        //     data.errors[type] = !validatePassword(data.updateProfileData.confirmPassword);

        //     if (data.updateProfileData.confirmPassword !== "" && data.errors[type]) {
        //         data.errorsMsgs.confirmPassword = "Invalid confirmPassword"
        //     }
        //     else if (data.updateProfileData.confirmPassword == "") {
        //         data.errorsMsgs.confirmPassword = "Confirm password is required"
        //     }
        //     else {
        //         data.errorsMsgs.confirmPassword = ""
        //     }
        //     break;

        default:
    }
    return data;

}



export {
    updateProfileFormValidatorsOnChange,
    updateProfileFormValidatorsOnBlur
}