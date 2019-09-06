import { render } from '@vue/server-test-utils'
import BaseHeading from '@/components/atoms/BaseHeading'

describe('BaseHeading.vue', () => {
  it('Renders text', async () => {
    const text = 'Heading 1'
    const level = 1
    const wrapper = await render(BaseHeading, {
      propsData: {
        level
      },
      slots: {
        default: text
      }
    })
    expect(wrapper.text()).toMatch(text)
  })
})
