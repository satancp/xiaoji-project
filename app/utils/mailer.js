const nodemailer = require('nodemailer');
const geoip = require('geoip-lite');
const publicIp = require('public-ip');
const sparkPostTransport = require('nodemailer-sparkpost-transport');
const Exception = require('../exception/exception');

const sendMail = (rd, email, app) => {
    return new Promise(async (resolve, reject) => {
        const ip = await publicIp.v4();
        const geo = geoip.lookup(ip);
        let transporter = undefined;
        let mailOptions = {};
        transporter = nodemailer.createTransport(
            sparkPostTransport({
                sparkPostApiKey: app.config.serviceMail.OTHER.sparkPostApiKey
            })
        );
        mailOptions = {
            from: app.config.serviceMail.OTHER.user,
            to: email,
            subject: 'Reset Code - goLand Service Team',
            text: `Code is ${rd}`,
            html: `<img src="https://s3-ap-northeast-1.amazonaws.com/xiaojibucket/web/logo.png"/><br/><h1>Code is ${rd}</h1>`
        };
        transporter.sendMail(mailOptions, (error, info) => {
            console.log(error);
            if (error) reject(error);
            else resolve(true);
        });
    });
};

module.exports = {
    sendMail
};
