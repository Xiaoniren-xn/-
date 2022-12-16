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
    </div>
    <div style="height: 76%; background-color: #0f0;position: relative;">
      <el-table :data="tableData" height="100%" style="width: 100%;position: absolute;" :border="true">

        <el-table-column prop="UID" label="用户ID"/>
        <el-table-column prop="Phone" label="手机号"/>
        <el-table-column prop="Pwd" label="密码"/>
        <el-table-column prop="deviceInfo" label="设备信息"/>
        <el-table-column prop="loginTime" label="登录时间"/>
        <el-table-column prop="RegTime" label="注册时间"/>
        <el-table-column prop="IPaddress" label="IP地址"/>
        <el-table-column prop="ModelState" label="绑定状态">
          <template #default="scoped">
            <span>{{ scoped.row.ModelState === 0 ? '未绑定' : '已绑定' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="IsRelName" label="是否实名">
          <template #default="scoped">
            <span
                :class="scoped.row.IsRelName === 0 ? 'active_real_name_one' : scoped.row.IsRelName === 1 ? 'active_real_name_two' : scoped.row.IsRelName  === 2 ? 'active_real_name_three' : ''">
              {{scoped.row.IsRelName === 0 ? '未实名' : scoped.row.IsRelName === 1 ? '基础实名' : scoped.row.IsRelName === 2 ? '已实名' : ''}}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="240">
          <template #default="scope">
            <el-button type="warning" style="height: 1.6rem;" @click="closeLogin(scope.row)">封禁
            </el-button>
            <el-button type="success" style="height: 1.6rem;" @click="openLogin(scope.row)">解封
            </el-button>
            <el-button type="danger" style="height: 1.6rem;" @click="deleteUser(scope.row)">删除
            </el-button>
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
import { reactive} from "vue";
import {Search} from '@element-plus/icons-vue'
import {ElMessage, ElMessageBox} from 'element-plus'




/**
 *  搜索框表单数据
 *  @name searchInput.searchValue  查询按钮前面输入框数据
 * @author 小倪人  189135569@qq.com
 */
const searchInput = reactive({
  searchValue: ''
})


/**
 * 表格虚拟数据
 * @author 小倪人  189135569@qq.com
 */
const tableData = [
  {
    "id": 1,
    "UID": 100001.0,
    "Phone": "18124639016",
    "Pwd": "IsD!DE",
    "deviceInfo": "Android 3.0 ",
    "loginTime": "2022-01-22",
    "IPaddress": "34.228.118.169",
    "ModelState": 0,
    "IsRelName": 0,
    "RegTime": "2022-04-02"
  },
  {
    "id": 2,
    "UID": 100002.0,
    "Phone": "13858127655",
    "Pwd": "P$oM7sc#3H",
    "deviceInfo": " IOS 16.0",
    "loginTime": "2022-06-05",
    "IPaddress": "255.63.207.231",
    "ModelState": 0,
    "IsRelName": 1,
    "RegTime": "2022-09-29"
  },
  {
    "id": 3,
    "UID": 100003.0,
    "Phone": "18959393445",
    "Pwd": "ez6IQh",
    "deviceInfo": "Android 3.0 ",
    "loginTime": "2022-11-16",
    "IPaddress": "63.198.47.204",
    "ModelState": 0,
    "IsRelName": 1,
    "RegTime": "2022-06-27"
  },
  {
    "id": 4,
    "UID": 100004.0,
    "Phone": "13332346091",
    "Pwd": "2ZNa7qcRTL",
    "deviceInfo": " IOS 16.0",
    "loginTime": "2022-11-06",
    "IPaddress": "93.51.233.163",
    "ModelState": 1,
    "IsRelName": 2,
    "RegTime": "2022-08-05"
  },
  {
    "id": 5,
    "UID": 100005.0,
    "Phone": "14956255434",
    "Pwd": "%SdJLg?mF",
    "deviceInfo": "Android 3.0 ",
    "loginTime": "2022-08-21",
    "IPaddress": "11.184.228.205",
    "ModelState": 0,
    "IsRelName": 0,
    "RegTime": "2022-04-22"
  },
  {
    "id": 6,
    "UID": 100006.0,
    "Phone": "18150136583",
    "Pwd": "J3b#VY!R66",
    "deviceInfo": " IOS 16.0",
    "loginTime": "2022-06-08",
    "IPaddress": "151.111.187.237",
    "ModelState": 1,
    "IsRelName": 2,
    "RegTime": "2022-09-26"
  },
  {
    "id": 7,
    "UID": 100007.0,
    "Phone": "16678546271",
    "Pwd": "P8O$Z0S&",
    "deviceInfo": "Android 3.0 ",
    "loginTime": "2022-11-26",
    "IPaddress": "176.22.130.224",
    "ModelState": 0,
    "IsRelName": 2,
    "RegTime": "2022-08-17"
  },
  {
    "id": 8,
    "UID": 100008.0,
    "Phone": "15740317534",
    "Pwd": "pbtL-f1N!K&",
    "deviceInfo": "Android 3.0 ",
    "loginTime": "2022-03-06",
    "IPaddress": "55.117.159.245",
    "ModelState": 0,
    "IsRelName": 0,
    "RegTime": "2022-12-09"
  },
  {
    "id": 9,
    "UID": 100009.0,
    "Phone": "14510853516",
    "Pwd": "27!E3rvze!",
    "deviceInfo": "Android 3.0 ",
    "loginTime": "2022-10-18",
    "IPaddress": "111.161.5.226",
    "ModelState": 0,
    "IsRelName": 2,
    "RegTime": "2022-11-20"
  },
  {
    "id": 10,
    "UID": 100010.0,
    "Phone": "13883874907",
    "Pwd": "^TJhJvt^A",
    "deviceInfo": " IOS 16.0",
    "loginTime": "2022-06-23",
    "IPaddress": "161.125.137.23",
    "ModelState": 0,
    "IsRelName": 1,
    "RegTime": "2022-10-10"
  },
  {
    "id": 11,
    "UID": 100011.0,
    "Phone": "15067330715",
    "Pwd": "62%J9BPOp",
    "deviceInfo": "Android 3.0 ",
    "loginTime": "2022-03-06",
    "IPaddress": "12.175.55.116",
    "ModelState": 0,
    "IsRelName": 0,
    "RegTime": "2022-08-15"
  },
  {
    "id": 12,
    "UID": 100012.0,
    "Phone": "18178426380",
    "Pwd": "hv%ty&-2Fn",
    "deviceInfo": " IOS 16.0",
    "loginTime": "2022-01-20",
    "IPaddress": "183.84.112.167",
    "ModelState": 1,
    "IsRelName": 0,
    "RegTime": "2022-05-23"
  },
  {
    "id": 13,
    "UID": 100013.0,
    "Phone": "15622373629",
    "Pwd": "7!^#2vF*",
    "deviceInfo": "Android 3.0 ",
    "loginTime": "2022-10-22",
    "IPaddress": "120.118.209.251",
    "ModelState": 1,
    "IsRelName": 2,
    "RegTime": "2022-09-28"
  },
  {
    "id": 14,
    "UID": 100014.0,
    "Phone": "17751450721",
    "Pwd": "0wC7%pwbW",
    "deviceInfo": "Android 3.0 ",
    "loginTime": "2022-06-02",
    "IPaddress": "242.46.117.53",
    "ModelState": 0,
    "IsRelName": 0,
    "RegTime": "2022-10-22"
  },
  {
    "id": 15,
    "UID": 100015.0,
    "Phone": "13415699759",
    "Pwd": "8kIhJ$EGKA^",
    "deviceInfo": "Android 3.0 ",
    "loginTime": "2022-01-16",
    "IPaddress": "217.174.67.28",
    "ModelState": 0,
    "IsRelName": 0,
    "RegTime": "2022-07-25"
  },
  {
    "id": 16,
    "UID": 100016.0,
    "Phone": "18149391795",
    "Pwd": "uhdUqvp",
    "deviceInfo": "Android 3.0 ",
    "loginTime": "2022-03-19",
    "IPaddress": "137.158.230.69",
    "ModelState": 1,
    "IsRelName": 2,
    "RegTime": "2022-03-22"
  },
  {
    "id": 17,
    "UID": 100017.0,
    "Phone": "15685193764",
    "Pwd": "gk_@f640",
    "deviceInfo": " IOS 16.0",
    "loginTime": "2022-01-11",
    "IPaddress": "93.78.51.148",
    "ModelState": 1,
    "IsRelName": 1,
    "RegTime": "2022-12-14"
  },
  {
    "id": 18,
    "UID": 100018.0,
    "Phone": "18791773178",
    "Pwd": "PWFtf?D",
    "deviceInfo": " IOS 16.0",
    "loginTime": "2022-09-02",
    "IPaddress": "112.152.105.245",
    "ModelState": 1,
    "IsRelName": 1,
    "RegTime": "2022-10-11"
  },
  {
    "id": 19,
    "UID": 100019.0,
    "Phone": "17753658906",
    "Pwd": "nteMxL",
    "deviceInfo": "Android 3.0 ",
    "loginTime": "2022-07-14",
    "IPaddress": "78.57.253.76",
    "ModelState": 0,
    "IsRelName": 2,
    "RegTime": "2022-10-15"
  },
  {
    "id": 20,
    "UID": 100020.0,
    "Phone": "18442312257",
    "Pwd": "py06pu",
    "deviceInfo": " IOS 16.0",
    "loginTime": "2022-09-30",
    "IPaddress": "55.27.236.149",
    "ModelState": 1,
    "IsRelName": 2,
    "RegTime": "2022-02-13"
  },
  {
    "id": 21,
    "UID": 100021.0,
    "Phone": "17887515061",
    "Pwd": "h#dI@iJ",
    "deviceInfo": "Android 3.0 ",
    "loginTime": "2022-01-26",
    "IPaddress": "196.130.72.252",
    "ModelState": 0,
    "IsRelName": 2,
    "RegTime": "2022-03-21"
  },
  {
    "id": 22,
    "UID": 100022.0,
    "Phone": "15065320167",
    "Pwd": "MzsXjbh1",
    "deviceInfo": " IOS 16.0",
    "loginTime": "2022-11-29",
    "IPaddress": "207.6.53.79",
    "ModelState": 0,
    "IsRelName": 1,
    "RegTime": "2022-08-14"
  },
  {
    "id": 23,
    "UID": 100023.0,
    "Phone": "14510540101",
    "Pwd": "!Sqv5zc",
    "deviceInfo": "Android 3.0 ",
    "loginTime": "2022-11-08",
    "IPaddress": "230.45.37.204",
    "ModelState": 0,
    "IsRelName": 0,
    "RegTime": "2022-01-29"
  },
  {
    "id": 24,
    "UID": 100024.0,
    "Phone": "14768602204",
    "Pwd": "l#5bO%",
    "deviceInfo": "Android 3.0 ",
    "loginTime": "2022-01-22",
    "IPaddress": "190.175.36.203",
    "ModelState": 0,
    "IsRelName": 1,
    "RegTime": "2021-12-25"
  },
  {
    "id": 25,
    "UID": 100025.0,
    "Phone": "17221956441",
    "Pwd": "ToqUUhFlZukD",
    "deviceInfo": " IOS 16.0",
    "loginTime": "2022-07-30",
    "IPaddress": "214.138.231.192",
    "ModelState": 1,
    "IsRelName": 2,
    "RegTime": "2022-07-31"
  },
  {
    "id": 26,
    "UID": 100026.0,
    "Phone": "17831554036",
    "Pwd": "8NAP84WA",
    "deviceInfo": " IOS 16.0",
    "loginTime": "2022-04-08",
    "IPaddress": "176.245.22.217",
    "ModelState": 1,
    "IsRelName": 1,
    "RegTime": "2022-11-20"
  },
  {
    "id": 27,
    "UID": 100027.0,
    "Phone": "17138032325",
    "Pwd": "IxqGDzL3x",
    "deviceInfo": "Android 3.0 ",
    "loginTime": "2022-11-23",
    "IPaddress": "123.98.150.19",
    "ModelState": 1,
    "IsRelName": 0,
    "RegTime": "2022-06-06"
  },
  {
    "id": 28,
    "UID": 100028.0,
    "Phone": "16638781260",
    "Pwd": "wO!P*KiK3",
    "deviceInfo": "Android 3.0 ",
    "loginTime": "2022-01-14",
    "IPaddress": "217.100.13.241",
    "ModelState": 0,
    "IsRelName": 1,
    "RegTime": "2022-01-09"
  },
  {
    "id": 29,
    "UID": 100029.0,
    "Phone": "13256354639",
    "Pwd": "4DMy#xql",
    "deviceInfo": "Android 3.0 ",
    "loginTime": "2022-07-20",
    "IPaddress": "46.148.133.157",
    "ModelState": 0,
    "IsRelName": 0,
    "RegTime": "2022-01-18"
  },
  {
    "id": 30,
    "UID": 100030.0,
    "Phone": "18436758266",
    "Pwd": "E@?^GlgK5_G",
    "deviceInfo": " IOS 16.0",
    "loginTime": "2022-10-10",
    "IPaddress": "193.227.158.49",
    "ModelState": 0,
    "IsRelName": 1,
    "RegTime": "2022-10-13"
  }
]


/**
 * 按钮操作处理函数部分
 * @name  closeLogin 封禁用户操作
 * @name  openLogin 解封
 * @name  deleteUser 删除用户
 * @name  searchUser 查询按钮
 * @author 小倪人  189135569@qq.com
 */
const searchUser = () => {
  console.log('点击查询', searchInput.searchValue)
}

const closeLogin = (row: any) => {
  console.log('封禁', row.id)
}

const openLogin = (row: any) => {
  console.log('解封', row.id)
}

const deleteUser = (row: any) => {
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
::v-deep .el-table__inner-wrapper {
  height: 100% !important;
}

::v-deep th {
  background-color: rgba(242, 243, 245, 1) !important;
  height: 3rem;
  text-align: center !important;
}

::v-deep td {
  text-align: center !important;
}

::v-deep .el-input__inner {
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
