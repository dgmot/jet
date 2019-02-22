
'use strict';

module.exports = function (configObj) {
  return new Promise((resolve, reject) => {
  	console.log("Running before_release_build hook.");
  	resolve();
  });
};
