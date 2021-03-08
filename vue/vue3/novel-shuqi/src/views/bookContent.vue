<template>
  <div id="box">
    <div class="wrapper" ref="wrapper" v-for="item in chapter" :key="item.chapterNum">
      <h1 class="title">{{ item.chapterNum }}&emsp;{{ item.chapterTitle }}</h1>
      <p class="content" v-for="index in item.content" :key="index.content">
        &emsp;&emsp;{{ index }}
      </p>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const bookId = route.query;
    let wrapper = ref(null)
    console.log(bookId);

    const state = reactive({
      chapter: [
        {
          chapterNum: "第一章",
          chapterTitle: "冰山总裁未婚妻",
          content: [
            "清晨，柔和的阳光透过窗台洒在叶轩的房间，叶轩才慢慢的穿上衣服裤子，舒展了一下筋骨道：“老妈也真是的，我都不知道从哪里就突然冒出一个定了娃娃亲的未婚妻来！”",
            "大清早的也没有几个人，叶轩直接排号到柜台办理业务，刚坐下来叶轩心中一突，一股危险的感觉就袭上了心头。",
            "“先去银行取点钱，这见未婚妻总不能够太寒酸了。”哼着军歌出门，叶轩慢悠悠的走向旁边的工商银行。",
            "“都不准动，打劫。”四名头上戴着黑色头套的家伙站在银行门口，手中拿着地下工厂仿制的匪铳，也就是AK47，十分嚣张的叫嚣着。",
            "“啊！”所有的人看到这一幕都惊呆了，大清早的居然碰到抢劫银行的了，有两个胆小的女人直接就吓的尖叫起来。",
            "“砰！”的一声铳响，刚才喊话那人说道：“谁再叫老子一铳干掉他，现在开始打劫，把钱都拿出来，别想着报案，老子敢来就不怕你们报案，大不了拉上你们一起垫背。”",
          ],
        },
      ],
    });
    onMounted((wrapper) => {
      
    })

    return { ...toRefs(state) };
  },
};
</script>

<style lang="less" scoped>
#box {
  // padding: 5px;
  height: 100%;
  background-color: rgb(247, 245, 233);
  background-repeat: no-repeat;
}
.wrapper {
  height: 100%;
  overflow: hidden;
  margin: 0px 8px;
  font-size: large;
  font-weight: 120px;
  line-height: 30px;
  text-shadow: 0 0px 2px rgb(59, 57, 57);
  .title {
    font-size: 150%;
  }
}
.content {
  border: none;
  overflow: visible;
}
</style>