<template>
  <div class="main">
    <div class="descri">
      <span class="loguscast">LogusCast</span>
      <span class="des">Podcast de informações da LogusTech</span>
    </div>
    <img class="scroll"
         src="@/assets/scrolldown.svg" />
  </div>
</template>

<script>
export default {
  name: 'HomeP',
  methods: {}
}
</script>
<style lang="stylus" scoped>
.scroll
  position relative
  top 40vh

.descri
  background rgba(27, 27, 27, 0.5)
  display flex
  flex-direction column
  justify-content center
  align-items center

.loguscast
  color white
  font-size 2.4em
  font-weight 550
  background rgba(27, 27, 27, 0.5)

.des
  color white
  font-size 1.2em
  font-weight 450
  background rgba(27, 27, 27, 0.5)

.main
  display flex
  flex-direction column
  justify-content center
  align-items center
  // height calc(100vh - 80px)
  height 100vh
  background-image url('https://cdn.dribbble.com/users/274482/screenshots/4252698/pb_3.png')
  background-repeat no-repeat
  background-position center
  background-color #1b1b1b
  background-size contain

  @media (max-width: 600px)
    background-size cover

@keyframes fluid
  from
    filter hue-rotate(0)
    background-position 10% 50%

  to
    background-position 280% 50%
    filter hue-rotate(360deg)
</style>
