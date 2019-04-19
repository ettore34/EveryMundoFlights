import m from 'mithril';

const Result = {
    view(vnode) {
        return m('ul.list-reset.border.rounded.p1', [
            m('li.inline-block.mr1.px1', [
                m('b', 'Arrival Time: '),
                m('p', vnode.attrs.arrivalTime)
            ]),

            m('li.inline-block.mr1.px1', [
                m('b', 'Departure Time: '),
                m('p', vnode.attrs.departureTime)
            ]),

            m('li.inline-block.mr1.px3', [
                m('h2', '$' + vnode.attrs.priceUSD),
            ])
        ]);
    }
};

export default Result;