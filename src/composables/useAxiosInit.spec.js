import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import tvShowsService from '../services/tv-shows.service'

describe('TV Show API', () => {
  it('verify if API call is returning correct data', (done) => {
    let mock = new MockAdapter(axios)
    const data = { response: true }
    mock.onGet('https://api.tvmaze.com/shows').reply(200, data)
    tvShowsService.getTvShowList().then((response) => {
      expect(response).toEqual(data)
      done()
    })
  })
})