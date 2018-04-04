'use strict';
const path = require('path');
const sendToWormhole = require('stream-wormhole');
const toArray = require('stream-to-array');

module.exports = app => {
    return class ResourceApiController extends app.Controller {
        async index() {
            const { ctx } = this;
            const results = await app.mysql.select('resources', {
                orders: [['created_at', 'desc'], ['id', 'desc']],
                limit: 10,
                offset: 0
            });
            ctx.body = results;
        }

        async add() {
            const { ctx } = this;
            const results = await app.mysql.insert('resources', ctx.request.body);
            ctx.body = results;
        }

        async upload() {
            const { ctx } = this;
            const stream = await ctx.getFileStream();
            const name = path.basename(stream.filename);
            const parts = await toArray(stream);
            const buffer = Buffer.concat(parts);
            console.log(buffer);
            let result;
            try {
                result = await ctx.service.resourceService.uploadToAWS(buffer, name);
            } catch (err) {
                await sendToWormhole(stream);
                throw err;
            }
            console.log(result);
            ctx.body = result;
        }

        async update() {
            const { ctx } = this;
            const row = { ...ctx.request.body };
            row.updated_at = app.mysql.literals.now;
            console.log(row);
            const result = await app.mysql.update('resources', row);
            ctx.body = result;
        }

        async delete() {
            const { ctx } = this;
            const result = await app.mysql.delete('resources', ctx.request.body);
            ctx.body = result;
        }
    };
};
