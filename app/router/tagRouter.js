'use strict';

module.exports = app => {
    const { router, controller } = app;
    // 服务端路由
    router.get('/api/tag/list', controller.tag.tagApi.index);
};
