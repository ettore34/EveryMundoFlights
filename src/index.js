import m from 'mithril';
import dayjs from 'dayjs';
import Form from './components/Form';
import RouteCard from './components/RouteCard';
import Result from './components/Result';
import EveryMundo from './services/EveryMundo';

const state = {
    deals: null,
    results: null,
    form: {
        trip: 'oneWay',
        from: '',
        to: '',
        depart: dayjs().format('YYYY-MM-DD'),
        return: '',
        passengers: 1
    }
};

const actions = {
    setFormValue(key, val) {
        state.form[key] = val;
    },

    populateForm(deal) {
        state.form.trip = deal.tripType;
        state.form.from = deal.origin;
        state.form.to = deal.destination;
        state.form.depart = dayjs(deal.departureDate).format('YYYY-MM-DD');
        state.form.return = dayjs(deal.returnDate).format('YYYY-MM-DD');
    },

    getDeals() {
        EveryMundo.getPopularRoutes().then(data => state.deals = data);
    },

    getSearchResults() {
        EveryMundo.getSearchResults(state.form).then(data => state.results = data[0].routes);
    }
};

actions.getDeals();

const FlightsApplication = {
    view() {
        if (state.deals !== null) {
            return m('div.max-width-4.mx-auto', [
                m('h2', 'Ettore\'s Awesome App'),

                m('div.clearfix', [
                    m('div.col.col-3.px2', [
                        m(Form, {
                            form: state.form,
                            setFormValue: actions.setFormValue
                        }),

                        m('button.btn.btn-primary', { onclick: () => actions.getSearchResults() }, 'Search!'),
                    ]),

                    m('div.col.col-9', [
                        m('div.flex.flex-wrap', 
                            state.deals.map(deal => {
                                return m(RouteCard, { deal: deal, populateForm: actions.populateForm });
                            })
                        ),
                    ])
                ]),

                state.results !== null
                    ? m('div', [
                        m('h2', 'search results'),
                        state.results.map(result => m(Result, result)) 
                    ])
                    : null
                ,
            ]);
        } else {
            return [
                m('h2', 'There are no deals at this time.')
            ]
        }
    }
};

m.mount(document.getElementById('mithrilApplicationContainer'), FlightsApplication);