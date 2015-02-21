'use strict';

var Album = require('../../../models/album');

module.exports = {
  payload: {
    maxBytes: 16777216, // 2^24 ; 16MB
    output: 'stream',
    parse: true,
    timeout: 60000
  },
  handler: function(request, reply) {
    Album.findById(request.params.albumId, function(err, album) {
      var photos = [].concat(request.payload.photos);
      console.log(photos);
      album.upload(photos, function() {
        album.update(album, function(err) {
          if (err) { console.log(err); }
          reply.redirect('/albums/' + request.params.albumId);
        });
      });
    })
  }
}
