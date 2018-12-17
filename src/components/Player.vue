<template>
  <div>
    <div class="container">
      <div class="player" :style="{backgroundImage: `url(${image})`}">
        <div class="like waves-effect waves-light">
          <img src="../assets/info.svg" alt srcset>
        </div>
        <div class="mask"></div>
        <ul v-show="!active" class="player-info info-one" style="text-align: left; padding-left: 10px">
          <li>
            <strong>VueCast</strong>
          </li>
          <li>{{title}}</li>
          <li>{{host}}</li>
          <li>{{timing}}</li>
        </ul>
        <ul class="player-info info-two" :class="active ? 'info-active' : ''">
          <li>{{title}}</li>
          <li>{{host}}</li>
          <li>
            <span id="duration"></span>
              {{timing}}/ {{leftTiming}}
          </li>
        </ul>
        <div v-show="!active" @click="togglePlay" id="play-button" :class="active ? 'play-inactive' : 'unchecked'" style="display: flex; align-items: center; justify-content: center">
          <img style="height: 50px" src="../assets/play.svg" alt srcset>
        </div>
        <div class="control-row">
          <div v-show="active" class="waves-animation-one"></div>
          <div v-show="!active" class="waves-animation-two"></div>
          <div @click="togglePlay" v-show="active" id="pause-button" :class="active ? 'scale-animation-active' : ''">
            <img style="width: 100%" :src="buttonPlay" alt>
          </div>
          <div v-show="active" class="seek-field">
            <input
              id="audioSeekBar"
              min="0"
              :max="durationTime"
              step="1"
              :value="currentTime"
              type="range"
              @input="audioSeekBar"
              @change="seekB"
            >
          </div>
          <div v-show="active" class="volume-icon">
            <img :src="volumeImg" alt="" srcset="">
          </div>
          <div v-show="active" class="volume-field">
            <input
              type="range"
              min="0"
              max="100"
              value="100"
              step="1"
              @change="volume"
            >
          </div>
          <div class="close" @click="close"><img src="../assets/close.svg" alt=""></div>
        </div>
      </div>
    </div>
    <audio ref="player" id="audio-player" @timeupdate="seekBar" @durationchange="duration" preload="auto" loop>
      <source src="../assets/episodes/003-arquitetura-e-estruturcao-de-projetos.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    host: String
  },
  data: () => ({
    active: false,
    played: false,
    time: '00:00',
    currentTime: '',
    durationTime: 0,
    vol: 1
  }),
  mounted () {
    this.$nextTick(() => {
      console.log(this.$refs.player.duration, 'hehe')
    })
  },
  computed: {
    volumeImg () {
      if (this.vol >= 0.7) return require('../assets/volume.svg')
      else if (this.vol < 0.7 && this.vol > 0) return require('../assets/volume_less.svg')
      else return require('../assets/muted.svg')
    },
    buttonPlay () {
      return this.played
        ? require('../assets/pause-outline.svg')
        : require('../assets/play-circle.svg')
    },
    timing () {
      const timeLeft = this.timingLeft(this.durationTime * 1000)
      return `${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`
    },
    leftTiming () {
      console.log(' .-. pqp man')
      const timeLeft = this.timingLeft(this.currentTime * 1000)
      console.log(`${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`)
      return `${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`
    }
  },
  watch: {
    '$refs.player' (v) {
      console.log(v)
      this.vol = v
    }
  },
  methods: {
    close () {
      this.active = false
      this.played = false
      this.$refs.player.pause()
    },
    volume (value) {
      this.vol = value.target.value / 100
      document.getElementById('audio-player').volume = value.target.value / 100
    },
    duration (e) {
      console.log('muda muda')
      console.log(e.target.duration)
      this.durationTime = e.target.duration
    },
    audioSeekBar (x) {
      console.log(' SEEK ', x.target.value)
    },
    seekB (e) {
      console.log('eirjweoir')
      console.log(e.target.value)
      this.$refs.player.currentTime = e.target.value
    },
    seekBar (d) {
      console.log(' seekBar muda muda ')
      console.log(d.target.currentTime)
      this.currentTime = d.target.currentTime
    },
    togglePlay () {
      this.active
        ? this.active = true
        : this.active = true
      this.played = !this.played
      this.played
        ? this.$refs.player.play()
        : this.$refs.player.pause()
    },
    calculateTiming (val, step, overflow) {
      return overflow
        ? ~~(Math.floor(val / step) % overflow)
        : Math.floor(val / step)
    },
    timingLeft (ms) {
      console.log('Executei')
      return {
        milliseconds: this.calculateTiming(ms, 1, 1000),
        seconds: this.calculateTiming(ms, 1000, 60),
        minutes: this.calculateTiming(ms, 60000, 60),
        hours: this.calculateTiming(ms, 3600000, 24)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
body
  font-family Roboto
  background-color #bbdefb

.container
  position absolute
  width 100%
  height 100%
  // display flex
  // align-items center
  // justify-content center

.player
  position relative
  background-color #ffffff
  background-size 50% 70%
  // background-position center
  background-repeat no-repeat
  background-color #34495e
  width 550px
  height 375px
  border-radius 3px
  border-bottom 6px solid #41b883
  box-shadow 0 0 20px 3px rgba(0, 0, 0, 0.5)
  z-index 1

  &:hover .mask
    background-color rgba(255, 255, 255, 0.1)
    transition all 1s

  & .like
    position absolute
    width 35px
    height 35px
    top 15px
    right 20px
    z-index 15
    font-size 1.5em
    vertical-align middle
    line-height 38px
    color #f2f2f2
    border-radius 50%
    text-align center
    cursor pointer

  & .icon-heart
    display block

  & .mask
    width 100%
    height 100%
    background-color rgba(255, 255, 255, 0.2)
    z-index 2
    transition all 1s

  &-info
    position absolute
    left 0
    bottom 0
    z-index 4
    list-style none
    color #262626
    transform scale(1)

    & li
      margin-bottom 7px

    & li:nth-child(1)
      font-size 1.5em

    & li:nth-child(2)
      font-size 1.2em

    & li:nth-child(3)
      font-size 0.9em

  & .info-two
    left auto
    width 250px
    right 4.5%
    z-index 1
    color #f2f2f2
    & li:nth-child(1)
      text-align end
    & li:nth-child(2)
      text-align end

    & li:nth-child(3)
      text-align end

  & #play-button
    box-sizing border-box
    position absolute
    diplay flex
    justify-content center
    align-content center
    width 80px
    height 80px
    border-radius 50%
    background-color #41b883
    box-shadow 0 8px 25px 6px rgba(0, 0, 0, 0.5)
    right 40px
    bottom 90px
    z-index 5
    cursor pointer
    transition all 70ms
    border none

    &:hover
      width 70px
      height 70px
      box-shadow 0 4px 15px 0 rgba(0, 0, 0, 0.5)
      right 45px
      bottom 95px
      transition all 70ms

    & .icon-play
      position absolute
      font-size 1.5em
      left 52%
      top 50%
      transform translate(-48%, -50%)
      transition all 70ms
      color #ffffff

    &:hover .icon-play
      font-size 1.2em
      transition all 70ms

  & .close
    bottom 50px
    right 40px
    position absolute
    z-index 5

    &:hover
      cursor pointer

.control-row
  position absolute
  bottom -1px
  width 100%
  height 130px
  background-color #ffffff
  overflow hidden
  z-index 3

  & #pause-button
    box-sizing border-box
    display flex
    justify-content center
    align-items center
    position absolute
    width 80px
    height 80px
    border-radius 50%
    background-color transparent
    left 40px
    bottom 25px
    z-index 5
    cursor pointer
    border none
    transform scale(0)
    animation scale-animation 0.4s
    animation-fill-mode forwards
    animation-delay 0.3s

    & .icon-pause
      position absolute
      width 80px
      transform translate(-50%, -50%)
      transition all 0.1s
      color #424242

    & .icon-play
      position absolute
      font-size 1.5em
      left 50%
      top 50%
      transform translate(-50%, -50%)
      transition all 0.1s
      color #424242

  & .seek-field
    bottom 67px
    left 95px
    position absolute
    width 170px
    z-index 5
    transform scale(0)
    animation scale-animation 0.4s
    animation-fill-mode forwards
    animation-delay 0.3s

  & .volume-field
    bottom 67px
    right 127px
    outline none
    position absolute
    width 50px
    z-index 5
    transform scale(0)
    // display none
    animation scale-animation 0.4s
    animation-fill-mode forwards
    animation-delay 0.3s

  & .volume-icon
    width 20px
    height 20px
    position absolute
    border-radius 50%
    bottom 58px
    right 160px
    z-index 5
    font-size 1.2em
    // display none
    transform scale(0)
    animation scale-animation 0.4s
    animation-fill-mode forwards
    animation-delay 0.3s

    & .icon-volume-up
      color #424242

.like-active
  color #ef5350
  animation scale-animation 0.4s
  animation-fill-mode forwards

@keyframes scale-animation
  0%
    transform scale(0)

  50%
    transform scale(1.2)

  100%
    transform scale(1)

.waves-animation-one
  position absolute
  width 80px
  height 80px
  border-radius 50%
  background-color #5c6bc0
  // z-index 2
  left 42.5%
  bottom 20%
  transform scale(0)
  animation waves-animation-one 0.25s
  animation-fill-mode forwards
  animation-delay 0.3s
  // display none

@keyframes waves-animation-one
  0%
    transform scale(1)

  99%
    transform scale(7.8)

  100%
    transform scale(7.8)

.waves-animation-two
  position absolute
  width 80px
  height 80px
  border-radius 50%
  background-color #5c6bc0
  z-index 3
  right 40px
  bottom 35px
  transform scale(7.8)
  // display none
  animation waves-animation-two 0.2s
  animation-fill-mode forwards

@keyframes waves-animation-two
  to
    transform scale(0)

.info-active
  animation info-active-animation 3s
  animation-fill-mode forwards
  animation-delay 0.37s

@keyframes info-active-animation
  to
    bottom 56.5%

.play-active
  animation play-animation 0.3s
  animation-fill-mode forwards

@keyframes play-animation
  0%
    box-shadow 0 0 0 0 rgba(0, 0, 0, 0)

  98%
    box-shadow 0 0 0 0 rgba(0, 0, 0, 0)
    transform translate(-200px, 65px)

  99%
    box-shadow 0 0 0 0 rgba(0, 0, 0, 0)
    transform translate(-200px, 65px) scale(0)

  100%
    box-shadow 0 0 0 0 rgba(0, 0, 0, 0)
    transform translate(0, 65px) scale(1)

.play-inactive
  animation play-inactive 1s
  animation-fill-mode forwards

@keyframes play-inactive
  from
    transform translate(0, 65px)

input[type='range']
  -webkit-appearance none
  width 100%
  position absolute
  top 50%
  background transparent
  transform translateY(-50%)

input[type='range']:focus
  outline none

input[type='range'] + .thumb
  display none

input[type='range']::-webkit-slider-runnable-track
  width 100%
  height 3px
  cursor pointer
  animate 0.2s
  box-shadow 0px 0px 0px transparent, 0px 0px 0px transparent
  background #f2f2f2
  border-radius 0
  border 0px solid #000101

input[type='range']::-webkit-slider-thumb
  box-shadow 0px 0px 0px transparent, 0px 0px 0px transparent
  border 0px solid transparent
  height 18px
  width 18px
  border-radius 50%
  background #009688
  cursor pointer
  -webkit-appearance none
  margin-top -7px

input[type='range']:focus::-webkit-slider-runnable-track
  background #f2f2f2

input[type='range']::-moz-range-track
  width 100%
  height 3px
  cursor pointer
  animate 0.2s
  box-shadow 0px 0px 0px transparent, 0px 0px 0px transparent
  background #f2f2f2
  border-radius 0
  border 0px solid #000101

input[type='range']::-moz-range-thumb
  box-shadow 0px 0px 0px transparent, 0px 0px 0px transparent
  border 0px solid transparent
  height 18px
  width 18px
  border-radius 50%
  background #009688
  cursor pointer

input[type='range']::-ms-track
  width 100%
  height 3px
  cursor pointer
  animate 0.2s
  background transparent
  border-color transparent
  border-width 39px 0
  color transparent
  padding-top 5px

input[type='range']::-ms-fill-lower
  background #f2f2f2
  border 0px solid transparent
  border-radius 0
  box-shadow 0px 0px 0px transparent, 0px 0px 0px transparent

input[type='range']::-ms-fill-upper
  background #f2f2f2
  border 0px solid transparent
  border-radius 0x
  box-shadow 0px 0px 0px transparent, 0px 0px 0px transparent

input[type='range']::-ms-thumb
  box-shadow 0px 0px 0px transparent, 0px 0px 0px transparent
  border 0px solid transparent
  height 18px
  width 18px
  border-radius 50%
  background #009688
  cursor pointer
  margin-top 1px

input[type='range']::-ms-tooltip
  display none

input[type='range']::-ms-ticks
  display none

input[type='range']:focus::-ms-fill-lower
  background #f2f2f2

input[type='range']:focus::-ms-fill-upper
  background #f2f2f2
</style>
