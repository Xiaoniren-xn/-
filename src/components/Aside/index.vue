<template>
  <div class="aside" :style="AsideWidth">
    <el-menu
        style="border: none; height: 100vh;"
        default-active="2"
        :collapse="store.isCollapse"
        background-color="#282E38"
        text-color="#FFFFFF"
        unique-opened
        :collapse-transition="true"
        router
    >
      <div class="user_info">
        <img src="@/assets/avact.jpg" alt="" class="user_img" :style="userImg">
        <h1 v-if="!store.isCollapse">超级管理员</h1>
      </div>
      <el-menu-item index="/home">
        <i class="icon iconfont iTextIcon">&#xe608;</i>
        <template #title>
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <i class="icon iconfont iTextIcon">&#xe642;</i>
          <span>用户管理</span>
        </template>
        <el-menu-item class="menu_item_el" index="/UserList">用户列表</el-menu-item>
        <el-menu-item class="menu_item_el" index="/UserInvit">邀请记录</el-menu-item>
        <el-menu-item class="menu_item_el" index="/WithDrowControl">提现管理</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="3">
        <template #title>
          <i class="icon iconfont iTextIcon">&#xe614;</i>
          <span>订单管理</span>
        </template>
        <el-menu-item class="menu_item_el" index="/MillOrder">矿机记录</el-menu-item>
        <el-menu-item class="menu_item_el" index="/MoneyOrder">资金记录</el-menu-item>
        <el-menu-item class="menu_item_el" index="/BusinessAdmin">商家管理</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/UserWithDrow">
        <i class="icon iconfont iTextIcon">&#xe6bb;</i>
        <template #title>用户提现</template>
      </el-menu-item>
      <el-menu-item index="/UserIdCardCheck">
        <i class="icon iconfont iTextIcon">&#xe60a;</i>

        <template #title>实名审核</template>
      </el-menu-item>
      <el-menu-item index="/ChromAuthentication">
        <i class="icon iconfont iTextIcon">&#xeaa8;</i>

        <template #title>谷歌解绑</template>
      </el-menu-item>
      <el-menu-item index="/ExchangeRateAllcation">
        <i class="icon iconfont iTextIcon">&#xe628;</i>

        <template #title>汇率配置</template>
      </el-menu-item>
      <el-menu-item index="/AppSetting">
        <i class="icon iconfont iTextIcon">&#xe615;</i>

        <template #title>APP配置</template>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {mainStore} from "../../store/index";

const store = mainStore()


const AsideWidth = computed(() => {
  return store.isCollapse ? 'width:74px;' : 'width: 220px;'
})

const userImg = computed(() => {
  return store.isCollapse ? 'width: 30px;' : 'width: 50px;'
})


</script>

<style scoped lang="scss">
::v-deep .is-opend {
  border: none !important;
}

.aside {
  width: 100%;
  user-select: none;
  background-color: #282E38;
  border: 0;
  box-sizing: border-box;

  transition: all .6s !important;


  height: 100vh;
  //overflow: hidden;
  //
  //position: relative;
  //
  // ::v-deep .el-menu{
  //  position: absolute!important;
  //  left: 0!important;
  //  top: 0!important;
  //}

  .user_info {
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
    align-items: center;
    color: #fff;
    padding-bottom: 20px;
    padding-top: 10px;
    border-top: none;

    .user_img {
      width: 40px;
      border-radius: 50%;
      margin-left: 8px;
    }

    h1 {
      font-weight: 700;
      font-size: 20px;
      margin-left: 10px;
    }
  }

  .iTextIcon {
    margin: 0 12px;
  }

  .menu_item_el {
    padding-left: 76px !important;
  }
}


</style>