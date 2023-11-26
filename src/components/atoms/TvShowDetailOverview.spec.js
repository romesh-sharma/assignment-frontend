import TvShowDetailOverview from './TvShowDetailOverview.vue'
import { shallowMount } from '@vue/test-utils'
jest.mock('vue-router')

describe('TvShowDetailOverview', () => {
  it('renders props.tvShow when passed', () => {
    const tvShow = { id: 12345 }
    const wrapper = shallowMount(TvShowDetailOverview, { props: { tvShow } })

    expect(wrapper.text()).toContain('')
  })
})
