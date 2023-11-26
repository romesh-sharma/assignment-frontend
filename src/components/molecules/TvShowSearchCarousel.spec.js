import TvShowSearchCarousel from './TvShowSearchCarousel.vue'
import { shallowMount } from '@vue/test-utils'
jest.mock('vue3-carousel/dist/carousel.css', () => '')
jest.mock('vue-router')

describe('TvShowSearchCarousel', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new search text'
    const wrapper = shallowMount(TvShowSearchCarousel, { props: { msg } })

    expect(wrapper.text()).toContain('')
  })
})
