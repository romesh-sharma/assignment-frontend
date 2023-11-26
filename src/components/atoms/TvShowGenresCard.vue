<script setup>
import { ref } from 'vue'
const emit = defineEmits(['genre-change'])
const props = defineProps({
  genres: {
    type: Array,
    default: () => []
  }
})

const selectedGenre = ref()
selectedGenre.value = 'Action'

const onClick = (genre) => {
  if (selectedGenre.value !== genre) {
    emit('genre-change', {
      genre
    })
    selectedGenre.value = genre
  }
}
</script>

<template>
  <div class="features font spacing content-wrapper">
    <button
      type="button"
      class="genre_btn"
      v-for="genre in props.genres"
      :key="genre"
      :class="{
        'btn-active': genre === selectedGenre
      }"
      @click="onClick(genre)"
    >
      {{ genre }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.content-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.genre_btn {
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  font-size: 1rem;
  transition:
    color 0.15s ease-in-out 0s,
    background-color 0.15s ease-in-out 0s,
    border-color 0.15s ease-in-out 0s,
    box-shadow 0.15s ease-in-out 0s;
  min-width: 143px;
  padding: 0.5rem 1rem;
  border-radius: 0.125rem;
  height: 38px;
  line-height: 16px;
  appearance: button;
  cursor: pointer;
  &.btn-active {
    border-bottom: 4px solid #e50914;
  }
}
</style>
