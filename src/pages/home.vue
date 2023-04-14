<!--
 * new page
 * @author: 
 * @since: 2023-04-11
 * home.vue
-->
<script setup lang="ts">
  import { reactive } from 'vue';
  import CentralControl from './centralControl.vue';
  const warning = reactive({
    info: 'test',
    time: '2023-04-11',
    address: {
      floor: '1-1',
      info: 'test',
      place: 'test'
    }
  });
  const method = reactive({
    manual: true,
    automatic: true
  });
  const controlDisplay = reactive([
    { id: 5, label: '监管报警', action: true },
    { id: 6, label: '故障', action: false },
    { id: 7, label: '自动延时', action: false },
    { id: 8, label: '反馈', action: false },
    { id: 9, label: '手动报警', action: false },
    { id: 10, label: '屏蔽', action: true },
    { id: 11, label: '系统故障', action: true },
    { id: 12, label: '消音', action: true },
    { id: 13, label: '运行', action: false },
    { id: 14, label: '自检', action: true },
    { id: 15, label: '主电运行', action: false },
    { id: 16, label: '备电运行', action: true },
    { id: 17, label: '主电故障', action: false },
    { id: 18, label: '备电故障', action: false }
  ]);
</script>
<template>
  <div class="container">
    <CentralControl
      :warning="warning"
      :control-display="controlDisplay"
      :method="method"
    />
  </div>
</template>
<style lang="" scoped></style>
