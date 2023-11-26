import { ref } from 'vue'
import { defineStore } from 'pinia'
import tvShowsService from '../services/tv-shows.service'

export const useTvShowsStore = defineStore('tvShows', () => {
  const tvShowList = ref()
  const fetchTvShowsList = async () => {
    tvShowList.value = await tvShowsService.getTvShowList()
  }
  return { fetchTvShowsList, tvShowList }
})
