<!--
 * new page
 * @author: 
 * @since: 2023-04-12
 * central-control.vue
-->
<script setup lang="ts">
  import { formatDate, formatTime } from '@/utils/formatTime';
  import { ref, onMounted, reactive, h } from 'vue';
  interface IMenuList {
    id: number;
    label: string;
    action: boolean;
    class?: string;
  }
  interface IMethod {
    /** 手动 */
    manual: boolean;
    /** 自动 */
    automatic: boolean;
  }
  interface IWarning {
    /** 错误警告标题 */
    info: string;
    /** 触发时间 */
    time: string;
    /** 警告地点信息 */
    address: {
      /** 警告地点楼层 */
      floor: string;
      info: string;
      /** 警告地点 */
      place: string;
    };
  }
  interface IControlDisplay {
    id: number;
    label: string;
    action: boolean;
  }
  const props = defineProps<{
    method: IMethod;
    warning: IWarning;
    controlDisplay: IControlDisplay[];
  }>();
  // 时间
  let curDate = ref<string>('');
  let curTime = ref<string>('');
  onMounted(() => {
    setInterval(() => {
      curDate.value = formatDate();
      curTime.value = formatTime();
    });
  });

  let controlDisplay: Array<IMenuList> = reactive([]);
  //   方式
  const method: Array<IMenuList> = reactive([
    { id: 14, label: '自动方式', action: false },
    { id: 7, label: '手动方式', action: true }
  ]);
  const fire: Array<IMenuList> = reactive([
    { id: 3, label: '火警', action: false },
    { id: 4, label: '自动', action: false }
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
    warning: [
      {
        info: '首警',
        time: '22/4/4',
        address: {
          floor: '1-1',
          info: '感温探测器火警',
          place: '负一层电梯厅旁'
        }
      }
    ],

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
          info: '***回路**机',
          parentId: 1
        }
      },
      {
        id: 2,
        label: '2 设备状态查询 ',
        showInfo: {
          info: '***回路**机',
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
    ],
    childrenOneMenu: [
      { id: 7, label: 'F1001' },
      { id: 8, label: 'F2上一页' },
      { id: 9, label: 'F3下一页' },
      {},
      { id: 10, label: 'F6退出' }
    ],
    childrenTwoMenu: [
      { id: 11, label: 'F1查询' },
      { id: 12, label: 'F2测试' },
      { id: 13, label: 'F3设置' },
      { id: 14, label: 'F4安装' },
      { id: 15, label: 'F5系统' },
      { id: 16, label: 'F6退出' }
    ],
    childrenThreeMenu: [
      { id: 17, label: 'F1清空' },
      {},
      {},
      { id: 18, label: 'F5确定' },

      { id: 19, label: 'F6退出' }
    ]
  });
  let step = reactive<Array<number>>([]);
  let number = reactive({
    id: 0
  });

  let menuFnList = ref();
  let curInfo = ref<any>();
  menuFnList.value = panel.menu;

  const menuHandler = (e: any): void => {
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
      menuFnList.value = panel.childrenTwoMenu;
    }
    if (e.id >= 1 && e.id <= 5) {
      menuFnList.value = panel.childrenOneMenu;
    }
    if (e.id === 6) {
      menuFnList.value = panel.menu;
      number.id = 0;
      searchChildrenStep = 0;
    }
    if (e.id === 21) {
      menuFnList.value = panel.menu;
      number.id = 0;
      searchChildrenStep = 0;
    }

    step.push(e.id);
    let forwardIndex = step.findIndex((i) => i === 11);
    const idList = [8, 9, 10, 15, 16, 30];
    let i = idList.find((i) => i === e.id);
    let idIndex = idList.findIndex((i) => i === e.id);
    i && searchChildren(e.id, forwardIndex, i, idIndex);
    if (searchChildrenStep >= 2 && e.id === 1) {
      curInfo.value = '***回路**机';
      searchChildrenStep = 1;
      menuFnList.value = panel.childrenThreeMenu;
    }
    if (searchChildrenStep >= 2 && idIndex >= 0) {
      let index = searchChildrenStep - 2;
      if (index >= 3) index += 2;
      curInfo.value = setChartOnIndex(curInfo.value, index, e.label);
    }
    if (searchChildrenStep === 1 && e.id === 3) {
      console.log('output->1', 1);
      curInfo.value = panel.queryMenu.map((i) => i.label);
    }
  };

  let searchChildrenStep = 0;
  /**
   * @description 改变列表函数
   * @param id
   * @param index
   * @param i
   * @param idIndex
   */
  const searchChildren = (
    id: number,
    index: number,
    i: string | number,
    idIndex: number
  ) => {
    searchChildrenStep = searchChildrenStep + 1;
    menuFnList.value = panel.childrenThreeMenu;
    if (index >= 0 && i && searchChildrenStep === 1) {
      curInfo.value = '';
      curInfo.value = panel.queryMenu[idIndex].showInfo.info;
    }
    if (index >= 0 && id === 1) {
      curInfo.value = '';
      curInfo.value = panel.test.map((i) => i.label);
    }
  };
  /**
   * @description  修改自动|手动方式
   */
  const searchHandler = (id: number, arr: any, change: boolean): void => {
    arr.forEach((i: any): void => {
      if (i.id === id) {
        i.action = change;
      }
    });
  };
  /**
   * @description   修改回路字符串函数
   * @function setChartOnIndex
   * @param  str 回路字符串
   * @param  index 修改当前索引
   * @param  char 修改当前字符
   */
  const setChartOnIndex = (str: string, index: number, char: string) => {
    if (index > str.length - 1) return str;
    if (index >= 0 && index <= 2) {
      return str.substring(0, index) + char + str.substring(index + 1);
    }
    if (index >= 5 && index <= 6) {
      return str.substring(0, index) + char + str.substring(index + 1);
    }
    if (index >= 7) return str;
  };
  // eslint-disable-next-line vue/no-setup-props-destructure
  controlDisplay = props.controlDisplay;
  /**
   * 打开放大镜展示函数
   */
  const list = () => {
    ElMessageBox.alert(
      `
    <div style="width:150px;height:400px">
  ${panel.warning.map((i) => {
    return `
  	<div style="font-size:20px;color:red">${i.info}</div>
  	<div  style="font-size:16px">${i.time}</div>
  	<div  style="font-size:16px">${i.address.floor}</div>
  	<div style="font-size:16px">${i.address.info}</div>
  	<div  style="font-size:16px">${i.address.place}</div>
  	`;
  })}

  	</div>
  	`,

      {
        showConfirmButton: false,
        dangerouslyUseHTMLString: true
      }
    );
  };
