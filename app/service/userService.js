'use strict'

const moment = require('moment')

module.exports = app => {
    return class UserService extends app.Service {
        async uploadToALIOSS(buffer, extName) {
            const {ctx, app} = this
            const timestamp = moment().valueOf()
            const random = Math.floor((Math.random() + 1) * 10000)
            const finalName = random + timestamp + extName
            const object = await ctx.oss.put('users/' + finalName, buffer)
            if (object) {
                let url = object.url
                if (url.indexOf('https') === -1) {
                    url = url.replace(/http/, 'https')
                }
                return url
            }
        }
    }
}
