<template>
  <!--  <h1>用户列表</h1>-->
  <BreadMenu/>

  <div class="tables_container">
    <h1>查询用户</h1>
    <div class="search_container">
      <span>会员ID: </span>
      <el-input
          v-model="searchInput.searchValue"
          size="large"
          placeholder="请输入会员ID/手机号"
      />
      <el-button type="primary" :icon="Search" @click="searchUser()">查询</el-button>
      <el-button type="primary">新增下级</el-button>
    </div>
    <div style="height: 76%; background-color: #0f0;position: relative;">
      <el-table :data="tableData" height="100%" style="width: 100%;position: absolute;" :border="true">
        <el-table-column prop="UID" label="用户ID"/>
        <el-table-column prop="Phone" label="手机号" />
        <el-table-column prop="dev_info" label="设备信息"/>
        <el-table-column prop="bmikece" label="账户余额(FFIC)" width="130"/>
        <el-table-column prop="sub_person_info" label="下级成员数" width="120"></el-table-column>
        <el-table-column prop="mill_class" label="矿机种类" width="180"/>
        <el-table-column prop="reg_time" label="注册时间"/>
        <el-table-column prop="expire_timer" label="矿机到期时间"/>
        <el-table-column prop="real_name" label="实名状态">
          <template #default="scoped">
            <span :class="scoped.row.real_name === 0 ? 'active_real_name_one' : scoped.row.real_name === 1 ? 'active_real_name_two' : scoped.row.real_name  === 2 ? 'active_real_name_three' : ''">
              {{scoped.row.real_name === 0 ? '未实名' : scoped.row.real_name === 1 ? '基础实名' : scoped.row.real_name === 2 ? '已实名' : ''}}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button type="primary" style="height: 1.6rem;">邀请详情</el-button>
            <el-button type="danger" style="height: 1.6rem;" @click="deleteUser(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style=" padding: 1rem 1rem; display: flex; justify-content: end">
      <el-pagination
          small
          background
          layout="prev, pager, next"
          :total="50"
      />
    </div>
  </div>

</template>

<script setup lang="ts">
import BreadMenu from '@/components/common/BreadMenu/index'
import {reactive} from "vue";
import {Search} from '@element-plus/icons-vue'
import {ElMessage, ElMessageBox} from "element-plus";


/**
 *  搜索框表单数据
 * @name searchInput.searchValue  查询按钮前面输入框数据
 * @author 小倪人  189135569@qq.com
 */
const searchInput = reactive({
  searchValue: ''
})


/**
 * @name tableData 表格虚拟数据
 * @name  UID 会员ID
 * @name Phone 手机号
 * @name dev_info 设备信息
 * @name bmikece z账户余额
 * @name mill_class   矿机种类
 * @name  expire_timer  矿机到期时间
 * @name  reg_time   注册时间
 * @name  real_name    是否实名
 * @author 小倪人  189135569@qq.com
 */
