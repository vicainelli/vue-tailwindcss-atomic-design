/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import BaseInput from './BaseInput'

storiesOf('BaseInput', module).add('Inline', () => ({
  components: { BaseInput },
  template: '<base-input label="Input label">'
}))
