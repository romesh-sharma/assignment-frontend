import AppContainer from './AppContainer.vue'
import { shallowMount } from '@vue/test-utils'

describe('AppContainer', () => {
  it('renders props.msg when passed', () => {
    const msg = 'test case message'
    const wrapper = shallowMount(AppContainer, { props: { msg } })

    expect(wrapper.text()).toContain('')
  })
})
