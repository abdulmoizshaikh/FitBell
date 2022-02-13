import { isExist } from "../../../common/utils/form-validator";



const verificationFromValidators = (type, data) => { // here type = name,data= this.state
    let errors = { ...data.errors }
    switch (type) {
        // case 'verificationCode':
        //     errors[type] = !isExist(data.verificationCode);

        case 'inputField1':
            errors[type] = !isExist(data.inputField1);
        case 'inputField2':
            errors[type] = !isExist(data.inputField2);
        case 'inputField3':
            errors[type] = !isExist(data.inputField3);
        case 'inputField4':
            errors[type] = !isExist(data.inputField4);


            break;
        default:
    }
    return errors;

}

export {
    verificationFromValidators
}