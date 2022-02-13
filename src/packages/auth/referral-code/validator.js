import { isExist } from "../../../common/utils/form-validator";


const refCodeFromValidators = (type, data) => { // here type = name,data= this.state
    let errors = { ...data.errors }
    switch (type) {
        case 'refCode':
            errors[type] = !isExist(data.refCode);
            break;
        default:
    }
    return errors;

}

export {
    refCodeFromValidators
}