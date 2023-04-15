<!--
 * new page
 * @author: 
 * @since: 2023-04-15
 * controlledEquipment.vue
-->
<script setup lang="ts">
  import { reactive } from 'vue';
  interface IProps {
    equipmentStatus: IEquipmentStatus[];
    equipment: IEquipment[];
    method: {
      /** 手动 */
      manual: boolean;
      /** 自动 */
      automatic: boolean;
    };
  }

  interface IEquipmentStatus {
    action: boolean;
    feedback: boolean;
    operation: number;
    name: string;
  }
  interface IEquipment {
    /**启动 */
    start: boolean;
    /**反馈 */
    feedback: boolean;
    /**故障 */
    fault: boolean;
    /**启动按钮 */
    startButton: boolean;
    /**停止按钮 */
    stopButton: boolean;
    name: string;
  }
  const props = defineProps<IProps>();
  let equipmentStatus: IEquipmentStatus[] = reactive([
    { action: false, feedback: false, operation: 1, name: '防火卷帘' },
    { action: false, feedback: false, operation: 2, name: '消防电梯' },
    { action: false, feedback: false, operation: 3, name: '送风口' },
    { action: false, feedback: false, operation: 4, name: '排烟阀' },
    { action: false, feedback: false, operation: 5, name: '前室送风口' },
    { action: false, feedback: false, operation: 6, name: '挡烟垂壁' },
    { action: false, feedback: false, operation: 7, name: '排烟口' }
  ]);
  let equipment: IEquipment[] = reactive([
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
  // eslint-disable-next-line vue/no-setup-props-destructure
  equipmentStatus = props.equipmentStatus;
  equipment = props.equipment;
</script>
<template>
  <div class="equipment">
    <div class="top">
      <div></div>
      <div class="top-list">
        <div class="top-info"
          >&nbsp;&nbsp;动作 反馈 操作 &nbsp;&nbsp;受控设备</div
        >
        <div class="top-menu-list">
          <div v-for="i in equipmentStatus" :key="i.operation" class="top-menu">
            <img src="@/assets/img/按钮黑色_01.gif" />
            <img src="@/assets/img/按钮黑色_01.gif" />
            <img src="@/assets/img/圆角矩形 3 111.png" />
            <div>{{ i.name }}</div>
          </div>
          <div v-for="i in 3" :key="i" class="top-menu">
            <img src="@/assets/img/按钮黑色_01.gif" />
            <img src="@/assets/img/按钮黑色_01.gif" />
            <img src="@/assets/img/圆角矩形 3 111.png" />
            <div>{{ i }}</div>
          </div>
        </div>
      </div>
      <div v-for="i in 4" :key="i" class="top-list">
        <div class="top-info"
          >&nbsp;&nbsp;动作 反馈 操作 &nbsp;&nbsp;受控设备</div
        >
        <div class="top-menu-list">
          <div v-for="i in 10" :key="i" class="top-menu">
            <img src="@/assets/img/按钮黑色_01.gif" />
            <img src="@/assets/img/按钮黑色_01.gif" />
            <img src="@/assets/img/圆角矩形 3 111.png" />
            <div>{{ i }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-list">
        <div class="bottom-info-left">
          <div class="bottom-info-left-method">
            <div>
              <p>禁止</p> <img src="@/assets/img/按钮黑色_01.gif" alt=""
            /></div>
            <div>
              <p>允许</p> <img src="@/assets/img/按钮黑色_01.gif" alt=""
            /></div>
          </div>
          <div class="bottom-info-left-menu">
            <img src="@/assets/img/组 3.png" alt="" />
            <div>手动方式</div>
          </div>
        </div>
        <div v-for="(i, index) in equipment" :key="index" class="bottom-info">
          <div>{{ index + 1 }}</div>
          <div>{{ i.name }}</div>
          <div><img src="@/assets/img/按钮黑色_01.gif" alt="" />&nbsp;启动</div>
          <div><img src="@/assets/img/按钮黑色_01.gif" alt="" />&nbsp;反馈</div>
          <div><img src="@/assets/img/按钮黑色_01.gif" alt="" />&nbsp;故障</div>
          <div class="bottom-info-left-menu">
            <button>启动</button>
            <button>停止</button>
          </div>
        </div>
        <div v-for="i in 5" :key="i" class="bottom-info">
          <div>{{ i + 3 }}</div>
          <div> &nbsp;</div>
          <div><img src="@/assets/img/按钮黑色_01.gif" alt="" />&nbsp;启动</div>
          <div><img src="@/assets/img/按钮黑色_01.gif" alt="" />&nbsp;反馈</div>
          <div><img src="@/assets/img/按钮黑色_01.gif" alt="" />&nbsp;故障</div>
          <div class="bottom-info-left-menu">
            <button>启动</button>
            <button>停止</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .equipment {
    width: 1000px;
    height: 600px;
    background-color: #e6e3dd;
    img {
      width: 16px;
    }
    .top {
      display: grid;
      width: 100%;
      height: 67%;
      grid-template-columns: 12% 17% 17% 17% 17% 17%;

      .top-list {
        height: 90%;
        font-size: 13px;
        padding-top: 20px;
        margin-right: 10px;

        .top-info {
          width: 100%;
          height: 7%;
          border: 3px solid rgb(128, 127, 125);
          line-height: 20px;
          border-radius: 8px;
          font-size: 12px;
          color: #7c7b79;
        }
        .top-menu-list {
          margin-top: 5px;
          border: 3px solid rgb(128, 127, 125);
          border-radius: 8px;
          color: #999895;
          font-size: 13px;
          :nth-child(5) {
            margin-bottom: 10px;
          }
          :nth-child(10) {
            margin-bottom: 10px;
          }

          .top-menu {
            display: flex;
            justify-content: space-evenly;
            width: 100%;
            height: 7%;
            line-height: 25px;
            margin-bottom: 6px;

            :nth-child(3) {
              width: 25px;
              height: 25px;
              cursor: pointer;
            }
            :nth-child(4) {
              min-width: 52px;
            }
          }
        }
      }
    }
    .bottom {
      width: 100%;
      height: 33%;
      border-top: 5px solid #bdbbb6;
      margin-top: 13px;
      font-size: 13px;
      .bottom-list {
        height: 85%;
        display: grid;
        grid-template-columns: 10% repeat(8, 8.5%);
        column-gap: 26px;
        row-gap: 10px;
        margin-top: 7px;
        .bottom-info-left {
          .bottom-info-left-method {
            display: flex;
            justify-content: space-evenly;
            align-items: end;
            height: 51%;
            > div {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }
          .bottom-info-left-menu {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            height: 51%;
            > img {
              width: 46px;
            }
          }
        }
        .bottom-info {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 3px solid rgb(128, 127, 125);
          border-radius: 15px;
          color: #7e7d7b;
          :nth-child(2) {
            font-size: 17px;
            font-weight: 550;
            color: rgb(112, 111, 106);
          }
          :nth-child(3) {
            img {
              vertical-align: middle;
            }
          }
          :nth-child(4) {
            img {
              vertical-align: middle;
            }
          }
          :nth-child(5) {
            img {
              vertical-align: middle;
            }
          }
          .bottom-info-left-menu {
            button {
              width: 28px;
              height: 21px;
              margin-right: 5px;
              margin-left: 5px;
              font-size: 12px;
              cursor: pointer;
              border-radius: 3px;
              border: 1px solid #272727;
              box-shadow: 0 3px 3px 0 rgb(112, 111, 106);
              color: #d0e0e9;
              background-color: rgb(67, 168, 220);
            }
          }
        }
      }
    }
  }
</style>
