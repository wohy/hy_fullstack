<template>
  <div class="confirm-data">
    <button @click="isOpen = true">打开</button>
    <!-- 使该结构渲染到public的index中 id 为 foot-container的DOM容器中 -->
    <teleport to="#foot-container">
      <div v-if="isOpen">
        <p>dddddddddd</p>
        <button @click="isOpen = false">取消</button>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let isOpen = ref(true)

    return { isOpen }
  }
}
</script>

<style>

</style>