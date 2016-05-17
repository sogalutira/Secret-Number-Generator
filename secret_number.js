'use strict';
module.exports = function() {
  var secretNum = Math.floor(Math.random()*(1000000 - 0 +1)) + 0;
    return function generatedNum(){
      return secretNum;
};
};

