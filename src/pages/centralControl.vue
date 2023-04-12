<!--
 * new page
 * @author: 
 * @since: 2023-04-12
 * central-control.vue
-->
<script setup lang="ts">
  import { ref } from 'vue';
  // 时间
  const time = ref<string>();
</script>
<template>
  <div class="container">
    <div class="control">
      <div class="control-left">
        <div class="time">
          <div class="timer">{{ time }}</div>
          <div class="timer-bottom">
            <div> <img src="@/assets/img/按钮黑色_01.gif" />自动方式 </div>
            <div> <img src="@/assets/img/按钮黑色_01.gif" />手动方式 </div>
          </div>
        </div>
        <div class="menuList">
          <div class="menuList-top">
            <div> <img src="@/assets/img/按钮黑色_01.gif" />自动方式 </div>
            <div> <img src="@/assets/img/按钮黑色_01.gif" />手动方式 </div>
          </div>
          <div class="menuList-middle">
            <div>
              <div> <img src="@/assets/img/按钮黑色_01.gif" />自动方式 </div>
              <div> <img src="@/assets/img/按钮黑色_01.gif" />自动方式 </div>
              <div> <img src="@/assets/img/按钮黑色_01.gif" />自动方式 </div>
              <div> <img src="@/assets/img/按钮黑色_01.gif" />自动方式 </div>
              <div> <img src="@/assets/img/按钮黑色_01.gif" />自动方式 </div>
              <div> <img src="@/assets/img/按钮黑色_01.gif" />自动方式 </div>
            </div>
            <div>
              <div> <img src="@/assets/img/按钮黑色_01.gif" />自动方式 </div>
              <div> <img src="@/assets/img/按钮黑色_01.gif" />自动方式 </div>
              <div> <img src="@/assets/img/按钮黑色_01.gif" />自动方式 </div>
              <div> <img src="@/assets/img/按钮黑色_01.gif" />自动方式 </div>
              <div> <img src="@/assets/img/按钮黑色_01.gif" />自动方式 </div>
              <div> <img src="@/assets/img/按钮黑色_01.gif" />自动方式 </div>
            </div>
          </div>
        </div>
      </div>
      <div class="control-right">
        <div class="screen">
          <div class="container">
            <div class="screen-top">火警信息</div>
            <div class="screen-middle">
              <div class="screen-info-left"> 警告 </div>
              <div class="screen-info-right">正常</div>
            </div>
            <div class="screen-bottom">22</div>
          </div>
        </div>
        <div class="button-list">
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>

          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>

          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>

          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>

          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
          <button>F1</button>
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

        .time {
          width: 50%;
          .timer {
            font-size: 40px;
            color: red;
            margin-left: 35px;
          }
          .timer-bottom {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            margin-top: 150px;
            div > img {
              vertical-align: middle;
            }
          }
        }
        .menuList {
          display: flex;
          flex-direction: column;
          width: 50%;
          font-size: 12px;
          .menuList-top {
            display: flex;
            justify-content: space-around;
            font-size: 16px;
            div > img {
              vertical-align: middle;
            }
            img {
              width: 25px;
            }
          }
          .menuList-middle {
            margin-top: 15px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            img {
              width: 25px;
            }

            div > img {
              vertical-align: middle;
            }
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
            top: 56px;
            left: 44px;
            display: flex;
            flex-direction: column;
            width: 19vw;
            height: 70%;
            .screen-top {
              width: 100%;
              height: 30px;
              background-color: blue;
              color: #fff;
            }
            .screen-middle {
              display: flex;
              justify-content: center;
              height: 65%;
              .screen-info-left {
                background-color: #626fe7;
                width: 70%;
              }
              .screen-info-right {
                background-color: #3041d6;
                width: 30%;
              }
            }
            .screen-bottom {
              background-color: #304;
            }
          }
        }
        .button-list {
          height: 50%;
          display: grid;
          grid-template-columns: [c1] 30px [c2] 30px [c3] 30px [c4] 30px [c5] 30px [c6] 30px [c7] 30px;
          grid-template-rows: [r1] 40px [r2] 40px [r3] 40px [r4] 40px [c5] 40px;
          line-height: 100px;
          row-gap: 10px;
          column-gap: 30px;
          button {
            height: 30px;
            width: 50px;
            border-radius: 5px;
            background-color: #626fe7;
          }
        }
      }
    }
  }
</style>
