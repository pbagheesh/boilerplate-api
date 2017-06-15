'use strict';

const Handlers = require('../handlers');

module.exports = (server, options) => {

    return [{
        method: 'GET',
        path: '/name',
        handler: Handlers.pTestHandler
    }];
};
