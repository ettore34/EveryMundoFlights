import m from 'mithril';

const Form = {
    view(vnode) {
        return m('div', [
            m('input', {
                type: "radio",
                name: "trip",
                value: "oneWay",
                checked: vnode.attrs.form.trip === 'oneWay',
                onchange: () => vnode.attrs.setFormValue('trip', 'oneWay')
            }),

            m('label', { for: 'OneWay' }, 'One Way'),

            m('input', {
                type: "radio",
                id: "RoundTrip",
                name: "trip",
                value: "roundTrip",
                checked: vnode.attrs.form.trip === 'roundTrip',
                onchange: () => vnode.attrs.setFormValue('trip', 'roundTrip')
            }),
            m('label', { for: 'RoundTrip' }, 'Round Trip'),

            m('form', [
                m('input.input', {
                    type: 'text',
                    placeholder: 'Origin',
                    name: 'from',
                    value: vnode.attrs.form.from,
                    oninput: e => vnode.attrs.setFormValue('from', e.target.value)
                }),
                m('br'),

                m('input.input', {
                    type:'text',
                    placeholder: 'Destination',
                    name: 'to',
                    value: vnode.attrs.form.to,
                    oninput: e => vnode.attrs.setFormValue('to', e.target.value)
                }),
                m('br'),

                m('input.input', {
                    type: 'date',
                    id: 'Depart',
                    name: 'depart',
                    value: vnode.attrs.form.depart,
                    min:'2019-01-01',
                    max:'2019-12-31',
                    oninput: e => vnode.attrs.setFormValue('depart', e.target.value)
                }),
                m('br'),

                m('input.input', {
                    type: 'date',
                    id: 'Return',
                    name: 'return',
                    value: vnode.attrs.form.return,
                    min:'2019-01-01',
                    max:'2019-12-31',
                    oninput: e => vnode.attrs.setFormValue('return', e.target.value)
                }),
                m('br'),

                m('select.select', {
                    id:'passengers',
                    name: 'passengers',
                    value: vnode.attrs.form.passengers,
                    onchange: e => vnode.attrs.setFormValue('passengers', e.target.value)
                }, 
                    [1,2,3,4,5,6,7,8,9].map(num => {
                        return m('option', {
                            value: num,
                            key: num,
                        }, num)
                    })
                )
            ])
        ]);
    }
};

export default Form;