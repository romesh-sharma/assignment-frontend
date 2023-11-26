import TvShowCarousel from './TvShowCarousel.vue'
import { shallowMount } from '@vue/test-utils'
jest.mock('vue3-carousel/dist/carousel.css', () => '')
jest.mock('vue-router')

describe('TvShowCarousel', () => {
  it('renders props.shows when passed', () => {
    const shows = [{ id: 12345, name: 'The Flash' }]
    const wrapper = shallowMount(TvShowCarousel, { props: { shows } })

    expect(wrapper.text()).toContain('')
  })
})
