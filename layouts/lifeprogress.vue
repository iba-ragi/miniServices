<template>
  <div id="layout">
    <nuxt-link to="/">
      Home page
    </nuxt-link>
    <nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  body {
    max-width: 700px;
    margin: auto;
    padding: 0 15px;
  }
}
/*====================
{{スマホを基本設計にする}}
 - 〜479px：SP縦
 - 480px〜599px：SP横
 - 600px〜959px：タブレット
 - 960px〜1279px：小型PC
 - 1280px〜：大型PC
====================*/

/* 〜479px：SP縦
------------------------------ */
p {
  color: #fcea0c;
}
/* 480px〜599px：SP横
------------------------------ */
@media screen and (min-width: 480px) and (max-width: 599px) {
}

/* 600px〜959px：タブレット
------------------------------ */
@media screen and (min-width: 600px) and (max-width: 959px) {
  p {
    color: #008d36;
  } /* 利用の際は消去 */
}

/* 960px〜1279px：小型PC
------------------------------ */
@media screen and (min-width: 960px) and (max-width: 1279px) {
  p {
    color: #00a099;
  } /* 利用の際は消去 */
}

/* 1280px〜：大型PC
------------------------------ */
@media screen and (min-width: 1280px) {
  p {
    color: #1d70b7;
  } /* 利用の際は消去 */
}
</style>
