
'use strict';

module.exports = function (configObj) {
  return new Promise((resolve, reject) => {
  	console.log("Running after_serve hook.");
  	resolve();
  });
};
