'use strict';

var Album = require('../../models/album');

module.exports = {
  handler: function(request, reply) {
    var sort = 'asc';
    if (request.query.sort) {
      sort = request.query.sort;
    }
    Album.find({userId: request.auth.credentials._id}).sort({date: sort}).exec(function(err, albums) {
      reply.view('templates/albums/index', {albums:albums});
    });
  }
};
