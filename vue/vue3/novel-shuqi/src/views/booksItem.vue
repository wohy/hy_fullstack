<template>
  <myheader :name="'详情'" />

  <div class="detailed">
    <div class="bookItems">
      <div class="bookImage">
        <img
          src="https://yue08.sogoucdn.com/cdn/image/book/6236482528_1600423208330.jpg"
          alt=""
        />
      </div>
      <div class="bookField">
        <div class="bookTitle">{{ booKItem.bookTitle }}</div>
        <div class="auth">作者：{{ booKItem.auth }}</div>
        <div class="fontNum">字数：{{ booKItem.fontNum }}</div>
        <div class="bookType">类型：{{ booKItem.bookType }}</div>
      </div>
    </div>
    <div class="bookDesc">
      <div class="evaluation">
        <div class="rating">
          <span class="rate">8.4</span>
          评分
        </div>
        <div class="favorites">
          <span class="fNum"
            >7
            <p>万</p></span
          >
          收藏
        </div>
        <div class="praise">
          <span class="pNum"
            >10
            <p>万</p></span
          >
          赞赏
        </div>
      </div>

      <div class="desc">{{ booKItem.desc }}</div>
    </div>
  </div>
  <van-cell title="查看目录" is-link @click="toChapter" />
  <div class="comment">
    <div class="cHeader">书友圈评</div>
    <div class="commentor" v-for="cm in booKItem.commentArr" :key="cm">
      <div class="avator">
        <img :src="cm.avatorUrl" alt="" />
        <div class="name">{{ cm.name }}</div>
      </div>
      <div class="commentC">{{ cm.content }}</div>
    </div>
  </div>

  <div class="bottom">
    <div class="downLoad">
      <i class="iconfont icon-xiazai"></i>
      下载
    </div>
    <van-button type="primary" round size="normal" @click="goToRead"
      >开始阅读</van-button
    >
    <div class="addToShelf">
      <i class="iconfont icon-jiarushujia" @click="addToShelf"></i>
      加入书架
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import myheader from "@/components/header";
// import getBooksItem from '../../novel-serve/getList/getBooksItem'
import { useRouter, useRoute } from "vue-router";
export default {
  components: {
    myheader,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const a = route.query;
    console.log(a);

    const state = reactive({
      booKItem: {
        bookTitle: "顶级高手",
        auth: "天下",
        imageUrl:
          "https://yue08.sogoucdn.com/cdn/image/book/6236482528_1600423208330.jpg",
        desc:
          "兵王之王受伤退伍回归都市，与冰山总裁未婚妻同住一个屋檐下，拉手，不准，接吻，不许，那就一起来吧。§和未婚妻闺蜜暧昧，和主妇谈人生，冒充白领丽人男朋友，扮猪吃老虎。§各路高手蜂拥而来，本想过平凡日子的叶轩很无奈，为亲人，为爱人，为兄弟，狂战天下，无所畏惧！§且看一代杀神如何纵横都市，泡妞杀人，破除阴谋，成就无上威名，美女全收，走上人生巅峰！",
        fontNum: "100000",
        bookType: "玄幻小说",
        newChapter: [],
        allChapter: [
          {
            title: "第一章冰山总裁未婚妻",
            href: "/chapter/6236482528_204356691437896/",
          },
          {
            title: "第二章欢喜冤家",
            href: "/chapter/6236482528_204356691444672/",
          },
          {
            title: "第三章剽悍的未来岳父",
            href: "/chapter/6236482528_204356691457042/",
          },
        ],
        commentArr: [
          {
            avatorUrl:
              "https://yue08.sogoucdn.com/cdn/image/book/6236482528_1600423208330.jpg",
            name: "wn",
            content: "这也太好看了吧",
          },
          {
            avatorUrl:
              "https://yue08.sogoucdn.com/cdn/image/book/6236482528_1600423208330.jpg",
            name: "蜗牛",
            content:
              "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
          },
          {
            avatorUrl:
              "https://yue08.sogoucdn.com/cdn/image/book/6236482528_1600423208330.jpg",
            name: "蜗牛",
            content:
              "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
          },
          {
            avatorUrl:
              "https://yue08.sogoucdn.com/cdn/image/book/6236482528_1600423208330.jpg",
            name: "蜗牛",
            content:
              "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
          },
        ],
      },
    });

    // onMounted(() => {
    //   getBooksItem(a.ID).then((res) => {
    //     console.log(res);
    //     state.booKItem = res
    //   })
    // })

    function goToRead() {
      const href = state.booKItem.allChapter[0].href
      // console.log(href);
      router.push({
        name: "bookContent",
        query: { href:  href},
      });
    }

    function toChapter() {
      router.push({ name: "chapter", query: { ID: a.ID } });
    }

    function addToShelf() {}

    return { ...toRefs(state), goToRead, addToShelf, toChapter };
  },
};
</script>

