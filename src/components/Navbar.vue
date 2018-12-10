<template>
  <header :class="NAV_COLOR">
    <nav id="nav">
      <router-link to="/">Início</router-link> |
      <router-link to="/about">sobre</router-link> |
      <router-link to="/eps">epsódios</router-link>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['NAV_COLOR'])
  }
}
</script>
<style lang="stylus" scoped>
@import '../assets/colors'
header
  background darkLColor
  width 100vw
  position fixed
#nav
  padding 15px 30px
  display flex
  font-family monospace
  justify-content  flex-end
  align-items center
  @media screen and (max-width 600px)
    justify-content center
  a
    font-weight bold
    color white
    font-size 1.4em
    text-decoration none
    // width 50px
    text-transform capitalize
    padding 0 15px

    &.router-link-exact-active
      color primaryColor
</style>
