'use strict';

const Exception = require('../../exception/exception');
const { LOGIN_INFO_MISMATCH, ACCOUNT_BANNED, CODE_NOT_EXIST } = require('../../exception/exceptionCode');
const Controller = require('../baseController');
const { generateRandomString } = require('../../utils/tools');
const { sendMail } = require('../../utils/mailer');

class UserApiController extends Controller {
    async index() {
        const { ctx, app } = this;
        const results = await app.mysql.select('users', {
            orders: [['created_at', 'desc'], ['id', 'desc']],
            limit: 10,
            offset: 0
        });
        this.success(results);
    }

    async login() {
        const { ctx, app } = this;
        let results = await app.mysql.select('users', {
            where: { email: ctx.request.body.email, password: ctx.request.body.password },
            columns: ['id', 'status', 'nickname']
        });
        if (results.length > 0) {
            results = results[0];
            if (results.status === 0) throw new Exception(ACCOUNT_BANNED);
        } else throw new Exception(LOGIN_INFO_MISMATCH);
        this.success(results);
    }

    async forget() {
        const { ctx, app } = this;
        let results = await app.mysql.select('users', {
            where: { email: ctx.request.body.email },
            columns: ['id']
        });
        if (results.length > 0) {
            let rd = '0';
            let check = await app.mysql.select('confirms', {
                where: { email: ctx.request.body.email }
            });
            if (check.length > 0) {
                rd = generateRandomString(8, 0).toUpperCase();
                await app.mysql.update('confirms', {
                    id: check[0].id,
                    content: rd,
                    created_at: app.mysql.literals.now
                });
            } else {
                rd = generateRandomString(8, 0).toUpperCase();
                await app.mysql.insert('confirms', {
                    content: rd,
                    email: ctx.request.body.email,
                    created_at: app.mysql.literals.now
                });
            }
            await sendMail(rd, ctx.request.body.email, app);
            this.success(true);
        } else this.success(true);
    }

    async resetPwd() {
        const { ctx, app } = this;
        const row = { ...ctx.request.body };
        row.updated_at = app.mysql.literals.now;
        const check = await app.mysql.select('confirms', {
            where: { email: ctx.request.body.email, content: ctx.request.body.content }
        });
        if (check.length > 0) {
            const result = await app.mysql.update('users', {
                id: check[0].id,
                email: ctx.request.body.email,
                password: ctx.request.body.password
            });
            this.success(true);
        } else throw new Exception(CODE_NOT_EXIST);
    }

    async add() {
        const { ctx, app } = this;
        const results = await app.mysql.insert('users', ctx.request.body);
        this.success(results);
    }

    async update() {
        const { ctx, app } = this;
        const row = { ...ctx.request.body };
        row.updated_at = app.mysql.literals.now;
        const result = await app.mysql.update('users', row);
        this.success(result);
    }

    async delete() {
        const { ctx, app } = this;
        const result = await app.mysql.delete('users', ctx.request.body);
        this.success(result);
    }
}

module.exports = UserApiController;
