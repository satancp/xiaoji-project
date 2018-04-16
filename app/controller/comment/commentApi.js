'use strict';
const path = require('path');

module.exports = app => {
    return class CommentApiController extends app.Controller {
        async index() {
            const { ctx } = this;
            const results = await app.mysql.select('comments', {
                where: { resource_id: ctx.query.resource_id },
                orders: [['created_at', 'desc']]
            });
            ctx.body = results;
        }
    };
};
