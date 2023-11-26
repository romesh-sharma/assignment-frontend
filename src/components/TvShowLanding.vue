<script setup>
import { computed, ref, watch } from 'vue'
import { useTvShowsStore } from '../stores/tvShows'
import TvShowPostarCard from './atoms/TvShowGenresCard.vue'
import TvShowPostarCardMobile from './atoms/TvShowGenresCardMobile.vue'
import TvShowsSearchBar from './atoms/TvShowsSearchBar.vue'
import TvShowCarousel from './molecules/TvShowCarousel.vue'
import TvShowSearchCarousel from './molecules/TvShowSearchCarousel.vue'
import TvShowCrouselMobile from './molecules/TvShowCarouselMobile.vue'
import TVShowAppName from './atoms/TVShowAppName.vue'
import { useMatches } from 'vue-responsiveness'
import { Slide } from 'vue3-burger-menu'
import { BeatLoader } from "vue3-spinner";


const matches = useMatches()

const tvShowsStore = useTvShowsStore()
const genres = ref()
const isOpen = ref(false);
genres.value = [
  'Action',
  'Adventure',
  'Comedy',
  'Drama',
  'Fantasy',
  'Romance',
  'Science-Fiction',
  'Thriller'
]
const selectedGenre = ref(null)
selectedGenre.value = 'Action'
const searchValue = ref(null)
const displaySearchedList = ref(false)

watch(searchValue, () => {
  if (searchValue.value) {
    displaySearchedList.value = true
  } else {
    displaySearchedList.value = false
  }
})

const computedTvShows = computed(() =>
  tvShowsStore?.tvShowList?.filter((show) =>
    show.genres.includes(selectedGenre.value)
  )
)

const computedSearchResult = computed(() =>
  tvShowsStore?.tvShowList?.filter((show) =>
    show.name.toLowerCase().includes(searchValue.value.toLocaleLowerCase())
  )
)

const isMobile = computed(() => matches?.current === 'xs' || matches?.current === 'sm')

const genreChange = ({ genre }) => {
  selectedGenre.value = genre
}

const closeGereSlide = () => {
  isOpen.value = false;
}
</script>
<template>

  <!-- Small screen genre list toggle -->
  <Slide closeOnNavigation :isOpen="isOpen" @closeMenu="closeGereSlide">
    <TvShowPostarCardMobile :genres="genres" @genre-change="genreChange" />
  </Slide>

  <TVShowAppName v-if="!isMobile"/>

  <TvShowsSearchBar v-model="searchValue" />
    <div v-if="isMobile" style="margin-top:5rem"></div>
  <BeatLoader
  :loading="!computedTvShows"/>
  <!-- Large device genre   -->
  <div v-if="!displaySearchedList && !isMobile && computedTvShows">
    <TvShowPostarCard :genres="genres" @genre-change="genreChange" />
  </div>
  <!-- Large screen shows carousel -->
  <div v-if="!displaySearchedList && !isMobile && computedTvShows">
    <TvShowCarousel :shows="computedTvShows" />
  </div>
  <!-- Small screen shows carousel -->
  <div v-if="!displaySearchedList && isMobile">
    <TvShowCrouselMobile :shows="computedTvShows" />
  </div>
  <!-- Omni view filter result -->
  <div v-if="displaySearchedList">
    <TvShowSearchCarousel :shows="computedSearchResult" />
  </div>
</template>
<style lang="scss">
.features {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 2% 0 5% 0;
}

.bm-burger-bars {
    background-color: hsla(160, 100%, 37%, 1) !important;
}

@media only screen and (min-width: 992px) {
  .features {
    flex-direction: row;
    width: 98%;
  }
}
</style>