const tableData = [
  {
    "id": 1,
    "UID": "100001",
    "Phone": "18736000320",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥74",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-08-20",
    "reg_time": "2022-02-06",
    "real_name": 0,
    "sub_person_info": 10
  },
  {
    "id": 2,
    "UID": "100001",
    "Phone": "18734110211",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥68",
    "mill_class": "Freedom运算力二号机",
    "expire_timer": "2022-06-12",
    "reg_time": "2022-03-06",
    "real_name": 0,
    "sub_person_info": 10
  },
  {
    "id": 3,
    "UID": "100001",
    "Phone": "17167675157",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥79",
    "mill_class": "Freedom云算力三号机",
    "expire_timer": "2022-08-17",
    "reg_time": "2022-09-13",
    "real_name": 2,
    "sub_person_info": 12
  },
  {
    "id": 4,
    "UID": "100001",
    "Phone": "18996341460",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥87",
    "mill_class": "Freedom运算力二号机",
    "expire_timer": "2021-12-27",
    "reg_time": "2022-07-29",
    "real_name": 2,
    "sub_person_info": 22
  },
  {
    "id": 5,
    "UID": "100001",
    "Phone": "18813512923",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥94",
    "mill_class": "Freedom云算力三号机",
    "expire_timer": "2022-01-06",
    "reg_time": "2022-01-23",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 6,
    "UID": "100001",
    "Phone": "17728124109",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥44",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-09-22",
    "reg_time": "2022-06-14",
    "real_name": 2,
    "sub_person_info": 10
  },
  {
    "id": 7,
    "UID": "100001",
    "Phone": "16623582891",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥59",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-03-27",
    "reg_time": "2022-11-04",
    "real_name": 0,
    "sub_person_info": 10
  },
  {
    "id": 8,
    "UID": "100001",
    "Phone": "15846256528",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥35",
    "mill_class": "Freedom运算力二号机",
    "expire_timer": "2022-06-02",
    "reg_time": "2022-02-08",
    "real_name": 0,
    "sub_person_info": 10
  },
  {
    "id": 9,
    "UID": "100001",
    "Phone": "15144832690",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥48",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-07-30",
    "reg_time": "2022-11-08",
    "real_name": 0,
    "sub_person_info": 10
  },
  {
    "id": 10,
    "UID": "100001",
    "Phone": "18384560759",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥44",
    "mill_class": "Freedom云算力三号机",
    "expire_timer": "2022-11-24",
    "reg_time": "2022-10-02",
    "real_name": 0,
    "sub_person_info": 10
  },
  {
    "id": 11,
    "UID": "100001",
    "Phone": "18748863293",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥74",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-02-10",
    "reg_time": "2022-03-28",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 12,
    "UID": "100001",
    "Phone": "15642248771",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥55",
    "mill_class": "Freedom云算力三号机",
    "expire_timer": "2022-04-14",
    "reg_time": "2022-05-01",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 13,
    "UID": "100001",
    "Phone": "18925298562",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥86",
    "mill_class": "Freedom云算力三号机",
    "expire_timer": "2022-10-31",
    "reg_time": "2022-08-01",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 14,
    "UID": "100001",
    "Phone": "18142690488",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥11",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-03-25",
    "reg_time": "2022-04-23",
    "real_name": 0,
    "sub_person_info": 10
  },
  {
    "id": 15,
    "UID": "100001",
    "Phone": "18664477559",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥30",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-04-05",
    "reg_time": "2022-06-09",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 16,
    "UID": "100001",
    "Phone": "17684747831",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥19",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-10-07",
    "reg_time": "2021-12-28",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 17,
    "UID": "100001",
    "Phone": "13382008674",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥20",
    "mill_class": "Freedom运算力二号机",
    "expire_timer": "2022-08-23",
    "reg_time": "2022-10-24",
    "real_name": 2,
    "sub_person_info": 10
  },
  {
    "id": 18,
    "UID": "100001",
    "Phone": "17226588577",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥3",
    "mill_class": "Freedom运算力二号机",
    "expire_timer": "2022-06-05",
    "reg_time": "2022-11-14",
    "real_name": 2,
    "sub_person_info": 10
  },
  {
    "id": 19,
    "UID": "100001",
    "Phone": "18023600406",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥99",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-08-06",
    "reg_time": "2022-11-07",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 20,
    "UID": "100001",
    "Phone": "15671618292",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥33",
    "mill_class": "Freedom云算力三号机",
    "expire_timer": "2022-02-17",
    "reg_time": "2022-07-03",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 21,
    "UID": "100001",
    "Phone": "13412839967",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥99",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-11-29",
    "reg_time": "2022-07-21",
    "real_name": 0,
    "sub_person_info": 10
  },
  {
    "id": 22,
    "UID": "100001",
    "Phone": "13351968054",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥66",
    "mill_class": "Freedom运算力二号机",
    "expire_timer": "2022-06-03",
    "reg_time": "2022-05-08",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 23,
    "UID": "100001",
    "Phone": "13736821078",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥53",
    "mill_class": "Freedom云算力三号机",
    "expire_timer": "2021-12-23",
    "reg_time": "2022-08-29",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 24,
    "UID": "100001",
    "Phone": "18152217004",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥72",
    "mill_class": "Freedom运算力二号机",
    "expire_timer": "2022-02-17",
    "reg_time": "2022-01-26",
    "real_name": 0,
    "sub_person_info": 10
  },
  {
    "id": 25,
    "UID": "100001",
    "Phone": "13745144903",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥61",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-04-29",
    "reg_time": "2022-03-07",
    "real_name": 0,
    "sub_person_info": 10
  },
  {
    "id": 26,
    "UID": "100001",
    "Phone": "15028811373",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥11",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-04-18",
    "reg_time": "2022-11-16",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 27,
    "UID": "100001",
    "Phone": "18884352127",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥99",
    "mill_class": "Freedom运算力二号机",
    "expire_timer": "2022-11-22",
    "reg_time": "2022-06-04",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 28,
    "UID": "100001",
    "Phone": "17849493602",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥39",
    "mill_class": "Freedom云算力三号机",
    "expire_timer": "2022-05-28",
    "reg_time": "2022-07-19",
    "real_name": 2,
    "sub_person_info": 10
  },
  {
    "id": 29,
    "UID": "100001",
    "Phone": "17537316556",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥29",
    "mill_class": "Freedom运算力二号机",
    "expire_timer": "2022-07-22",
    "reg_time": "2022-10-01",
    "real_name": 0,
    "sub_person_info": 10
  },
  {
    "id": 30,
    "UID": "100001",
    "Phone": "15046435150",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥57",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-04-06",
    "reg_time": "2022-08-26",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 31,
    "UID": "100001",
    "Phone": "18874588314",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥75",
    "mill_class": "Freedom云算力三号机",
    "expire_timer": "2022-07-22",
    "reg_time": "2022-09-10",
    "real_name": 2,
    "sub_person_info": 10
  },
  {
    "id": 32,
    "UID": "100001",
    "Phone": "15066497923",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥65",
    "mill_class": "Freedom云算力三号机",
    "expire_timer": "2022-05-14",
    "reg_time": "2022-09-04",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 33,
    "UID": "100001",
    "Phone": "15181706614",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥92",
    "mill_class": "Freedom云算力三号机",
    "expire_timer": "2022-08-21",
    "reg_time": "2022-11-24",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 34,
    "UID": "100001",
    "Phone": "13555934706",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥4",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-02-04",
    "reg_time": "2021-12-31",
    "real_name": 0,
    "sub_person_info": 10
  },
  {
    "id": 35,
    "UID": "100001",
    "Phone": "17837864693",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥49",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-06-18",
    "reg_time": "2022-06-04",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 36,
    "UID": "100001",
    "Phone": "18217124328",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥80",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-04-05",
    "reg_time": "2022-03-01",
    "real_name": 2,
    "sub_person_info": 10
  },
  {
    "id": 37,
    "UID": "100001",
    "Phone": "18382014842",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥33",
    "mill_class": "Freedom运算力二号机",
    "expire_timer": "2022-01-01",
    "reg_time": "2022-12-02",
    "real_name": 2,
    "sub_person_info": 10
  },
  {
    "id": 38,
    "UID": "100001",
    "Phone": "18018708822",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥26",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-02-23",
    "reg_time": "2022-05-18",
    "real_name": 2,
    "sub_person_info": 10
  },
  {
    "id": 39,
    "UID": "100001",
    "Phone": "17713017359",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥75",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-09-01",
    "reg_time": "2022-12-06",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 40,
    "UID": "100001",
    "Phone": "13792796229",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥1",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-11-01",
    "reg_time": "2022-10-03",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 41,
    "UID": "100001",
    "Phone": "18670450796",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥5",
    "mill_class": "Freedom云算力三号机",
    "expire_timer": "2022-10-15",
    "reg_time": "2022-09-01",
    "real_name": 2,
    "sub_person_info": 10
  },
  {
    "id": 42,
    "UID": "100001",
    "Phone": "15233225164",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥91",
    "mill_class": "Freedom云算力三号机",
    "expire_timer": "2022-11-12",
    "reg_time": "2022-10-22",
    "real_name": 0,
    "sub_person_info": 10
  },
  {
    "id": 43,
    "UID": "100001",
    "Phone": "17718167539",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥57",
    "mill_class": "Freedom云算力三号机",
    "expire_timer": "2022-12-04",
    "reg_time": "2022-11-23",
    "real_name": 2,
    "sub_person_info": 10
  },
  {
    "id": 44,
    "UID": "100001",
    "Phone": "16654653224",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥37",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-03-30",
    "reg_time": "2022-09-29",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 45,
    "UID": "100001",
    "Phone": "14960785389",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥29",
    "mill_class": "Freedom云算力一号机",
    "expire_timer": "2022-09-09",
    "reg_time": "2022-11-18",
    "real_name": 2,
    "sub_person_info": 10
  },
  {
    "id": 46,
    "UID": "100001",
    "Phone": "18594966384",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥18",
    "mill_class": "Freedom运算力二号机",
    "expire_timer": "2022-02-03",
    "reg_time": "2022-01-15",
    "real_name": 2,
    "sub_person_info": 10
  },
  {
    "id": 47,
    "UID": "100001",
    "Phone": "13272385241",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥97",
    "mill_class": "Freedom运算力二号机",
    "expire_timer": "2022-08-15",
    "reg_time": "2022-06-09",
    "real_name": 0,
    "sub_person_info": 10
  },
  {
    "id": 48,
    "UID": "100001",
    "Phone": "13553938258",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥87",
    "mill_class": "Freedom云算力三号机",
    "expire_timer": "2022-10-14",
    "reg_time": "2022-02-25",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 49,
    "UID": "100001",
    "Phone": "16668046364",
    "dev_info": " 'IOS 15'",
    "bmikece": "￥1",
    "mill_class": "Freedom云算力三号机",
    "expire_timer": "2022-10-16",
    "reg_time": "2022-02-03",
    "real_name": 1,
    "sub_person_info": 10
  },
  {
    "id": 50,
    "UID": "100001",
    "Phone": "18137250501",
    "dev_info": "'安卓3.0'",
    "bmikece": "￥11",
    "mill_class": "Freedom运算力二号机",
    "expire_timer": "2022-01-19",
    "reg_time": "2022-09-30",
    "real_name": 2,
    "sub_person_info": 10
  }
]


