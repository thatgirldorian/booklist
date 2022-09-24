import Route from '@ember/routing/route';

//Define the model hook for the authors route
export default class AuthorsRoute extends Route {
    model() {
        return [
            { name: 'R. F Kuang' },
            { name : 'S.A Chakraborty'},
            { name: 'Tracy Deonn'},
        ]
    }
}
