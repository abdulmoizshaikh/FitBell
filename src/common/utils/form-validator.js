

export function validateUsername(value) {
    // console.log("value.length<20", value.length <= 20)
    return value.length <= 20;
    // const re = /^[A-Za-z]+$/;
    // return re.test(name);
}

export function validateEmail(value) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}

export function validateMobileNumber(value) {
    const re = /^[0-9 +]\d*$/;
    return re.test(value);
}

export function validatePassword(value) {
    return Boolean(value);
    // return value.length >= 6;
}

export function isExist(value) {
    return Boolean(value);
}

export function isMatch(value1, value2) {
    return value1 === value2;
}

export function isValid(errors, data) {         // here error = this.state.error , data=this.state
    for (var key in errors) {
        if (errors[key] || data[key] === '') {
            return false;
        }
    }
    return true;
}


