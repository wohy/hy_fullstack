<template>
  <div class="container">
    <ul>
      <li><nuxt-link :to="{name: 'index'}">HOME</nuxt-link></li>
      <li><nuxt-link :to="{name: 'about'}">ABOUT</nuxt-link></li>
      <li><nuxt-link :to="{name: 'news', params: {newsId: 1234}}">NEWS</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style>
