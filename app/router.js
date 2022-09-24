//import our app's routes
import EmberRouter from '@ember/routing/router';
import config from 'booklist/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  //Add some nested routes
  this.route('authors', function () {
    this.route('author', { path: ':id'}, function () {
      this.route('books')
    })
    });
  });
