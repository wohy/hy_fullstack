<template>
  <Page :bookList="bookList" :images="images" />
</template>

<script>
import Page from "@/components/Page.vue";
import { Toast } from "vant";
import { getList } from '../../axios/interface/getBooklist'
import { onBeforeMount, onMounted, reactive, ref, toRefs } from "vue";
export default {
  components: {
    Page,
  },
  setup() {
    const state = reactive({
      bookList: [],
      images: [],
    });

    onBeforeMount(() => { 
      getList().then(res => {
        console.log(res);
      })
    });

    return { ...toRefs(state) };
  },
};
</script>

<style>
</style>