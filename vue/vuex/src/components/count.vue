<template>
  <div class="count">
    <h3>{{$store.state.a.count}}</h3>
    <h2>{{count}}</h2>
    <h2>{{newCount}}</h2>
    <p>
      <button @click="add(10)">add</button>
      <!-- <button @click="addActions(5)">add</button> -->
      <button @click="reduce">reduce</button>
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      msg: ''
    }
  },
  // computed: {
  //   newCount () {
  //     return this.$store.state.count * 2
  //   }
  // }
  // computed: mapState({
  //   newCount: state => state.count * 3
  // }),
  computed: {
    ...mapState(['count']),
    ...mapGetters(['newCount'])
  },
  // methods: mapMutations(['add', 'reduce'])
  methods: {
    test() {},
    // ...mapMutations(['reduce']),
    ...mapMutations(['add','reduce']),
    ...mapActions(['addActions'])
  }
}
</script>

<style>

</style>