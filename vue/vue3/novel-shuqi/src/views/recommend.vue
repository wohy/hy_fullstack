<template>
  <Page :images="images" :bookList="bookList"/>
</template>

<script>
import { reactive, toRefs } from "vue";
import Page from '@/components/Page'
// import getList from "../getList/getRecommend.js";
export default {
  components: {
    Page
  },
  setup() {
    const state = reactive({
      bookList: [
        {
          title: "福运小娇娘，作精不下堂",
          auth: "苏云笙",
          cover: "https://img-tailor.11222.cn/bcv/big/1196758302207.jpg",
          href: "/cover?bid=8302207",
          desc:
            "崔良玉她本出身名门，艳绝京华。 \n奈何她错信他人，不得不委身作妾，最后落得个家破人亡，被夫君折辱至死",
        },
        {
          title: "重生八零做学霸",
          auth: "果乐",
          cover: "https://img-tailor.11222.cn/bcv/big/1134758300561.jpg",
          href: "/cover?bid=8300561",
          desc:
            "医学女博士一朝穿越，成为八零年代的丑村姑，肥胖貌丑脾气暴，公婆不疼老公不爱，人人笑称猪八戒，极品嫂子",
        },
        {
          title: "专宠小弃妃：殿下，别闹",
          auth: "我叫紫霞",
          cover: "https://img-tailor.11222.cn/bcv/big/1148187993773.jpg",
          href: "/cover?bid=7993773",
          desc:
            "上一世的孽缘，让我这一辈子来偿还，不求繁花似锦享天下，只求淡云流水共此��。",
        },
        {
          title: "一不小心捡到个总裁",
          auth: "纯风一度",
          cover: "https://img-tailor.11222.cn/bcv/big/1185516906871.jpg",
          href: "/cover?bid=6906871",
          desc:
            "顾安心无意中捡到了一个男人。\n她以为这个男人是个智障，数日后，他被证明是个天才；\n她以为这个男人是个",
        },
        {
          title: "第一战神",
          auth: "我本纯洁",
          cover: "https://img-tailor.11222.cn/bcv/big/1152057151431.jpg",
          href: "/cover?bid=7151431",
          desc:
            "千万级销量作家我本纯洁火爆玄幻作品来袭——少年杨武遭美女陷害入狱，侥幸获神犬之助，破狱场，驰沙场，揽",
        },
        {
          title: "绝世医帝",
          auth: "一匹青瓦",
          cover: "https://img-tailor.11222.cn/bcv/big/1173637847453.jpg",
          href: "/cover?bid=7847453",
          desc:
            "　　无法修行，却悟得绝世医术，炼药炼丹，如吃饭喝水，九品帝丹更是信手炼来。\n　　医道通神的云墨，培养",
        },
        {
          title: "鬼医神农",
          auth: "三尺神剑",
          cover: "https://img-tailor.11222.cn/bcv/big/1115837137410.jpg",
          href: "/cover?bid=7137410",
          desc:
            "【百万读者推荐！阿里精品好书！】医术能救人，也能杀人。李林获得神秘空间，医术能力提高，开始游走乡村城",
        },
        {
          title: "仙府小神医",
          auth: "老婆爱我",
          cover: "https://img-tailor.11222.cn/bcv/big/1123887034781.jpg",
          href: "/cover?bid=7034781",
          desc:
            "辍学青年叶福贵，继承了父亲的小诊所，机缘巧合之下，获得了一座上古仙府，神农，采集，制药突飞猛进，更是",
        },
        {
          title: "我的脑海里有人",
          auth: "豆甜甜",
          cover: "https://img-tailor.11222.cn/bcv/big/1191887801489.jpg",
          href: "/cover?bid=7801489",
          desc: "说出来你可能不信，我的脑海里有人……",
        },
        {
          title: "天降萌神",
          auth: "染染染冉",
          cover: "https://img-tailor.11222.cn/bcv/big/201712051650225125.jpg",
          href: "/cover?bid=7430246",
          desc:
            "家中凭空��现了一个男人，一丝不挂的躺在了自家沙发上抛媚眼，开口就说着：“我是神仙。”\n \nOk，",
        },
        {
          title: "亲爱的汪星人",
          auth: "脚趾头",
          cover: "https://img-tailor.11222.cn/bcv/big/1107267792618.jpg",
          href: "/cover?bid=7792618",
          desc:
            "前任修理师胡小朵因被雷劈结识了来自汪星球的修灵尘，他告诉胡小朵被雷劈后自己中了魔咒，一旦离开她，就会",
        },
        {
          title: "恶魔女与鬼畜男",
          auth: "悲伤的咸鱼",
          cover: "https://img-tailor.11222.cn/bcv/big/1174357668235.jpg",
          href: "/cover?bid=7668235",
          desc:
            "这是一个善良的恶魔女与鬼畜的恶魔男（人类）以及他的后宫们一起生活的故事",
        },
      ],
      images: [
        "https://img-tailor.11222.cn/bcv/big/1185516906871.jpg",
        "https://img-tailor.11222.cn/bcv/big/1174357668235.jpg",
        "https://img-tailor.11222.cn/bcv/big/1191887801489.jpg",
        "https://img-tailor.11222.cn/bcv/big/1123887034781.jpg",
      ],
    });
    // state.bookList = getList();
    return { ...toRefs(state) };
  },
};
</script>

<style lang="less">

</style>