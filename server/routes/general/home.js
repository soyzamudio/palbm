'use strict';

module.exports = {
  auth: {
    mode: 'try'
  },
  handler: function(request, reply) {
    var data = {x: 3, y:2, z: 1};
    reply.view('templates/general/home', data);
  }
};
