'use strict';
const { generalFailure } = require('../utils/tools');

module.exports = options => {
    return async function handler(ctx, next) {
        try {
            await next();
        } catch (e) {
            ctx.body = generalFailure(e);
        }
    };
};