</script>
<template>
  <div class="centralControlSystem">
    <img class="zoomIn" src="@/assets/img/组 5拷贝.png" @click="list" />
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
              <div v-if="item.action === false">
                <img src="@/assets/img/按钮黑色_01.gif" />{{ item.label }}
              </div>
              <div v-else>
                <img src="@/assets/img/按钮绿色_01.gif" />{{ item.label }}
              </div>
            </div>
          </div>
          <div class="menuList-middle">
            <div v-for="item in controlDisplay" :key="item.id">
              <div v-if="item.action === false">
                <img src="@/assets/img/按钮黑色_01.gif" />{{ item.label }}
              </div>
              <div v-else>
                <img src="@/assets/img/按钮绿色_01.gif" />{{ item.label }}
              </div>
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
                <div
                  v-for="(i, index) in panel.warning"
                  v-show="0 === number.id"
                  :key="index"
                >
                  <span class="info">{{ i.info }}</span>
                  <span>{{ i.address.floor }}</span>
                  <span>{{ i.address.info }}</span>
                  <div>{{ i.address.place }}</div>
                </div>
                <div v-show="1 === number.id">
                  <div v-if="curInfo && Array.isArray(curInfo)">
                    <div v-for="(item, index) in curInfo" :key="index">{{
                      item
                    }}</div>
                  </div>
                  <div v-else>
                    <div>{{ curInfo }}</div>
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
              <div v-for="item in menuFnList" :key="item.id">
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
  .centralControlSystem {
    position: relative;
    width: 1000px;
    height: 600px;
    margin: 0 auto;
    .zoomIn {
      position: absolute;
      top: 75%;
      left: 30%;
      width: 33px;
      height: 60px;
      transform: rotateZ(-60deg);
      cursor: pointer;
    }
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
            font-size: 15px;
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
        font-size: 13px;
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
                .info {
                  color: red;
                  font-size: 18px;
                  font-weight: 600;
                }
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
          margin: 37px 0 0 -4px;
          height: 50%;
          display: grid;
          grid-template-columns: [c1] 30px [c2] 30px [c3] 30px [c4] 30px [c5] 30px [c6] 30px [c7] 40px;
          grid-template-rows: [r1] 40px [r2] 40px [r3] 40px [r4] 40px [c5] 40px;
          line-height: 100px;
          row-gap: 10px;
          column-gap: 40px;
          button {
            box-sizing: content-box;
            height: 30px;
            width: 55px;
            border-radius: 5px;
            cursor: pointer;
            color: #fff;
            font-weight: 400;
            border: 1px solid #484040;
            box-shadow: 0 5px 5px 0 #998d8d;
          }

          .routine {
            background-color: rgb(51, 148, 243);
          }
          .routine:active {
            background-color: rgb(12, 93, 175);
          }
          .waring {
            background-color: rgb(255, 151, 55);
          }
          .waring:active {
            background-color: rgb(194, 88, 17);
          }
          .danger {
            background-color: rgb(252, 52, 56);
          }
          .danger:active {
            background-color: rgb(189, 23, 26);
          }
          .zhengchang {
            background-color: rgb(42, 203, 128);
          }
          .zhengchang:active {
            background-color: rgb(10, 187, 104);
          }
        }
      }
    }
  }
</style>
