import { isExist } from "../../../../common/utils/form-validator";



export const OtherAllergiesRestrictionsFromValidators = (type, data) => { // here type = name,data= this.state
    let errors = { ...data.errors }
    switch (type) {
        case 'allergies':
            errors[type] = !isExist(data.searchedAllergies);
            break;
        case 'restrictions':
            errors[type] = !isExist(data.searchedRestrictions);
            break;
        default:
    }
    return errors;

}
