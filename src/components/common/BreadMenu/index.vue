<template>
  <div class="bread_menu">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>您当前所在位置 ：</el-breadcrumb-item>
      <el-breadcrumb-item class="break_menu_item">首页</el-breadcrumb-item>
      <el-breadcrumb-item class="break_menu_item">用户列表</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">


/**
 *
 * @author 小倪人  189135569@qq.com
 */


</script>

<style scoped lang="scss">
.break_menu_item :hover {
  color: #409EFF !important;
}

.break_menu_item {
  color: #333333;
  cursor: pointer;
}

.bread_menu {
  user-select: none;
  height: 3.75rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding-left: 1rem;
}
</style>
