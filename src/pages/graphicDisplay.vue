<!--
 * new page
 * @author: 
 * @since: 2023-04-15
 * graphicDisplay.vue
-->
<script setup lang="ts">
  import { ref } from 'vue';
  interface IData {
    id: number;
    date: string;
    controller: number;
    loop: number;
    position: number;
    category: number;
    status: string;
    describe: string;
    building: string;
    floor: string;
    operator: string;
    phone: string;
    type: string;
  }
  interface IProps {
    data: IData[];
    method: {
      /** 手动 */
      manual: boolean;
      /** 自动 */
      automatic: boolean;
    };
  }
  const props = defineProps<IProps>();
  // eslint-disable-next-line vue/no-setup-props-destructure
  const { method } = props;
  // eslint-disable-next-line vue/no-setup-props-destructure
  const tableData: IData[] = props.data;
  const data = ref<IData[]>([tableData[0]]);
  let type = ref<number>(1);
  const changeInfo = (id: number) => {
    data.value.length = 0;
    data.value.push(tableData[id - 1]);
    type.value = id;
  };
</script>
<template>
  <div class="graphicDisplay">
    <div class="top">
      <div>图形显示装置</div>
      <div class="top-middle">
        <span>模拟报警</span>
        <span>统计查询</span>
        <span>信息查询</span>
        <span>信息编辑</span>
      </div>
    </div>
    <div class="middle">
      <el-card class="show-info">
        <div>时间:{{ data[0].date }}</div>
        <div>编号:1-1</div>
        <div
          >描述:{{
            type === 1 ? '火灾报警' : type === 2 ? '部位故障' : '监管报警'
          }}</div
        >
        <div>{{ data[0].describe }}</div>
        <div>设备类型：消防电梯</div>
      </el-card>
      <div class="info-change">
        <div class="info-change-method">
          <el-switch
            v-model="method.automatic"
            disabled
            active-text="自动"
          ></el-switch>
          <el-switch
            v-model="method.manual"
            disabled
            active-text="手动"
          ></el-switch>
        </div>
        <el-card class="info-change-button">
          <div class="info-change-button-top">
            <el-button
              size="large"
              :type="type === 1 ? 'primary' : ''"
              @click="changeInfo(1)"
              >火灾信息</el-button
            >
            <el-button
              :type="type === 2 ? 'primary' : ''"
              size="large"
              @click="changeInfo(2)"
              >故障信息</el-button
            >
            <el-button
              :type="type === 3 ? 'primary' : ''"
              size="large"
              @click="changeInfo(3)"
              >监管信息</el-button
            >
            <el-button size="large">反馈信息</el-button>
            <el-button size="large">报警信息</el-button>
            <el-button size="large">屏蔽信息</el-button>
          </div>
          <el-table
            class="info-change-button-table"
            :data="data"
            style="width: 100%; margin-top: 20px; height: 100%"
          >
            <el-table-column prop="id" label="序号" width="60" />
            <el-table-column prop="date" label="日期" width="100" />
            <el-table-column prop="controller" label="控制器号" width="100" />
            <el-table-column prop="loop" label="回路" width="60" />
            <el-table-column prop="position" label="部位" width="60" />
            <el-table-column prop="category" label="设备类别" width="100" />
            <el-table-column prop="status" label="布点状态" width="100" />
            <el-table-column prop="describe" label="描述" width="150" />
            <el-table-column prop="building" label="楼宇" width="60" />
            <el-table-column prop="floor" label="楼层" width="60" />
            <el-table-column prop="operator" label="操作员" width="70" />
            <el-table-column prop="phone" label="联系电话" width="100" />
          </el-table>
        </el-card>
      </div>
    </div>
    <div class="bottom">
      <el-card class="bottom-left">
        <div class="bottom-left-top">
          <div
            ><img src="@/assets/img/按钮绿色_01.gif" /><span
              style="margin-left: 10px"
              >主机通信正常</span
            ></div
          >
          <div
            ><img src="@/assets/img/按钮绿色_01.gif" /><span
              style="margin-left: 10px"
              >中心非通讯状态</span
            ></div
          >
        </div>
        <div class="bottom-left-middle">
          <div> <img src="@/assets/img/按钮绿色_01.gif" /><div>消音</div> </div>
          <div> <img src="@/assets/img/按钮绿色_01.gif" /><div>复位</div> </div>
          <div>
            <img src="@/assets/img/按钮绿色_01.gif" /><div>输入法</div>
          </div>
        </div>
        <div class="bottom-left-bottom">
          <div v-for="i in 9" :key="i" class="bottom-left-bottom-list">
            <img src="@/assets/img/按钮绿色_01.gif" /><span>输入法</span>
          </div>
        </div>
      </el-card>
      <el-card class="bottom-right"> </el-card>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .graphicDisplay {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 70vw;
    height: 40vw;
    background-color: #fff;

    .top {
      position: relative;
      width: 100%;
      height: 2vw;
      background-color: #0e5cd4;
      line-height: 2vw;
      color: #fff;
      :first-child {
        margin-left: 10px;
      }
      .top-middle {
        position: absolute;
        top: 0;
        left: 30%;
        > span {
          margin-left: 20px;
        }
      }
    }
    .middle {
      display: flex;
      width: 100%;
      margin-top: 5px;
      height: 13vw;
      .show-info {
        width: 20%;
        height: 95%;
        background-color: #7ca6eb;
        color: #fff;
        div {
          margin-top: 10px;
        }
      }
      .info-change {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 97%;
        margin-left: 20px;
        font-size: 15px;

        .info-change-method {
          position: absolute;
          right: 0;
          top: 0;
        }
        .info-change-button {
          margin-top: 2vw;
          height: 40vw;
        }
      }
    }
    .bottom {
      display: flex;

      width: 100%;
      background-color: rgb(24, 63, 63);
      height: 25vw;

      img {
        width: 18px;
      }
      .bottom-left {
        display: flex;
        width: 20%;
        div > img {
          vertical-align: middle;
        }
        .bottom-left-middle {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10%;
        }
        .bottom-left-bottom {
          margin-top: 22%;
          div > img {
            vertical-align: middle;
          }
          .bottom-left-bottom-list {
            > span {
              margin-left: 20px;
            }
          }
        }
      }
      .bottom-right {
        width: 80%;
      }
    }
  }
</style>
