import axios from 'axios'

export default {
  async getTvShowList() {
    const GET_TV_SHOW_LIST = 'https://api.tvmaze.com/shows'
    const { data } = await axios.get(GET_TV_SHOW_LIST)
    return data
  },

  async getTvShowById(id) {
    const GET_TV_SHOW_BY_ID = `https://api.tvmaze.com/shows/${id}`
    const { data } = await axios.get(GET_TV_SHOW_BY_ID)
    return data
  }
}
