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
const NO_ACCESS = {
    code: 100005,
    msg: 'You have No Access To This Operation'
};
const EMAIL_HAS_EXIST = {
    code: 100006,
    msg: 'The Email Exists'
};
const OPERATION_EXIST = {
    code: 100007,
    msg: 'Operation Has Been Submitted Before'
};
const BOARD_EXIST = {
    code: 100008,
    msg: 'You have created this board before'
};
const BOARD_INFO_EXIST = {
    code: 100009,
    msg: 'You have pinned the info at this board before'
};

module.exports = {
    SYSTEM_ERROR,
    PARAMETER_ERROR,
    LOGIN_INFO_MISMATCH,
    ACCOUNT_BANNED,
    CODE_NOT_EXIST,
    NO_ACCESS,
    EMAIL_HAS_EXIST,
    OPERATION_EXIST,
    BOARD_EXIST,
    BOARD_INFO_EXIST
};
