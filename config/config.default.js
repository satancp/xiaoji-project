const path = require('path')
const fs = require('fs')

module.exports = app => {
    return {
        siteFile: {
            '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
        },
        security: {
            csrf: {
                enable: false
            }
        },
        cors: {
            origin: '*',
            allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
        },
        assets: {
            enable: true,
            package: 'egg-view-assets'
        },
        serviceMail: {
            CN: {
                user: 'goland_service@163.com',
                pass: 'wsx653019',
                host: 'smtp.163.com'
            },
            OTHER: {
                sparkPostApiKey: 'fe2728d228034960fc8032bbd7111b9d3d63608a',
                user: 'service@mail.goland.cool'
            }
        },
        static: {
            prefix: '/public/',
            dir: path.join(app.baseDir, 'app/public'),
            dynamic: true,
            preload: false,
            buffer: true,
            maxFiles: 1000,
            maxAge: 3600
        },
        logger: {
            consoleLevel: 'DEBUG',
            dir: path.join(app.baseDir, 'logs')
        },
        static: {
            prefix: '/public/',
            dir: path.join(app.baseDir, 'public')
        },
        keys: '123456',
        middleware: ['errorHandler', 'access'],
        bodyParser: {
            formLimit: '100000mb',
            jsonLimit: '100000mb'
        },
        multipart: {
            filesize: '100000mb'
        },
        mysql: {
            client: {
                host: 'localhost',
                port: '3306',
                user: 'root',
                password: 'wsxjw113',
                database: 'sharing'
            },
            app: true,
            agent: false
        },
        aliyun: {
            accessKeyId: 'LTAIJ7yOsaEW7vMG',
            accessKeySecret: '5rDmRvEEwRSHkVNoXnmswts1uznKfv',
            apiVersion: '2015-04-01',
            bucket: 'xiaoji-web',
            region: 'oss-cn-hangzhou'
        },
        oss: {
            client: {
                accessKeyId: 'LTAIJ7yOsaEW7vMG',
                accessKeySecret: '5rDmRvEEwRSHkVNoXnmswts1uznKfv',
                bucket: 'xiaoji-web',
                endpoint: 'oss-cn-hangzhou.aliyuncs.com',
                timeout: '60s'
            }
        }
    }
}
