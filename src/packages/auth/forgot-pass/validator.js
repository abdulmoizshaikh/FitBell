import { validateEmail } from "../../../common/utils/form-validator";



const forgotPassFromValidators = (type, data) => { // here type = name,data= this.state
    let errors = { ...data.errors }
    switch (type) {
        case 'email':
            errors[type] = !validateEmail(data.email);
            break;
        default:
    }
    return errors;

}

export {
    forgotPassFromValidators
}