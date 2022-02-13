import { isExist } from "../../../../../common/utils/form-validator";



const addNewAddressFromValidators = (type, data) => { // here type = name,data= this.state
    let errors = { ...data.errors }
    switch (type) {
        case 'name':
            errors[type] = !isExist(data.name);
            break;
        case 'address':
            errors[type] = !isExist(data.address);
            break;
        case 'number':
            errors[type] = !isExist(data.number);
            break;
        default:
    }
    return errors;

}

export {
    addNewAddressFromValidators
}