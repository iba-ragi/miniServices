<template>
  <div id="lifeProgress">
    <p>あなたの人生進捗は？</p>
    <input 
      id="start" 
      type="month" 
      name="start"
      min="1900-01" 
      value="2020-01">
  </div>
</template>

<script>
export default {
  layout: 'lifeprogress'
}
</script>

<style lang="scss">
#lifeProgress {
  text-align: center;
}
</style>
