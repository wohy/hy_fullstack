<template>
  <div class="app">
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
import header from '@/components/header/Header'
import { getSeller } from '@/api'
import qs from 'query-string'

export default {
  data () {
    return {
      seller: {
        id: qs.parse(location.search).id
      }
    }
  },
  components:  {
    'v-header': header
  },
  created() {
    getSeller({
      id: this.seller.id
    }).then((seller) => {
      console.log(seller);
      this.seller = Object.assign({}, this.seller, seller)
    })
  }
}
</script>

<style lang="stylus">

</style>