'use strict';

var handler = require('./handler');

/**
 * Exports: ROUTES
 */
module.exports = [{
    method: ['GET'],
    path: '/signup',
    handler: handler.header
}];