import { storiesOf } from '@storybook/vue'
import BkNumberFact from './BkNumberFact'

storiesOf('BkNumberFact', module).add('default', () => ({
    components: { BkNumberFact },
    template: '<bk-number-fact :factType="type">Click here</bk-number-fact>',
    data: () => ({
        type: 'math',
    }),
}))
