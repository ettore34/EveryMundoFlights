import m from 'mithril';

const RouteCard = {
    view(vnode) {
        return m('div.border.rounded.p2.m1.col-3.flex-auto', { class: 'Popular' }, [
            m('img', {
                src: vnode.attrs.deal.routeCoverImage,
                style: { width: '300px', height: '180px' },
                alt: 'pic'
            }),
            m('h3', vnode.attrs.deal.origin + '-' + vnode.attrs.deal.destination),
            m('p', vnode.attrs.deal.departureDate),
            m('h1', 'Price $' + vnode.attrs.deal.priceUSD),
            m('button.btn.btn-primary', { type: 'button', onclick: () => vnode.attrs.populateForm(vnode.attrs.deal) }, 'View Deal!')
        ]);
    }
};

export default RouteCard;