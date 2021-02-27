<template>
  <myheader :name="'目录'" />
  <div class="chapterBox">  
    <van-cell is-link  v-for="items in chapter" :key="items.title" :title="items.title" @click="toBookContent(items.href)" /> 
  </div>
</template>

<script>
import myheader from "@/components/header";
import { useRoute, useRouter } from 'vue-router';
import { reactive, toRefs } from 'vue';

export default {
  components: {
    myheader,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const bookId = route.query;
    console.log(bookId);

    const state = reactive({
      chapter: [
        {
          title: '第一章冰山总裁未婚妻',
          href: '/chapter/6236482528_204356691437896/',
        },
        {
          title: '第二章欢喜冤家',
          href: '/chapter/6236482528_204356691444672/',
        },
        {
          title: '第三章剽悍的未来岳父',
          href: '/chapter/6236482528_204356691457042/',
        },
      ]
    })

    function toBookContent(i) {
      router.push({name: 'bookContent', query: {href: i}})
    }
    return { ...toRefs(state), toBookContent }
  },
};
</script>

<style lang="less" scoped>
.chapterBox {
  margin-top: 40px;
}
</style>