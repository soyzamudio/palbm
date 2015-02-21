'use strict';

var Album = require('../../models/album');

module.exports = {
  handler: function(request, reply) {
    Album.findById(request.params.albumId, function(err, album) {
      album.update(request.payload, function(err) {
        if (err) { console.error(err); }
        reply.redirect('/albums/' + request.params.albumId);
      });
    });
  }
};
