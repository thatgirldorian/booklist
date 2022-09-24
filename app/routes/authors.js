    import Route from '@ember/routing/route';
    import { tracked } from '@glimmer/tracking';

    //Create classes to hold the model/route objects
    class Author {
    @tracked name;

    constructor({ id, name, books }) {
        this.id = id;
        this.name = name;
        this.books = books;
    }
    }

    class Book {
    constructor({ title, starRating, author }) {
        this.title = title;
        this.starRating = starRating ?? 0;
        this.band = author;
    }
    }

    //Define the model hook for the authors route
    export default class AuthorsRoute extends Route {
    model() {
        let legendBorn = new Book({
            title: 'Legendborn',
            author: 'Tracey Deonn',
            starRating: 5,
        });

        let cityOfBrass = new Book({
            title: 'City of Brass',
            author: 'S. A. Chakraborty',
            starRating: 5,
        });

        let kingdomOfCopper = new Book({
            title: 'Kingdom of Copper',
            author: 'S. A. Chakraborty',
            starRating: 4.9,
        });

        let poppyWar = new Book({
            title: 'The Poppy War',
            author: 'R. F Kuang',
            starRating: 4.8,
        });

        let dragonRepublic = new Book({
            title: 'The Dragon Republic',
            author: 'R. F Kuang',
            starRating: 4.9,
        });

        let gildedOnes = new Book({
            title: 'The Gilded Ones',
            author: 'Namina Forna',
            starRating: 4.8,
        });

        let rfKuang = new Author({
            id: 'rfKuang',
            name: 'R. F Kuang',
            books: [poppyWar, dragonRepublic],
        });

        let traceyDeonn = new Author({
            id: 'traceyDeonn',
            name: 'Tracey Deonn',
            books: [legendBorn],
        });

        let saChakraborty = new Author({
            id: 'saChakaborty',
            name: 'S. A. Chakraborty',
            books: [cityOfBrass, kingdomOfCopper],
        });

        let naminaForna = new Author({
            id: 'naminaForna',
            name: 'Namina Forna',
            books: [gildedOnes],
        });

        let silviaMorenoGarcia = new Author({
            id: 'silviaMorenoGarcia',
            name: 'Silvia Moreno-Garcia',
            books: [],
        })

        return [traceyDeonn, saChakraborty, rfKuang, naminaForna, silviaMorenoGarcia];
    }
}
