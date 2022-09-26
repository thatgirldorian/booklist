import Route from '@ember/routing/route';

export default class AuthorsAuthorRoute extends Route {
  model(params) {
    let authors = this.modelFor('authors');
    return authors.find((author) => author.id === params.id);
  }
}
