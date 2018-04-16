'use strict';
const path = require('path');

module.exports = app => {
    return class TagApiController extends app.Controller {
        async index() {
            const { ctx } = this;
            const results = await app.mysql.select('tags', {
                orders: [['id', 'asc']]
            });
            ctx.body = results;
        }
    };
};