<style lang="less" scoped>
.detailed {
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(212, 246, 250);
  .bookItems {
    width: 100%;
    padding: 20px 10px;
    display: flex;
    flex-direction: row;
    img {
      width: 90px;
      height: 120px;
      margin-right: 10px;
      border-radius: 8%;
    }
    .bookField {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      // align-items: center;
      .bookTitle {
        font-size: 20px;
        font-weight: bold;
      }
      .auth,
      .fontNum,
      .bookType {
        font-size: 10px;
        color: rgb(163, 160, 157);
      }
    }
  }
  .bookDesc {
    background-color: #fff;
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
    padding: 20px 10px 10px 10px;

    .evaluation {
      height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .rating {
        display: flex;
        flex-direction: column;
        margin-right: 30px;
        color: rgb(196, 200, 201);
        font-size: 10px;
        height: 100%;
        .rate {
          font-weight: bold;
          font-size: 20px;
          color: black;
          margin-bottom: 5px;
        }
      }
      .favorites {
        display: flex;
        flex-direction: column;
        margin-right: 30px;
        color: rgb(196, 200, 201);
        font-size: 10px;
        height: 100%;
        .fNum {
          display: flex;
          flex-direction: row;
          font-weight: bold;
          font-size: 20px;
          line-height: 100%;
          color: black;
          margin-bottom: 5px;
          p {
            font-weight: bold;
            font-size: 15px;
            color: black;
            // line-height: 100%;
            margin: 0;
          }
        }
      }
      .praise {
        display: flex;
        flex-direction: column;
        margin-right: 30px;
        color: rgb(196, 200, 201);
        font-size: 10px;
        height: 100%;
        .pNum {
          display: flex;
          flex-direction: row;
          font-weight: bold;
          font-size: 20px;
          // line-height: 100%;
          color: black;
          margin-bottom: 5px;
          p {
            font-weight: bold;
            font-size: 15px;
            color: black;
            // line-height: 100%;
            margin: 0;
          }
        }
      }
    }
    .desc {
      margin-top: 10px;
      font-size: 125%;
      color: rgb(163, 160, 157);
    }
  }
}
.van-cell {
  font-weight: bold;
}
.comment {
  height: 250px;
  margin-top: 10px;
  padding: 20px 10px 10px 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  .cHeader {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .commentor {
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5%;
    border: 1px solid rgb(163, 160, 157);
    .avator {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 10px;
      img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }
      .name {
        font-weight: bold;
        font-size: 120%;
        color: rgb(163, 160, 157);
      }
    }
    .commentC {
      background-color: #fff;
      margin-left: 40px;
      color: rgb(163, 160, 157);
      font-size: 125%;
      margin-bottom: 20px;
      word-wrap: break-word;
      word-break: normal;
    }
  }
}
.bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .downLoad,
  .addToShelf {
    font-size: small;
    color: #1296db;
  }
  i {
    color: #1296db;
    margin-right: 3px;
  }
  .van-button {
    width: 150px;
  }
}
</style>