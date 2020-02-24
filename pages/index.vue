<template>
  <section class="container">
    <div>
      <div class="gyro">
        <div>
          <h1 class="title">Hello, Kamome</h1>
        </div>
        <div ref="underContents">
          <h1 :class="['title', 'under_title']">Hello, Kamome</h1>
        </div>
      </div>
      <div class="">
        <p>{{ alpha }}</p>
        <p>{{ beta }}</p>
        <p>{{ gamma }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      alpha: '', // z軸 0 〜 360
      beta: '', // x軸 -180 〜 180
      gamma: '' // y軸 -90 〜 90
    }
  },
  computed: {},
  mounted() {
    if (process.client) {
      console.log(window)
      // this.x = 'sss'
      console.log(this.$refs)
      const p = this.$refs.underContents
      const map = p.getBoundingClientRect()
      console.log(map)
      // p.style.top = 100 + 'px'
      // console.log(map)
      const _this = this
      window.addEventListener('deviceorientation', function(e) {
        const underContents = _this.$refs.underContents
        const map = underContents.getBoundingClientRect()
        const y = e.gamma
        const x = e.beta
        p.style.top = x + 'px'
        p.style.left = y + 'px'
        _this.alpha = e.alpha
        _this.beta = e.beta
        _this.gamma = e.gamma
      })
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  text-align: center;
}
.gyro {
  height: 40px;
  position: relative;
  font-size: 20px;
  div {
    position: absolute;
    width: 100%;
  }
  div:nth-child(1) {
    z-index: 999;
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 30px;
  color: #35495e;
  letter-spacing: 1px;
}
.under_title {
  color: rgb(101, 192, 244);
}
</style>
