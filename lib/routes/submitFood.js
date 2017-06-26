'use strict';

const Handlers = require('../handlers');
const Joi = require('joi');


module.exports = (server, options) => {

    return [{
        method: 'POST',
        path: '/submit/',
        config:
            tags: ['api'],
            validate: {
                payload: {
                    desc: Joi.String(),
                    allergen: Joi.Array(),
                    location: Joi.Float(),
                    picture: Joi.Any()
                }
            }
        },
        handler: Handlers.submitFoodHandler
    }];
};
