'use strict';

module.exports = app => {
    const { router, controller } = app;
    // 页面路由
    router.get('/resource/list', controller.resource.resource.index);
    router.get('/resource/add', controller.resource.resource.add);
    // 服务端路由
    router.get('/api/resource/list', controller.resource.resourceApi.index);
    router.get('/api/resource/getResources', controller.resource.resourceApi.getResources);
    router.get('/api/resource/getResource', controller.resource.resourceApi.getResource);
    router.post('/api/resource/add', controller.resource.resourceApi.add);
    router.post('/api/resource/update', controller.resource.resourceApi.update);
    router.post('/api/resource/delete', controller.resource.resourceApi.delete);
    router.post('/api/resource/upload', controller.resource.resourceApi.upload);
};