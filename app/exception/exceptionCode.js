'use strict';

const SYSTEM_ERROR = {
    code: 100000,
    msg: 'Internal Server Error'
};
const PARAMETER_ERROR = {
    code: 100001,
    msg: 'Parameters Validation Error'
};
const LOGIN_INFO_MISMATCH = {
    code: 100002,
    msg: 'Login Info Mismatched'
};
const ACCOUNT_BANNED = {
    code: 100003,
    msg: 'The Account Has Been Banned'
};
const CODE_NOT_EXIST = {
    code: 100004,
    msg: 'The Confirm Code Does Not Exist'
};

module.exports = {
    SYSTEM_ERROR,
    PARAMETER_ERROR,
    LOGIN_INFO_MISMATCH,
    ACCOUNT_BANNED,
    CODE_NOT_EXIST
};
