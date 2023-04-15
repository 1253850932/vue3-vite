<!--
 * new page
 * @author: 
 * @since: 2023-04-11
 * home.vue
-->
<script setup lang="ts">
  import { reactive } from 'vue';
  import CentralControl from './centralControl.vue';
  import GraphicDisplay from './graphicDisplay.vue';
  import ControlledEquipment from './controlledEquipment.vue';
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
  const tableData = [
    {
      id: 1,
      date: '2016-05-03',
      controller: 1,
      loop: 1,
      position: 2,
      category: 3,
      status: '已布点',
      describe: '故障部位：消防电梯故障一层电梯厅旁',
      building: '某大楼',
      floor: '一层',
      operator: '***',
      phone: '027*******',
      type: 'fire'
    },
    {
      id: 2,
      date: '2016-05-03',
      controller: 2,
      loop: 2,
      position: 2,
      category: 3,
      status: '已布点',
      describe: '故障部位：消防电梯故障一层电梯厅旁',
      building: '某大楼',
      floor: '一层',
      operator: '***',
      phone: '027*******',
      type: 'fault'
    },
    {
      id: 3,
      date: '2016-05-03',
      controller: 3,
      loop: 3,
      position: 3,
      category: 3,
      status: '已布点',
      describe: '故障部位：消防电梯故障一层电梯厅旁',
      building: '某大楼',
      floor: '一层',
      operator: '***',
      phone: '027*******',
      type: 'supervise'
    }
  ];
  let equipmentStatus = reactive([
    { action: false, feedback: false, operation: 1, name: '防火卷帘' },
    { action: false, feedback: false, operation: 2, name: '消防电梯' },
    { action: false, feedback: false, operation: 3, name: '送风口' },
    { action: false, feedback: false, operation: 4, name: '排烟阀' },
    { action: false, feedback: false, operation: 5, name: '前室送风口' },
    { action: false, feedback: false, operation: 6, name: '挡烟垂壁' },
    { action: false, feedback: false, operation: 7, name: '排烟口' }
  ]);
  let equipment = reactive([
    {
      start: false,
      feedback: false,
      fault: false,
      startButton: false,
      stopButton: false,
      name: '消防水泵'
    },
    {
      start: false,
      feedback: false,
      fault: false,
      startButton: false,
      stopButton: false,
      name: '防烟风机'
    },
    {
      start: false,
      feedback: false,
      fault: false,
      startButton: false,
      stopButton: false,
      name: '排烟风机'
    }
  ]);
</script>
<template>
  <div class="container">
    <ControlledEquipment
      :equipment-status="equipmentStatus"
      :method="method"
      :equipment="equipment"
    />
  </div>
</template>
<style lang="" scoped></style>
