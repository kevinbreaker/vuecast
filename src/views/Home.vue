<template>
  <div class="home"
       v-scroll="dx">
    <main-screen class="section"
                msg="Welcome to Your Vue.js App" />
    <last-ep class="section" />
  </div>
</template>

<script>
// @ is an alias to /src
import MainScreen from '~/MainScreen.vue'
import LastEp from '~/LastEp.vue'
import scrollSnapPolyfill from 'css-scroll-snap-polyfill'

export default {
  name: 'Home',
  components: {
    MainScreen,
    LastEp
  },
  mounted () {
    scrollSnapPolyfill()
  },
  methods: {
    dx (d) {
      console.log(d)
      console.log(' d ')
    }
  }
}
</script>
<style lang="stylus" scoped>
.home
  height 100vh
  scroll-snap-type mandatory
  overflow-y scroll
  overflow-x hidden
  scroll-snap-points-y repeat(100vh)
  scroll-snap-type y mandatory
  -webkit-scroll-snap-type mandatory
  -webkit-scroll-snap-points-y repeat(100vh)
  -webkit-scroll-snap-type y mandatory
  -moz-scroll-snap-type mandatory
  -moz-scroll-snap-points-y repeat(100vh)
  -moz-scroll-snap-type y mandatory

.section
  scroll-snap-align start
  -webkit-scroll-snap-align start
  -moz-scroll-snap-align start
</style>
