'use strict';
const AWS = require('aws-sdk');

module.exports = app => {
    return class ResourceService extends app.Service {
        uploadToAWS(buffer, name) {
            return new Promise((resolve, reject) => {
                const s3 = new AWS.S3();
                const params = {
                    Body: buffer,
                    Bucket: 'xiaojibucket',
                    Key: name,
                    ACL: 'public-read'
                };
                s3.putObject(params, (err, data) => {
                    if (err) reject(err);
                    resolve(data);
                });
            });
        }
    };
};
