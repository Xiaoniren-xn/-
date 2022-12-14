<template>
  <div class="header_top">
    <div class="system_title">
      <el-icon style="color: #333; cursor: pointer;" size="24">
        <Operation @click="closeAside()"/>
      </el-icon>
      <h1>Freedom 管理平台</h1></div>
    <div class="user_info">
      <img src="@/assets/avact.jpg" alt="" class="user_img">
      <el-dropdown>
         <span class="el-dropdown-link">
           小倪人
           <el-icon class="el-icon--right">
            <arrow-down/>
            </el-icon>
          </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Operation, ArrowDown} from '@element-plus/icons-vue'
import {mainStore} from "@/store";

const store = mainStore()
//关闭侧边栏
const closeAside = () => {
  store.isCollapse = !store.isCollapse;
}


</script>

<style lang="scss" scoped>
.header_top {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  user-select: none;

  .system_title {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1 {
      font-size: 20px;
      font-weight: 700;
      color: #333;
      margin-left: 16px;
    }
  }

  .user_info {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    p {
      margin: 0 12px;
    }

    .user_img {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
</style>