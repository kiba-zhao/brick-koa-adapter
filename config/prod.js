/**
 * @fileOverview 生产环境配置
 * @name prod.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

module.exports = env => {
  const exports = {};

  let httpPort = parseInt(env.KOA_HTTP_PORT);
  if (isNaN(httpPort)) {
    httpPort = 80;
  }
  exports.koa = {
    http: {
      msg: `http listen on ${httpPort}`, listen: httpPort,
    },
  };

  return exports;
};
