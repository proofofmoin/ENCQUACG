module.exports = {
  get: function(req, res) {
    return new Promise(function(resolve, reject) {
      resolve('join game GET working');
    });
  },

  put: function(req, res) {
    return new Promise(function(resolve, reject) {
      resolve('join game PUT working');
    });
  },

  post: function(body) {
    return new Promise(function(resolve, reject) {
      resolve('join game POST working');
    });
  }
};
