<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import { useRouter } from 'vue-router'
const props = defineProps({
  shows: {
    type: Array,
    default: () => []
  }
})
const router = useRouter()


</script>
<template>
  <Carousel>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
    <Slide v-for="show in props.shows" :key="show.id">
      <a
        class="carousel__item"
        @click="router.push({ path: `/show-overview/${show.id}` })"
      >
        <img
          class="image-hover"
          :src="show.image.medium"
          alt="TV Show Poster"
        />
        <div>{{ show.name }}</div>
      </a>
    </Slide>
  </Carousel>
</template>
<style lang="scss">
.carousel__item {
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.carousel__prev {
  box-sizing: content-box !important;
  border: 5px solid white;
  background: black;
}
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  background: black;
}

.carousel__pagination {
  overflow: hidden;
}

.image-hover:hover {
  opacity: 0.5;
}

.carousel__icon {
  fill: hsla(160, 100%, 37%, 1);
}

.bm-burger-button {
  left: 18px !important;
}

@media only screen and (max-width: 960px) {
.carousel__track {
    display: flex;
    padding: 0 !important;
    position: relative;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
}
}
</style>
