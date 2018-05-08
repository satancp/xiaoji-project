'use strict';
const path = require('path');
const Controller = require('../baseController');

module.exports = app => {
    return class CategoryApiController extends Controller {
        async index() {
            const { ctx } = this;
            const results = await app.mysql.select('categories', {
                orders: [['display_name', 'asc']]
            });
            this.success(results);
        }

        async upload() {
            const { ctx } = this;
            const stream = await ctx.getFileStream();
            const filename = stream.filename;
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
            const row = {
                id: ctx.request.body.id,
                display_name: ctx.request.body.display_name,
                icon: ctx.request.body.icon
            };
            const result = await app.mysql.update('categories', row);
            this.success(result);
        }
    };
};
