'use strict';
const path = require('path');
const sendToWormhole = require('stream-wormhole');
const toArray = require('stream-to-array');
const moment = require('moment');
const sharp = require('sharp');

module.exports = app => {
    return class ResourceApiController extends app.Controller {
        async index() {
            const { ctx } = this;
            const query1 =
                'SELECT r.id, r.name, r.preview_image, r.category_id, r.desc, r.content, r.created_at, c.display_name as category ' +
                'FROM resources AS r INNER JOIN categories AS c ON r.category_id = c.id';
            let results = await app.mysql.query(query1);
            for (let i = 0; i < results.length; i++) {
                const query =
                    'SELECT rt.resource_id, rt.tag_id, t.name as tag, t.color as color ' +
                    'FROM resource_tag AS rt INNER JOIN tags AS t ON rt.tag_id = t.id WHERE rt.resource_id = ?';
                const tags = await app.mysql.query(query, results[i].id);
                results[i].tags = tags;
            }
            ctx.body = results;
        }

        async getResources() {
            const { ctx } = this;
            const query1 =
                'SELECT r.id, r.name, r.preview_image, r.category_id, r.desc, r.content, r.created_at, c.display_name as category, u.nickname as creator ' +
                'FROM resources AS r INNER JOIN categories AS c ON r.category_id = c.id INNER JOIN users AS u ON r.created_by = u.id WHERE r.category_id = ? AND r.id <> ? ORDER BY r.created_at';
            let queyrData = [ctx.query.category_id];
            if (ctx.query.resource_id) queyrData.push(ctx.query.resource_id);
            else queyrData.push(0);
            let results = await app.mysql.query(query1, queyrData);
            for (let i = 0; i < results.length; i++) {
                const query =
                    'SELECT rt.resource_id, rt.tag_id, t.name as tag, t.color as color ' +
                    'FROM resource_tag AS rt INNER JOIN tags AS t ON rt.tag_id = t.id WHERE rt.resource_id = ?';
                const tags = await app.mysql.query(query, results[i].id);
                results[i].tags = tags;
            }
            ctx.body = results;
        }

        async getResource() {
            const { ctx } = this;
            const query1 =
                'SELECT r.id, r.name, r.preview_image, r.category_id, r.desc, r.content, r.created_at, c.display_name as category, u.nickname as creator ' +
                'FROM resources AS r INNER JOIN categories AS c ON r.category_id = c.id INNER JOIN users AS u ON r.created_by = u.id WHERE r.id = ?';
            let results = await app.mysql.query(query1, ctx.query.resource_id);
            for (let i = 0; i < results.length; i++) {
                const query =
                    'SELECT rt.resource_id, rt.tag_id, t.name as tag, t.color as color ' +
                    'FROM resource_tag AS rt INNER JOIN tags AS t ON rt.tag_id = t.id WHERE rt.resource_id = ?';
                const tags = await app.mysql.query(query, results[i].id);
                results[i].tags = tags;
            }
            for (let i = 0; i < results.length; i++) {
                const query =
                    'SELECT c.id, c.content, c.upvotes, c.downvotes, u.nickname as creator, u.avatar as creator_avatar, c.created_at ' +
                    'FROM comments AS c INNER JOIN users AS u ON u.id = c.created_by WHERE c.resource_id = ? ORDER BY c.upvotes DESC';
                const comments = await app.mysql.query(query, results[i].id);
                results[i].comments = comments;
            }
            ctx.body = results[0];
        }

        async add() {
            const { ctx } = this;
            const result = await app.mysql.beginTransactionScope(async conn => {
                const tags = ctx.request.body.tags;
                delete ctx.request.body.tags;
                const results = await conn.insert('resources', ctx.request.body);
                console.log(results);
                for (let i = 0; i < tags.length; i++) {
                    await conn.insert('resource_tag', { tag_id: tags[i], resource_id: results.insertId });
                }
                return results;
            }, ctx);
            ctx.body = result;
        }

        async upload() {
            const { ctx } = this;
            const stream = await ctx.getFileStream();
            const filename = stream.filename;
            console.log(stream);
            let extName = '';
            if (filename.indexOf('.') > -1) extName = filename.substring(filename.indexOf('.'));
            const prefix = stream.fields.fileType + 's/';
            const name =
                prefix +
                Math.floor(Math.random() * 10000).toString() +
                moment()
                    .unix()
                    .toString() +
                extName;
            const parts = await toArray(stream);
            let buffer = Buffer.concat(parts);
            let imageData = undefined;
            if (stream.fields.fileType !== 'video') {
                imageData = await sharp(buffer).metadata();
            }
            if (
                stream.fields.fileType === 'thumbnail' &&
                imageData &&
                (imageData.width > 200 || imageData.height > 200)
            ) {
                buffer = await sharp(buffer)
                    .resize(200, 200)
                    .toBuffer();
            }
            let result;
            try {
                result = await ctx.service.resourceService.uploadToAWS(buffer, name);
            } catch (err) {
                await sendToWormhole(stream);
                throw err;
            }
            const url = 'https://s3-ap-northeast-1.amazonaws.com/xiaojibucket/' + name;
            ctx.body = url;
        }

        async update() {
            const { ctx } = this;
            const row = { ...ctx.request.body };
            row.updated_at = app.mysql.literals.now;
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
