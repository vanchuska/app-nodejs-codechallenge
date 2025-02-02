import * as Joi from '@hapi/joi';

export default Joi.object({
  NODE_ENV: Joi.required(),

  // APP
  PORT: Joi.required(),
  BASE_URL: Joi.required(),

  // DATABASE
  DATABASE_CLIENT: Joi.required(),
  DATABASE_HOST: Joi.required(),
  DATABASE_PORT: Joi.required(),
  DATABASE_USER: Joi.required(),
  DATABASE_PASSWORD: Joi.required(),
  DATABASE_NAME: Joi.required(),
});