/**
 * 按钮操作处理函数部分
 * @name  searchUser 查询按钮
 * @name  deleteUser 删除用户
 * @author 小倪人  189135569@qq.com
 */
const searchUser = ()=>{
  console.log('点击查询',searchInput.searchValue)
}

const deleteUser = (row: any)=>{
  ElMessageBox.confirm(
      `您确认删除用户${row.UID}吗?`,
      '提示',
      {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning',
      }
  )
      .then(() => {
        ElMessage({
          type: 'success',
          message: '删除成功',
        })
      })
      .catch(() => {
        ElMessage({
          type: 'error',
          message: '删除失败',
        })
      })
}

</script>



<style lang="scss" scoped>

// 实名状态
.active_real_name_one {
  color: rgba(245, 108, 108, 1);
  font-weight: 500;}

.active_real_name_two {
  color: rgba(60, 156, 255, 1);
}

.active_real_name_three {
  color: rgba(83, 194, 29, 1);
}

// element  ul 样式修改
::v-deep .el-table__inner-wrapper{
  height: 100%!important;
}
::v-deep th{
  background-color: rgba(242, 243, 245, 1)!important;
  height: 3rem;
  text-align: center !important;
}
::v-deep td{
  text-align: center !important;
}
::v-deep .el-input__inner{
  height: 100%;
}


//主体样式
.tables_container {
  position: relative;
  margin: 0.8rem 0;
  padding: 1rem 1rem;
  background-color: #fff;
  box-sizing: border-box;
  height: 80vh;

  h1 {
    font-weight: 600;
    font-size: 20px;
    color: rgba(16, 16, 16, 1);
    padding-left: 0.4rem;
  }

  .search_container {
    padding: 1rem 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    span {
      padding-left: 0.4rem;
      color: rgba(78, 89, 105, 1);
      font-size: 0.88rem;
      font-weight: 600;
    }

    .el-input {
      width: 14rem;
      height: 1.8rem;
      margin: 0 1rem;
      user-select: none;
    }

    .el-button {
      height: 1.8rem;
      background-color: rgba(31, 99, 255, 1);
      font-size: 0.88rem;
      border: none;
    }

  }
}
</style>
