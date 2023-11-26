import TVShowAppName from './TVShowAppName.vue'
import { shallowMount } from '@vue/test-utils'

describe('TVShowAppName', () => {
  it('renders props.msg when passed', () => {
    const msg = 'TV Show app - Romesh'
    const wrapper = shallowMount(TVShowAppName, { props: { msg } })

    expect(wrapper.text()).toContain('TV Show app - Romesh')
  })
})
