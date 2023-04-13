<!--
 * new page
 * @author: 
 * @since: 2023-04-12
 * central-control.vue
-->
<script setup lang="ts">
  import { formatDate, formatTime } from '@/utils/formatTime';
  import { ref, onMounted, reactive } from 'vue';

  interface IMenuList {
    id: number;
    label: string;
    action: boolean;
    class?: string;
  }

  // 时间
  let curDate = ref<string>('');
  let curTime = ref<string>('');
  onMounted(() => {
    setInterval(() => {
      curDate.value = formatDate();
      curTime.value = formatTime();
    });
  });

  //   方式

  const method: Array<IMenuList> = reactive([
    { id: 14, label: '自动方式', action: false },
    { id: 7, label: '手动方式', action: true }
  ]);
  const fire: Array<IMenuList> = reactive([
    { id: 3, label: '火警', action: false },
    { id: 4, label: '自动', action: false }
  ]);
  const controlDisplay: Array<IMenuList> = reactive([
    { id: 5, label: '监管报警', action: false },
    { id: 6, label: '故障', action: false },
    { id: 7, label: '自动延时', action: false },
    { id: 8, label: '反馈', action: false },
    { id: 9, label: '手动报警', action: false },
    { id: 10, label: '屏蔽', action: false },
    { id: 11, label: '系统故障', action: false },
    { id: 12, label: '消音', action: false },
    { id: 13, label: '运行', action: false },
    { id: 14, label: '自检', action: false },
    { id: 15, label: '主电运行', action: false },
    { id: 16, label: '备电运行', action: false },
    { id: 17, label: '主电故障', action: false },
    { id: 18, label: '备电故障', action: false }
  ]);

  const menuList: Array<IMenuList> = reactive([
    { id: 1, label: 'F1', action: false, class: 'routine' },
    { id: 2, label: 'F2', action: false, class: 'routine' },
    { id: 3, label: 'F3', action: false, class: 'routine' },
    { id: 4, label: 'F4', action: false, class: 'routine' },
    { id: 5, label: 'F5', action: false, class: 'routine' },
    { id: 6, label: 'F6', action: false, class: 'routine' },
    { id: 7, label: '手动切换', action: false, class: 'routine' },
    { id: 8, label: '1', action: false, class: 'routine' },
    { id: 9, label: '2', action: false, class: 'routine' },
    { id: 10, label: '3', action: false, class: 'routine' },
    { id: 11, label: '功能', action: false, class: 'routine' },
    { id: 12, label: '上', action: false, class: 'waring' },
    { id: 13, label: '取消', action: false, class: 'routine' },
    { id: 14, label: '自动切换', action: false, class: 'routine' },
    { id: 15, label: '4', action: false, class: 'routine' },
    { id: 16, label: '5', action: false, class: 'routine' },
    { id: 17, label: '6', action: false, class: 'routine' },
    { id: 18, label: '左', action: false, class: 'waring' },
    { id: 19, label: '确定', action: false, class: 'routine' },
    { id: 20, label: '右', action: false, class: 'waring' },
    { id: 21, label: '复位', action: false, class: 'danger' },
    { id: 22, label: '7', action: false, class: 'routine' },
    { id: 23, label: '8', action: false, class: 'routine' },
    { id: 24, label: '9', action: false, class: 'routine' },
    { id: 25, label: '中/英', action: false, class: 'routine' },
    { id: 26, label: '下', action: false, class: 'waring' },
    { id: 27, label: '自定义', action: false, class: 'routine' },
    { id: 28, label: '自检', action: false, class: 'zhengchang' },
    { id: 29, label: '*', action: false, class: 'routine' },
    { id: 30, label: '0', action: false, class: 'routine' },
    { id: 31, label: '#', action: false, class: 'routine' },
    { id: 32, label: '声光启', action: false, class: 'routine' },
    { id: 33, label: '声光停', action: false, class: 'routine' },
    { id: 34, label: '联动', action: false, class: 'routine' },
    { id: 35, label: '消音', action: false, class: 'danger' }
  ]);
  const panel = reactive({
    info: '启动信息',
    method: {
      function: {
        manual: true,
        automatic: false
      }
    },
    warning: {
      info: '首警',
      time: curTime.value,
      address: {
        floor: '1-1',
        info: '感温探测器火警',
        place: '负一层电梯厅旁'
      }
    },

    test: [
      {
        id: 1,
        label: '1 探测器模拟曲线'
      },
      {
        id: 2,
        label: '2 回路状态信号浏览'
      },
      {
        id: 3,
        label: '3 现场部件数据查询'
      },
      {
        id: 4,
        label: '4 回路部件状态信号值'
      },
      {
        id: 5,
        label: '5 查询总线盘联动编程'
      },
      {
        id: 6,
        label: '6 用户密码及授权管理'
      },
      {
        id: 7,
        label: '7 分区信息 '
      }
    ],
    queryMenu: [
      {
        id: 1,
        label: '1 查询配置设备总数 ',
        showInfo: {
          info: 'XXX 回路 XX机',
          parentId: 1
        }
      },
      {
        id: 2,
        label: '2 设备状态查询 ',
        showInfo: {
          info: 'XXX 回路 XX机  XX 机',
          parentId: 1
        }
      },
      {
        id: 3,
        label: '4 查询历史记录 ',
        showInfo: {
          label: '请选择信息类型',
          info: [
            '1 火警信息',
            '2 联动信息',
            '3 故障信息',
            '4 屏蔽信息',
            '5 监管信息'
          ],
          parentId: 3
        }
      },
      {
        id: 4,
        label: '5 查询屏蔽部件 ',
        showInfo: {
          label: '显示屏蔽信息',
          info: 'xx 设备 屏蔽',
          parentId: 4
        }
      }
    ],
    menu: [
      { id: 1, label: 'F1查火警' },
      { id: 2, label: 'F2查启动' },
      { id: 3, label: 'F3查故障' },
      { id: 4, label: 'F4查监管' },
      { id: 5, label: 'F5查屏障' },
      { id: 6, label: 'F6查反馈' }
    ]
  });
  let step = reactive<Array<number>>([]);
  let number = reactive({
    id: 0
  });
  let curInfo = ref();
  const menuHandler = (e: any) => {
    //手动自动方式
    if (e.id === 14) {
      panel.method.function.automatic = !panel.method.function.automatic;
      searchHandler(e.id, method, panel.method.function.automatic);
    }
    if (e.id === 7) {
      panel.method.function.manual = !panel.method.function.manual;
      searchHandler(e.id, method, panel.method.function.manual);
    }
    if (e.id === 11) {
      number.id = 1;
      curInfo.value = panel.queryMenu.map((i) => i.label);
      console.log('output-curInfo', curInfo);
    }
    step.push(e.id);
    let forwardIndex = step.findIndex((i) => i === 11);
    console.log('output-', forwardIndex, step);
  };

  const searchHandler = (id: number, arr: any, change: boolean) => {
    arr.forEach((i: any): void => {
      if (i.id === id) {
        i.action = change;
      }
    });
  };
