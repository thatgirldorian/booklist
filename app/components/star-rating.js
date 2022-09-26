import Component from '@glimmer/component';

export default class StarRatingComponent extends Component {
    //Add a way to show the star rating for books with some getters
    get maxRating() {
        return this.args.maxRating ?? 5;
    }


    get stars() {
        let stars = [];
        for (let i = 1; i <= this.maxRating; i++) {
            stars.push({
                starRating: i,
                full: i <= this.args.starRating,
            })
        }
        return stars;
    }
}
