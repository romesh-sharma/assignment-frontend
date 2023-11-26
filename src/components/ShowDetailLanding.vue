<script setup>
import tvShowsService from '../services/tv-shows.service'
import TvShowDetailOverview from './atoms/TvShowDetailOverview.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { BeatLoader } from 'vue3-spinner'

const route = useRoute()
const { id } = route.params
const showDetail = ref()

const getShowById = async () => {
  try {
    showDetail.value = await tvShowsService.getTvShowById(id)
  } catch (e) {
    console.error(e)
  }
}

getShowById()
</script>

<template>
  <BeatLoader :loading="!showDetail" />
  <TvShowDetailOverview v-if="showDetail" :tv-show="showDetail" />
</template>
