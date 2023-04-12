<!--
 * new page
 * @author: 
 * @since: 2023-04-11
 * home.vue
-->
<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const go = (e: number) => {
    router.push(`/page${e}`);
  };
</script>
<template>
  <div class="container">
    <div @click="go(1)">1</div>
    <div @click="go(2)">2</div>
  </div>
</template>
<style lang="" scoped></style>
