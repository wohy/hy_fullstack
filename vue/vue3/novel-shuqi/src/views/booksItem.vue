<template>
  <div class="bookItems">
    <div class="bookImage">
      <img src="https://yue08.sogoucdn.com/cdn/image/book/6236482528_1600423208330.jpg" alt="">
    </div>
    <div class="bookField">
      <div class="bookTitle">{{booKItem.bookTitle}}</div>
      <div class="auth">作者：{{booKItem.auth}}</div>
      <div class="fontNum">字数：{{booKItem.fontNum}}</div>
      <div class="bookType">类型：{{booKItem.bookType}}</div>
    </div>
  </div>
  <div class="bookDesc">
    <div class="favorites">
      <span class="fNum">7</span>
      <span class="fUnit">万</span>
      收藏
    </div>
    <div class="rating">
      <span>评分</span>
    </div>
    <div class="praise">
      <span class="pNum">10</span>
      <span class="pUnit">万</span>
    </div>
    <div class="desc">{{booKItem.desc}}</div>  
  </div>
  <div class="comment">
    <div class="cHeader">书友圈评</div>
    <div class="avator">
      <img src="https://yue08.sogoucdn.com/cdn/image/book/6236482528_1600423208330.jpg" alt="">
      <div class="name">蜗牛</div>
      <div class="commentC">
        这也太好看了
      </div>
    </div>
  </div>
  
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
// import getBooksItem from '../../novel-serve/getList/getBooksItem'
import { useRouter,useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    const a = route.query
    console.log(a);

    const state = reactive({
      booKItem:{
        bookTitle: '顶级高手',
        auth: '天下',
        imageUrl: 'https://yue08.sogoucdn.com/cdn/image/book/6236482528_1600423208330.jpg',
        desc: '兵王之王受伤退伍回归都市，与冰山总裁未婚妻同住一个屋檐下，拉手，不准，接吻，不许，那就一起来吧。§和未婚妻闺蜜暧昧，和主妇谈人生，冒充白领丽人男朋友，扮猪吃老虎。§各路高手蜂拥而来，本想过平凡日子的叶轩很无奈，为亲人，为爱人，为兄弟，狂战天下，无所畏惧！§且看一代杀神如何纵横都市，泡妞杀人，破除阴谋，成就无上威名，美女全收，走上人生巅峰！',
        fontNum: '100000',
        bookType: '玄幻小说',
        newCapter: [],
        allCapter: []
      }
    })

    // onMounted(() => {
    //   getBooksItem(a.ID).then((res) => {
    //     console.log(res);
    //     state.booKItem = res
    //   })
      
    // })

    return { ...toRefs(state) }
  }
}
</script>

<style lang="less" scoped>
.bookItems {
  padding: 10px;
  display: flex;
  flex-direction: row;
  background-color: rgb(150, 214, 223);
  img{
    width: 90px;
    height: 120px;
    margin-right: 10px;  
    border-radius: 8%;
  }
  .bookField {
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    // align-items: center;
    .bookTitle {
      font-size: 150;
      font-weight: bold;
    }
    .auth {
      font-size: small;
      color: rgb(218, 214, 209);
    }
    .fontNum {
      font-size: small;
      color: rgb(218, 214, 209);
    }
    .bookType {
      font-size: small;
      color: rgb(218, 214, 209);
    }
  }

}
</style>