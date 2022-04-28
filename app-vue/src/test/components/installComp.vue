<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "installComp"
}
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}

</style>