import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import BkButton from './BkButton'

storiesOf('BkButton', module).add('default', () => ({
    components: { BkButton },
    template: '<bk-button @clicked="handleClick">Click here</bk-button>',
    methods: { handleClick: action('button clicked') },
}))
