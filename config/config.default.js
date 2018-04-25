const path = require('path');
const fs = require('fs');
module.exports = app => {
    const exports = {};

    exports.siteFile = {
        '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
    };

    exports.security = {
        csrf: {
            enable: false
        }
    };

    exports.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };

    exports.assets = {
        enable: true,
        package: 'egg-view-assets'
    };

    exports.serviceMail = {
        CN: {
            user: 'goland_service@163.com',
            pass: 'wsx653019',
            host: 'smtp.163.com'
        },
        OTHER: {
            sparkPostApiKey: 'fe2728d228034960fc8032bbd7111b9d3d63608a',
            user: 'service@mail.goland.cool'
        }
    };

    exports.static = {
        prefix: '/public/',
        dir: path.join(app.baseDir, 'app/public'),
        dynamic: true,
        preload: false,
        buffer: true,
        maxFiles: 1000,
        maxAge: 3600
    };

    exports.logger = {
        consoleLevel: 'DEBUG',
        dir: path.join(app.baseDir, 'logs')
    };

    exports.static = {
        prefix: '/public/',
        dir: path.join(app.baseDir, 'public')
    };

    exports.keys = '123456';

    exports.middleware = ['errorHandler', 'access'];

    exports.mysql = {
        // database configuration
        client: {
            // host
            host: 'localhost',
            // port
            port: '3306',
            // username
            user: 'root',
            // password
            password: 'wsxjw113',
            // database
            database: 'sharing'
        },
        // load into app, default is open
        app: true,
        // load into agent, default is close
        agent: false
    };

    return exports;
};
