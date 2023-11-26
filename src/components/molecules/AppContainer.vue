<script setup></script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1448px;
  margin: 0 auto;
}

@media only screen and (min-width: 1920px) {
  .container {
    max-width: 1740px;
  }
}

@media only screen and (max-width: 1000px) {
  .container {
    max-width: 800px;
    margin: 105px 36px;
  }
}
</style>
