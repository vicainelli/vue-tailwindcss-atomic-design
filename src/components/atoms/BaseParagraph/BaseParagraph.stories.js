/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import BaseParagraph from './BaseParagraph'

storiesOf('BaseParagraph', module).add('Simple paragraph', () => ({
  components: { BaseParagraph },
  template:
    '<base-paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus architecto alias corrupti.</base-paragraph>'
}))
