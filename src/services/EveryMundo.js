import { request } from 'mithril';

const BASE_URL = 'https://everymundointernship.herokuapp.com';
const API_KEY = 'FI93WC58YD70';

const EveryMundo = {
    getPopularRoutes() {
        return request(BASE_URL + '/popularRoutes/' + API_KEY);
    },

    getSearchResults(form) {
        return request({
            method: 'POST',
            url: BASE_URL + '/search/' + API_KEY,
            data: {
                destination: form.to,
                origin: form.from,
                tripType: form.trip,
                departureDate: form.depart,
                returnDate: form.return,
                passengerCount: form.passengers
            }
        });
    }
};

export default EveryMundo;