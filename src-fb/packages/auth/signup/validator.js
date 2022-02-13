import { validateEmail, validatePassword, validateUsername, validateMobileNumber } from '../../../common/utils/form-validator';



const SignupFormValidatorsOnChange = (type, data) => {

    switch (type) {
        case "username":
            data.errors[type] = !validateUsername(data.signupData.username);
            break;

        case "email":
            data.errors[type] = !validateEmail(data.signupData.email);
            break;


        // case "mobNumber":
        //     data.errors[type] = !validateMobileNumber(data.signupData.mobNumber);
        //     break;

        case "password":
            data.errors[type] = !validatePassword(data.signupData.password);
            break;

        default:
    }
    return data;

}



const SignupFormValidatorsOnBlur = (type, data) => {

    switch (type) {

        case "username":
            data.errors[type] = !validateUsername(data.signupData.username);

            if (data.signupData.username !== "" && data.errors[type]) {
                data.errorsMsgs.username = "Username should not more than 20 letters"
            }
            else if (data.signupData.username == "") {
                data.errorsMsgs.username = "Username is required"
            }
            else {
                data.errorsMsgs.username = ""
            }
            break;



        case "email":
            data.errors[type] = !validateEmail(data.signupData.email);

            if (data.signupData.email !== "" && data.errors[type]) {
                data.errorsMsgs.email = "Invalid Email Address"
            }
            else if (data.signupData.email == "") {
                data.errorsMsgs.email = "Email is required"
            }
            else {
                data.errorsMsgs.email = ""
            }
            break;


        // case "mobNumber":
        //     data.errors[type] = !validateMobileNumber(data.signupData.mobNumber);
        //     if (data.signupData.mobNumber !== "" && data.errors[type]) {
        //         data.errorsMsgs.mobNumber = "Invalid Mobile number"
        //     }
        //     else if (data.signupData.mobNumber == "") {
        //         data.errorsMsgs.mobNumber = "Number is required"
        //     }
        //     else {
        //         data.errorsMsgs.mobNumber = ""
        //     }
        //     break;

        case "password":
            data.errors[type] = !validatePassword(data.signupData.password);

            if (data.signupData.password !== "" && data.errors[type]) {
                data.errorsMsgs.password = "Invalid Password"
            }
            else if (data.signupData.password == "") {
                data.errorsMsgs.password = "Password is required"
            }
            else {
                data.errorsMsgs.password = ""
            }
            break;
        default:
    }
    return data;

}

export {
    SignupFormValidatorsOnChange,
    SignupFormValidatorsOnBlur
}