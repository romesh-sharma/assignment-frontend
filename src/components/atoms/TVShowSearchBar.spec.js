import TvShowsSearchBar from './TvShowsSearchBar.vue'
import { shallowMount } from '@vue/test-utils'

describe('TvShowsSearchBar', () => {
  it('renders props.modelValue when passed', () => {
    const modelValue = 'new search text'
    const wrapper = shallowMount(TvShowsSearchBar, { props: { modelValue } })

    expect(wrapper.text()).toContain('')
  })
})
