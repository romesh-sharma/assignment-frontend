<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <input
    v-bind="$attrs"
    ref="input"
    name="search"
    class="search-box"
    v-model="inputValue"
    placeholder="Find by TV show name..."
    autocomplete="off"
  />
</template>

<style lang="scss" scoped>
@media only screen and (min-width: 1000px) {
.search-box {
  padding: 0.5em;
    line-height: 1.5em;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 0.125rem;
    position: absolute;
    top: 28px;
    right: 15px;
}
}

@media only screen and (min-width: 1920px) {
  .search-box {
    left: 69%;
  }
}

@media only screen and (max-width: 960px) {
  .search-box {
    right: 15px;
    top: 36px;
    padding: 0.5em;
    line-height: 1.5em;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 0.125rem;
    position: absolute;
  }
}
</style>
