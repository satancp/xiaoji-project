'use strict';
const path = require('path');

module.exports = app => {
    return class StarApiController extends app.Controller {
        async index() {
            const { ctx } = this;
            const query1 =
                'SELECT s.id, s.index, s.resource_id, r.name, r.desc, r.preview_image, r.category_id, c.display_name as category ' +
                'FROM stars AS s INNER JOIN resources AS r ON r.id = s.resource_id INNER JOIN categories AS c ON c.id = r.category_id';
            let results = await app.mysql.query(query1);
            ctx.body = results;
        }
    };
};
