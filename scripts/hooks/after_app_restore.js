
'use strict';

module.exports = function () {
  return new Promise((resolve) => {
    console.log('Running after_app_restore hook.');
    resolve();
  });
};
