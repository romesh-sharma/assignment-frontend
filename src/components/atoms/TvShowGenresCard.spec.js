import TvShowGenresCard from './TvShowGenresCard.vue'
import { shallowMount } from '@vue/test-utils'

describe('TvShowGenresCard', () => {
  it('renders props.genres when passed', () => {
    const genres = ['Drama']
    const wrapper = shallowMount(TvShowGenresCard, { props: { genres } })

    expect(wrapper.text()).toContain('Drama')
  })
})
