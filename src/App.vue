<template>
  <div id="app">
    <!-- <navbar /> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <audio controls> -->
      <!-- <source src="horse.ogg" type="audio/ogg"> -->
      <!-- <source src="./assets/episodes/003-arquitetura-e-estruturcao-de-projetos.mp3" type="audio/mpeg">Your browser does not support the audio element.
    </audi/o> -->
    <player :image="img" :title="title" :host="host"/>
    <!-- <router-view/> -->
  </div>
</template>
<script>
// import Navbar from '~/Navbar'
import Player from '~/Player'
export default {
  components: {
    // Navbar,
    Player
  },
  data: () => ({
    title: 'comunicação entre components',
    host: 'William Correia',
    img: 'https://raw.githubusercontent.com/vuejs-br/podcast-source-files/master/s2018/004-comunicacao-entre-componentes-events-props.jpg'
  })
}
</script>

<style lang="stylus">
*
  margin 0
  padding 0

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px

  a
    font-weight bold
    color #2c3e50

    &.router-link-exact-active
      color #42b983
</style>
