'use strict';

module.exports = app => {
    const { router, controller } = app;
    // 页面路由
    router.get('/', controller.home.home.index);
    // 服务端路由
    router.get('/api/home/list', controller.home.homeApi.index);
    router.get('/api/home/list_star', controller.home.homeApi.listStar);
};
