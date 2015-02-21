'use strict';

var Album = require('../../models/album');

module.exports = {
  handler: function(request, reply) {
    Album.findById(request.params.albumId, function(err, album) {
      if (err) { console.error(err); }
      reply.view('templates/albums/show', {album:album});
    });
  }
};
