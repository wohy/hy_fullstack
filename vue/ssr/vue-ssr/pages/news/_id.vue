<template>
  <div>
    <h2>news-content</h2>
    <p>NewsId: {{$route.params.newsId}}</p>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  }
}
</script>

<style>

</style>