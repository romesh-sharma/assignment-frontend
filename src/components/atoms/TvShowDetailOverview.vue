<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({
  tvShow: {
    type: Object,
    default: () => {}
  }
})

const router = useRouter()

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div>
    <button type="button" class="back_btn btn-position" @click="goBack(genre)">
      <svg
        class="return-icon"
        viewBox="0 0 24 24"
        role="img"
        aria-label="Return to home page."
      >
        <title>Return to home page.</title>
        <path
          d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
        ></path>
      </svg>
      Return to home
    </button>
  </div>
  <img
    class="image-hover"
    :src="props?.tvShow?.image?.medium"
    alt="Show Poster"
  />
  <div class="">{{ props?.tvShow?.name }}</div>
  <div>
    <span class="" v-for="(genre, index) in props?.tvShow?.genres" :key="genre">
      {{ genre }}
      <span v-if="index !== props?.tvShow?.genres.length - 1">, </span>
    </span>
  </div>
  <div class="">
    <span>IMDB rating: </span> {{ props?.tvShow?.rating?.average }}
  </div>
  <div v-html="props?.tvShow?.summary"></div>
</template>

<style lang="scss" scoped>
.back_btn {
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  min-width: 100px;
  padding: 0.5rem 1rem;
  border-radius: 0.125rem;
  height: 40px;
  line-height: 16px;
  appearance: button;
  cursor: pointer;
}

.return-icon {
  width: var(--vc-icn-width);
  height: var(--vc-icn-width);
  fill: currentColor;
  vertical-align: bottom;
}

.btn-position {
  position: absolute;
  top: 3%;
}
</style>
