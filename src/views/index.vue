<template>
  <div class="home">
    <el-container>
      <el-aside :style="AsideWidth">
        <Aside/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main style="padding: 0.6rem 1rem;">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Aside from '@/components/Aside/index.vue'
import Header from '@/components/Header/index.vue'
import {computed} from "vue";
import {mainStore} from "@/store";


const store = mainStore()


const AsideWidth = computed(() => {
  return store.isCollapse ? 'width:74px;transition: all .6s;' : 'width: 220px; transition: all .6s;'
})

</script>


<style lang="scss">

.el-main {
  background-color: rgba(243, 244, 246, 1);
  //height: calc(100vh - 60px);
  height: 100%;

}

.el-aside{
  background-color: #282E38;
}
</style>
