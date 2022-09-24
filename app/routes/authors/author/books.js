import Route from '@ember/routing/route';

export default class AuthorsAuthorBooksRoute extends Route {
  model() {
    let author = this.modelFor('authors.author');
    return author.books;
  }
}
