/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import BaseHeading from './BaseHeading'

storiesOf('BaseHeading', module)
  .add('h1', () => ({
    components: { BaseHeading },
    template: '<base-heading level="1">Hello Button</base-heading>'
  }))
  .add('h2', () => ({
    components: { BaseHeading },
    template: '<base-heading level="2">Hello Button</base-heading>'
  }))
  .add('h3', () => ({
    components: { BaseHeading },
    template: '<base-heading level="3">Hello Button</base-heading>'
  }))
