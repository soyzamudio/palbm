'use strict';

var Album = require('../../models/album');

module.exports = {
  payload: {
    maxBytes: 16777216, // 2^24 ; 16MB
    output: 'stream',
    parse: true,
    timeout: 60000
  },
  handler: function(request, reply) {
    var photos = [].concat(request.payload.photos);
    delete request.payload.photos;
    var a1 = new Album(request.payload);

    a1.upload(photos, function(err) {
      a1.save();
      reply();
    });
  }
};
