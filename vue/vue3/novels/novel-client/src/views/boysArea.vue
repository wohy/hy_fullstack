<template>
  <Page :bookList="bookList" :images="images" />
</template>

<script>
import Page from "@/components/Page.vue";
import { Toast } from "vant";
// import { getHotBooks } from "@/getList/getRecommend.js";
import { onMounted, reactive, ref, toRefs } from "vue";
export default {
  components: {
    Page,
  },
  setup() {
    const state = reactive({
      bookList: [],
      images: [],
    });

    onMounted(() => {
      Toast.loading({ message: "正在加载" });
      // getHotBooks("nansheng").then((res) => {
        state.bookList = [
          {
            title: "女总裁的顶级兵王",
            auth: "天下",
            cover:
              "//yue08.sogoucdn.com/cdn/image/book/6236482528_1600423208330.jpg",
            href: "/book/6236482528/",
            desc:
              "兵王之王受伤退伍回归都市，与冰山总裁未婚妻同住一个屋檐下，拉手，不准，接吻，不许，那就一起来吧。§和未婚妻闺蜜暧昧，和主妇谈人生，冒充白领丽人男朋友，扮猪吃老虎。§各路高手蜂拥而来，本想过平凡日子的叶轩很无奈，为亲人，为爱人，为兄弟，狂战天下，无所畏惧！§且看一代杀神如何纵横都市，泡妞杀人，破除阴谋，成就无上威名，美女全收，走上人生巅峰！",
          },
          {
            title: "武道神尊",
            auth: "冷剑",
            cover:
              "//yue08.sogoucdn.com/cdn/image/book/6232872035_1568101221739.jpg",
            href: "/book/6232872035/",
            desc:
              "中元大陆，群雄并立，万道争锋。 少年秦鸿得灵火，炼真身，闯秘境，夺造化，报血海深仇，主宰天下。 八大圣族皆为蝼蚁，各路天骄我一招轰杀！",
          },
          {
            title: "超极品兵王",
            auth: "小海鱼",
            cover:
              "//yue02.sogoucdn.com/cdn/image/book/6632080997_1548994966177.jpg",
            href: "/book/6632080997/",
            desc:
              "【火热新书】他是龙魂的最强兵王，也是佣兵界的传说，如今卸甲回归……",
          },
          {
            title: "驭房有术",
            auth: "铁锁",
            cover:
              "//yue02.sogoucdn.com/cdn/image/book/5499208069_1495794895861.jpg",
            href: "/book/5499208069/",
            desc:
              "进城闯荡的小阿姨衣锦还乡，张禹的老妈心动了，决定让儿子前去投奔。不曾想，所谓的豪宅就是一个三十平米的出租屋，更为要命的是，小阿姨经营的房产中介都快交不上房租了。 风水卖房、风水装修……张禹从乡下棺材铺王老头那里学来的奇门玄术竟然派上了用场，摇身一变成了王牌经纪人…… 兄弟、美女，买房吗？阴宅阳宅都有，包装修！ 【都市风水秘术！灵异小说中的新题材，非恐怖，适合各种口味！】 本书书友群：149661050（已满），2群：597276660（感谢美女书友墨白提供），V群：291777277（需订阅认证）。",
          },
          {
            title: "校花之贴身高手",
            auth: "寂无",
            cover:
              "//yue03.sogoucdn.com/cdn/image/book/1529267245_1547497592867.jpg",
            href: "/book/1529267245/",
            desc:
              "他，从小跟着异人修练逆天诀，进入最神秘的特种部队，成为一名令人闻风丧胆的恐怖杀手。一次失败，他提前退役，却成为了千金校花的贴身保镖，因不小心招惹到一些神秘的修真者，随后渐渐引出了一个世俗之外的修真世界……",
          },
          {
            title: "最强兵王混花都",
            auth: "朽木可雕",
            cover:
              "//yue07.sogoucdn.com/cdn/image/book/6431752801_1562824939984.jpg",
            href: "/book/6431752801/",
            desc:
              "一个从华夏国最森严的监狱里逃亡出来的男人，于嬉笑怒骂中一路高歌猛进，挟腥风血雨横扫一切。一个青年凭着自己的一腔热血，在一个生死交替的年代里，一步步的拼出一片属于自己的天空。当有一天他登上颠峰，蓦然回首：翻云覆雨的权势，富可敌国的财富，倾城倾国的美人……一切都尽在脚下！那个时候，我该追求什么？",
          },
          {
            title: "假婚真爱，总裁的心尖宠妻",
            auth: "杨四儿",
            cover:
              "//yue05.sogoucdn.com/cdn/image/book/6229863435_1497412604537.jpg",
            href: "/book/6229863435/",
            desc:
              "未婚夫和堂姐酒店偷情，她忍着愤怒躲进床底。 岂料，自称是堂姐男友的男人也在。 床上狗男女激烈缠绵，床下他搂着她在她耳边低声戏谑，“你未婚夫睡了我女友，你说我要不要把你睡回来？” 一纸婚书把两人绑在一起，她需要钱，他需要为期两年的婚姻。 他却把她爱入心，疼入骨，宠上云端，谁都知道秦初夏这个女人不能惹，那怕是一丝一毫。",
          },
          {
            title: "超级搬砖狂少",
            auth: "狐大仙森",
            cover:
              "//yue01.sogoucdn.com/cdn/image/book/108402712_1585753342164.jpg",
            href: "/book/108402712/",
            desc:
              " 赫然他带着一腔热血，从海外归来。迎接他的居然是一个未婚妻！ 他身怀绝技，他还有无比高大上的天医珠，包治百病让华佗扁鹊都羞愧。 看四面豪杰八方美女如何臣服！ ",
          },
          {
            title: "夜场",
            auth: "厚积薄发",
            cover:
              "//yue03.sogoucdn.com/cdn/image/book/6429614393_1562824942676.jpg",
            href: "/book/6429614393/",
            desc:
              "我本是高考的理科状元，一次意外到了夜场工作。从此美女不断，阴谋重重。是谁在主导着这一切？纸醉金迷的生活让我慢慢开始迷失…… ……",
          },
          {
            title: "我的绝色美女房客",
            auth: "炒酸奶",
            cover:
              "//yue07.sogoucdn.com/cdn/image/book/3340918785_1558569050036.jpg",
            href: "/book/3340918785/",
            desc: "这小小的四合院，住着一群租房客，而陈阳则是房东。",
          },
          {
            title: "超品小医神",
            auth: "秦不二",
            cover:
              "//yue02.sogoucdn.com/cdn/image/book/5546306616_1548987275394.jpg",
            href: "/book/5546306616/",
            desc:
              "神针在手，美女我有。从深山小山村出来的少年，拥有神奇医术，绝世武功，为了寻找大师姐闯入花花都市， 新书《都市天龙至尊》已发布！",
          },
          {
            title: "乡野韵事",
            auth: "奏月情伤",
            cover:
              "//yue08.sogoucdn.com/cdn/image/book/122843976_1489644864088.jpg",
            href: "/book/122843976/",
            desc:
              "一个乡野少年，一段传奇经历，一场梦寐人生，穷算什么，苦算什么，我虽弱小，但莫欺我少年。",
          },
          {
            title: "斗罗大陆",
            auth: "唐家三少",
            cover:
              "//yue06.sogoucdn.com/cdn/image/book/2164176249_1592846169768.jpg",
            href: "/book/2164176249/",
            desc:
              "　　唐门外门弟子唐三，因偷学内门绝学为唐门所不容，跳崖明志时却发现没有死，反而以另外一个身份来到了另一个世界，一个属于武魂的世界，名叫斗罗大陆。这里没有魔法，没有斗气，没有武术，却有神奇的武魂。这里的每个人，在自己六岁的时候，都会在武魂殿中令武魂觉醒。武魂有动物，有植物，有器物，武魂可以辅助人们的日常生活。而其中一些特别出色的武魂却可以用来修炼并进行战斗，这个职业，是斗罗大陆上最为强大也是最荣耀的职业——魂师! 　　当唐门暗器来到斗罗大陆，当唐三武魂觉醒，他能否在这片武魂的世界再铸唐门的辉煌？他能否成为这个世界的主宰：神?",
          },
          {
            title: "女总裁的超级兵王",
            auth: "挥墨客",
            cover:
              "//yue07.sogoucdn.com/cdn/image/book/6229820199_1497412603132.jpg",
            href: "/book/6229820199/",
            desc:
              "曾经佣兵世界的王者，一手握生死，一掌定乾坤； 被逼回国与美女总裁相亲，醉卧美人群。 超级兵王低调归来，却无意招惹到火辣迷人的女警花，清纯美丽的女教师，还有那刁蛮任性的小萝莉…… 他拳打富二代、脚踩古武世家，凭借自身能力为美女排忧解难。 无论情场还是战场，叶飞永远是美女心中的男神，他的人生就是一部完美传奇！ 小墨的兄弟姐妹们 423131707 欢迎大家进来讨论剧情哈！",
          },
          {
            title: "医武神相",
            auth: "爱恨雾气",
            cover:
              "//yue07.sogoucdn.com/cdn/image/book/6229756033_1497412601672.jpg",
            href: "/book/6229756033/",
            desc:
              " “不错，没钱没势，是我留不住你，但是，谁敢保证我一辈子碌碌无为！”李凌在心中雄心壮志的说道。 一部《昊天决》造就一代天帝，更是成就一代传奇人物，让这天都在他的脚下颤抖。",
          },
          {
            title: "超级村医",
            auth: "蓝蓝天空",
            cover:
              "//yue07.sogoucdn.com/cdn/image/book/6580752912_1502422492931.jpg",
            href: "/book/6580752912/",
            desc:
              "一名三流的村医，无意中得到一本古旧小抄，居然有女神入梦来，从此他时来运转，奇遇不断，看一个小人物如何平步���云，攀上权力的巅峰，看一个小人物如何妙手回春，成为一代神医！ 活死人生白骨，翻云覆雨，一切精彩尽在超级村医！！！",
          },
          {
            title: "我的高冷未婚妻",
            auth: "一道虚光",
            cover:
              "//yue03.sogoucdn.com/cdn/image/book/5248436998_1575367440258.jpg",
            href: "/book/5248436998/",
            desc:
              "林铭身兼神医、兵王、厨神等多个身份，回归都市，披荆斩棘，创下基业。 ",
          },
          {
            title: "拣宝",
            auth: "烛",
            cover:
              "//yue06.sogoucdn.com/cdn/image/book/2360853082_1570642949875.jpg",
            href: "/book/2360853082/",
            desc:
              "　　 　　别人打眼的时候，他在拣漏；别人拣漏的时候，他却在拣宝！ 　　商鼎周彝、和璧隋珠、战国错金玉带钩；秦俑汉陶、晋帖唐画、宋瓷缂丝漆器秀；竹木牙角、花梨紫檀，包罗万象在手中。 　　一枚如意金钱，造就了一位大收藏家，也书写了一段传奇！ 　　",
          },
        ];
        for (let i = 0; i < 4; i++) {
          state.images.push(`https:${state.bookList[i].cover}`);
        }
        // console.log(state.images);
        Toast.clear();
      // });
      // console.log(getHotBooks);
    });

    return { ...toRefs(state) };
  },
};
</script>

<style>
</style>