<template>
  <div class="last-ep">
    <div class="iframe">
      <iframe scrolling="no"
              src="https://castbox.fm/app/castbox/player/id1221402/id97763955"
              width="100%"
              height="200"
              frameborder="no"></iframe>
    </div>
    <div class="descript">
      <div class="title">
        <h4>
          Tageando #06 · Apoio: Impulso Network
          Por dentro do Nubank
        </h4>
        <small>
          Conversamos com engenheiros de software do Nubank, a fintech mais queridinha do Brasil
        </small>

      </div>
      <p>Olá, mundo! Se você também ama o famoso roxinho, esse episódio é para você &lt;3</p>
      <p>
        Conversamos com engenheiros de software do Nubank, a fintech mais queiridinha do Brasil!
      </p>
        <p>
          Com Isabela Gonçalves, Pedro Axelrud e Lucas Cavalcanti </p>
          <p>
          Edição: Aerolitos Edição Inteligente <br />
          Apoio: Impulso
        </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="stylus" scoped>
@import '../assets/colors'

.descript
  padding 10px
  background rgba(27, 27, 27, 1)

  p
    color white
    padding 5px 0
    font-family 'Avenir', Helvetica, Arial, sans-serif

.title
  padding 10px 0

  h4
    color primaryColor
    font-size 1.2em
    padding-bottom 10px

  small
    color white
    font-family monospace

.last-ep
  background white
  height calc(100vh \- 50px)
  margin-top 50px
</style>
