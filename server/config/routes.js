'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},
  {method: 'get', path: '/', config: require('../routes/general/home')},

  {method: 'get', path: '/albums', config: require('../routes/albums/index')},
  {method: 'get', path: '/albums/new', config: require('../routes/albums/new')},
  {method: 'post', path: '/albums', config: require('../routes/albums/create')},
  {method: 'get', path: '/albums/{albumId}', config: require('../routes/albums/show')},
  {method: 'get', path: '/albums/{albumId}/edit', config: require('../routes/albums/edit')},
  {method: 'post', path: '/albums/{albumId}/update', config: require('../routes/albums/update')},
  {method: 'post', path: '/albums/{albumId}/{photoIndex}/delete', config: require('../routes/albums/photo/destroy')},
  {method: 'get', path: '/albums/{albumId}/photo/new', config: require('../routes/albums/photo/new')},
  {method: 'post', path: '/albums/{albumId}/photo', config: require('../routes/albums/photo/create')},
  {method: 'post', path: '/albums/{albumId}/{photoIndex}/primary', config: require('../routes/albums/photo/primary')},

  {method: 'get', path: '/register', config: require('../routes/users/new')},
  {method: 'post', path: '/users', config: require('../routes/users/create')},
  {method: 'get', path: '/login', config: require('../routes/users/login')},
  {method: 'post', path: '/users/authenticate', config: require('../routes/users/authenticate')},
  {method: 'post', path: '/logout', config: require('../routes/users/logout')}
];
