'use strict';
const path = require('path');

module.exports = app => {
    return class CategoryApiController extends app.Controller {
        async index() {
            const { ctx } = this;
            const results = await app.mysql.select('categories', {
                orders: [['display_name', 'asc']]
            });
            ctx.body = results;
        }
    };
};
