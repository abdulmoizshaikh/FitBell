import { validatePassword } from "../../../common/utils/form-validator";



const changePassFromValidators = (type, data) => { // here type = name,data= this.state
    let errors = { ...data.errors }
    switch (type) {
        case 'password':
            errors[type] = !validatePassword(data.password);
            break;
        case 'confirmPassword':
            errors[type] = !validatePassword(data.confirmPassword);
            break;
        default:
    }
    return errors;

}

export {
    changePassFromValidators
}