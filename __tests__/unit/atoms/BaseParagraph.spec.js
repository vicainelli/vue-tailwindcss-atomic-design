import { render } from '@vue/server-test-utils'
import BaseParagraph from '@/components/atoms/BaseParagraph'

describe('BaseParagraph.vue', () => {
  const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit'
  it('Renders text', async () => {
    const wrapper = await render(BaseParagraph, {
      slots: {
        default: text
      }
    })
    expect(wrapper.text()).toMatch(text)
  })
})
