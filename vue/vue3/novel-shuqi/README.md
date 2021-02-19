# 问题
1. 数据跨域问题 cheerio
2. vue获取DOM结构
  - 我们通过给元素绑定ref=“XXX”，然后通过this.$refs.XXX或者this.refs['XXX']来获取

  ```
  <div class="desc" ref="desc">{{ item.desc }}</div>
  setup( {
    let desc = ref(null)
    onMounted(() => {
      console.log(desc.value);
    })
  })

3. 路由传参
4. 服务器端