</script>
<template>
  <div class="container">
    <div class="control">
      <div class="control-left">
        <div class="time">
          <div class="timer">{{ curDate }}</div>
          <div class="timer-bottom">
            <div v-for="item in method" :key="item.id">
              <div v-if="item.action === false">
                <img src="@/assets/img/按钮黑色_01.gif" />{{ item.label }}
              </div>
              <div v-else>
                <img src="@/assets/img/按钮绿色_01.gif" />{{ item.label }}
              </div>
            </div>
          </div>
        </div>
        <div class="menuList">
          <div class="menuList-top">
            <div v-for="item in fire" :key="item.id">
              <img src="@/assets/img/按钮黑色_01.gif" />{{ item.label }}
            </div>
          </div>
          <div class="menuList-middle">
            <div v-for="item in controlDisplay" :key="item.id">
              <img src="@/assets/img/按钮黑色_01.gif" />{{ item.label }}
            </div>
          </div>
        </div>
      </div>
      <div class="control-right">
        <div class="screen">
          <div class="container">
            <div class="screen-top">{{ panel.info }}</div>
            <div class="screen-middle">
              <div class="screen-info-left">
                <div v-show="0 === number.id">
                  <span>{{ panel.warning.info }}</span>
                  <span>{{ panel.warning.address.floor }}</span>
                  <span>{{ panel.warning.address.info }}</span>
                  <div>{{ panel.warning.address.place }}</div>
                </div>
                <div v-show="1 === number.id">
                  <div>
                    <div v-for="(item, index) in curInfo" :key="index">{{
                      item
                    }}</div>
                  </div>
                </div>
              </div>
              <div class="screen-info-right">
                <div class="method-info">
                  <p> 正常 运行</p>
                  <p>
                    手动:
                    {{
                      panel.method.function.manual === false ? '禁止' : '允许'
                    }}</p
                  >
                  <p>
                    自动:
                    {{
                      panel.method.function.automatic === false
                        ? '禁止'
                        : '允许'
                    }}</p
                  >
                </div>
                <div class="method-info-middle"></div>
                <div class="method-info-timer">{{ curTime }} </div>
              </div>
            </div>
            <div class="screen-bottom">
              <div v-for="item in panel.menu" :key="item.id">
                {{ item.label }}</div
              >
            </div>
          </div>
        </div>
        <div class="button-list">
          <button
            v-for="item in menuList"
            :key="item.id"
            :class="item.class"
            @click="menuHandler(item)"
            >{{ item.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .container {
    width: 80vw;
    height: 800px;
    margin: 0 auto;
    .control {
      background: url('@/assets/img/组4.png');
      width: 1000px;
      height: 600px;
      margin: 0 auto;
      background-size: 100% 100%;
      display: flex;
      .control-left {
        display: flex;
        width: 50%;
        img {
          width: 20px;
        }
        div > img {
          vertical-align: middle;
        }
        .time {
          position: relative;

          width: 50%;
          .timer {
            position: absolute;
            top: 60px;
            left: 10px;
            font-size: 40px;
            color: red;
            margin-left: 35px;
          }
          .timer-bottom {
            position: absolute;
            top: 260px;
            left: 50px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
          }
        }
        .menuList {
          display: flex;
          flex-direction: column;
          width: 50%;
          font-size: 12px;
          .menuList-top {
            display: grid;
            grid-template-columns: [c1] 120px [c2] 100px;
            margin-top: 60px;
            font-size: 16px;
          }
          .menuList-middle {
            display: grid;
            grid-template-columns: [c1] 120px [c2] 100px;
            margin-top: 30px;
          }
        }
      }
      .control-right {
        display: flex;
        flex-direction: column;
        width: 50%;
        .screen {
          height: 50%;
          position: relative;
          .container {
            position: absolute;
            top: 61px;
            left: 45px;
            display: flex;
            flex-direction: column;
            width: 360.5px;
            height: 186.1px;
            background-color: rgb(9, 86, 250);
            .screen-top {
              width: 100%;
              height: 12.17%;
              padding-left: 10px;
              color: rgb(202, 184, 172);
            }
            .screen-middle {
              display: flex;
              justify-content: center;
              height: 75.66%;
              .screen-info-left {
                background-color: rgb(203, 236, 252);
                width: 70%;
              }

              .screen-info-right {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                background-color: rgb(153, 234, 250);
                width: 30%;
                .method-info-middle {
                  height: 40px;
                  background-color: rgb(102, 226, 252);
                }
                .method-info-timer {
                  font-size: 12px;
                  background-color: rgb(9, 86, 250);

                  color: rgb(202, 184, 172);
                }
              }
            }
            .screen-bottom {
              display: grid;
              padding-left: 5px;
              grid-template-columns: [c1] 60px [c2] 60px [c3] 60px [c4] 60px [c5] 60px [c6] 60px;
              color: rgb(202, 184, 172);
              height: 12.17%;
              font-size: 12px;
              line-height: 22.64px;
            }
          }
        }
        .button-list {
          height: 50%;
          display: grid;
          grid-template-columns: [c1] 30px [c2] 30px [c3] 30px [c4] 30px [c5] 30px [c6] 30px [c7] 40px;
          grid-template-rows: [r1] 40px [r2] 40px [r3] 40px [r4] 40px [c5] 40px;
          line-height: 100px;
          row-gap: 10px;
          column-gap: 30px;
          button {
            height: 30px;
            width: 55px;
            border-radius: 5px;
            cursor: pointer;
            color: #fff;
            font-weight: 400;
          }

          .routine {
            background-color: rgb(51, 148, 243);
          }
          .routine:active {
            background-color: rgb(36, 129, 223);
          }
          .waring {
            background-color: rgb(255, 151, 55);
          }
          .waring:active {
            background-color: rgb(233, 109, 27);
          }
          .danger {
            background-color: rgb(252, 52, 56);
          }
          .danger:active {
            background-color: rgb(224, 33, 36);
          }
          .zhengchang {
            background-color: rgb(42, 203, 128);
          }
          .zhengchang:active {
            background-color: rgb(37, 181, 113);
          }
        }
      }
    }
  }
</style>
