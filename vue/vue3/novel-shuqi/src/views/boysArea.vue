<template>
  <Page :bookList="bookList"  />
</template>

<script>
import Page from "@/components/Page.vue";
import { Toast } from "vant";
import { getHotBooks } from "@/getList/getRecommend.js";
import { onMounted, reactive, ref, toRefs } from "vue";
export default {
  components: {
    Page,
  },
  setup() {
    const state = reactive({
      bookList: [],
      images: []
    });

    onMounted(() => {
      Toast.loading({ message: "正在加载" });
      // if (!boyArr) {
        getHotBooks('nansheng').then((res) => {
          state.bookList = res
          // for (let i = 0; i < 4; i++) {
          //   state.images.push(res[i].cover);
          // }
          console.log(state.bookList);
          Toast.clear();
        });
      // }
      // console.log(getHotBooks);
    });

    return { ...toRefs(state) };
  },
};
</script>

<style>
</style>