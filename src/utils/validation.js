const valid = ({ email, password }) => {
    const err = {}

    if (!email) {
        err.email = "Please add your email."
    } else if (!validateEmail(email)) {
        err.email = "Email is incorrect."
    }

    if (!password) {
        err.password = "Please add your password."
    } else if (password.length < 6) {
        err.password = "Password must be at least 6 characters."
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }
}

function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default valid

const validateDateOfBirth = (value) => {
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!value.match(dobRegex)) {
        return "Date of birth required";
    }

    // Check if the date is in the past (e.g., not a future date)
    const currentDate = new Date();
    const enteredDate = new Date(value);
    if (enteredDate > currentDate) {
        return "Date of Birth cannot be in the future";
    }

    // Add any additional validation rules here

    return "";
};

export const EmpAddValidation = ({ fullname,gender, dateofbirth, age, experience, email, designation, phone, password, cfpassword, file }) => {
    const err = {};

    if (!fullname) {
        err.fullname = "Please add the fullname."
    } else if (fullname.length > 25) {
        err.fullname = "fullname is up to 25 characters long."
    }

    if (!dateofbirth) {
        err.date = "Date of birth cannot be empty.";
    } else if (validateDateOfBirth(dateofbirth)) {
        err.date = "Dateofbirth cant be on future.";
    }

    if(!gender){
        err.gender="Please select the gender."
    }else if(gender.trim() === "choose"){
        err.gender="Please select the gender."
    }

    if (!age || age.trim() === "") {
        err.age = "please add age"
    }

    if (!experience) {
        err.experience = 'please choose the experience';
    }else if (experience === "choose"){
        err.experience='please choose experience'
    }

    if (!designation || designation.trim() === "") {
        err.designation = 'please add the designation';
    }

    if (!phone) {
        err.phone = 'please add the phone.';
    } else if (phone.length < 10 || phone.length > 10) {
        err.phone = `Phone Number should be 10 digits`;
    }

    if (!password) {
        err.password = "password is empty"
    } else if (password.trim() === "") {
        err.password = "password is empty"
    }

    if (!cfpassword) {
        err.cfpassword = "confirm password cant be empty"
    } else if (cfpassword !== password) {
        err.cfpassword = "password is not matching"
    }


    if (!email) {
        err.email = "Please add your email."
    } else if (!validateEmail(email)) {
        err.email = "Email is incorrect."
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }

}