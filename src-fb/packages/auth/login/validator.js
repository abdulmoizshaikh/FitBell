import { validateEmail, validatePassword } from "../../../common/utils/form-validator";




const loginFromValidatorsOnChange = (type, data) => {    // here type = name,data= this.state

    switch (type) {
        case 'email':
            data.errors[type] = !validateEmail(data.credentials.email);
            break;

        case 'password':
            data.errors[type] = !validatePassword(data.credentials.password)
            break;

        default:
    }
    return data;
}



const loginFromValidatorsOnBlur = (type, data) => {    // here type = name,data= this.state

    switch (type) {
        case 'email':
            data.errors[type] = !validateEmail(data.credentials.email);

            if (data.credentials.email !== "" && data.errors[type]) {
                data.errorsMsgs.email = "Invalid Email Address"
            }
            else if (data.credentials.email == "") {
                data.errorsMsgs.email = "Email is required";
            }
            else {
                data.errorsMsgs.email = ""
            }
            break;

        case 'password':
            data.errors[type] = !validatePassword(data.credentials.password)

            if (data.credentials.password !== "" && data.errors[type]) {
                data.errorsMsgs.password = "Invalid Password"
            }
            else if (data.credentials.password == "") {
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
    loginFromValidatorsOnChange,
    loginFromValidatorsOnBlur
}