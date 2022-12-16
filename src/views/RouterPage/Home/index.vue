<template>
  <div class="home">
    <div class="left">
      <div class="left_top">
        <h1 class="left_title"><span style="margin-right: 8px;">👏</span>欢迎回来 , 尊敬的系统管理员</h1>
        <div class="left_list">
          <div class="left_list_item">
            <img :src="publicImg.firstImg" class="left_title_img" alt="">
            <div class="left_list_item_text">
              <p>累计交易额</p>
              <h1 class="left_list_item_money">37,6674 W+</h1>
            </div>
          </div>
          <div class="left_list_item">
            <img :src="publicImg.twiceImg" class="left_title_img" alt="">
            <div class="left_list_item_text">
              <p>平台用户数</p>
              <h1 class="left_list_item_money">37,6674</h1>
            </div>
          </div>
          <div class="left_list_item">
            <img :src="publicImg.threeImg" class="left_title_img" alt="">
            <div class="left_list_item_text">
              <p>当日交易额</p>
              <h1 class="left_list_item_money">37,6674 W+</h1>
            </div>
          </div>
          <div class="left_list_item">
            <img :src="publicImg.fourImg" class="left_title_img" alt="">
            <div class="left_list_item_text">
              <p>昨日新增用户</p>
              <h1 class="left_list_item_money">37,6674</h1>
            </div>
          </div>
        </div>
        <div class="echarts_top_title" ref="echartsH">
          <h1 class="deal_date">交易数据 <span> &nbsp;(近七日)</span></h1>
          <div id="leftEcharts"></div>
        </div>
      </div>
      <div class="left_bottom">
        <div class="left_bottom_left">
          <h1><i class="iconfont icon" style="margin-right: 8px; color: #E6A23C; font-size: 20px;margin-left: 4px;">&#xe63c;</i>公告内容
          </h1>
          <el-table :data="tableData" style="width: 100%; height: 86%">
            <el-table-column prop="rank" label="排名"/>
            <el-table-column prop="list" label="消费榜单"/>
            <el-table-column prop="prdMoney" label="消费金额"/>
            <el-table-column prop="lastDay" label="相比昨日"/>
          </el-table>
        </div>
        <div class="left_bottom_left">
          <h1 style="justify-content: center">充提比例图</h1>
          <div id="main"></div>
        </div>
      </div>
    </div>
    <div class="right" >
      <div class="right_top">
        <h1>常用菜单</h1>
        <div class="right_top_menu">
          <div class="right_top_menu_item" v-for="(item , index ) in 6" :key="index">
            <img :src="publicImg.menuImg" alt="" class="menu_img">
            <span>菜单项{{item}}</span>
          </div>
        </div>
      </div>
      <div class="right_top">
        <h1>配置菜单</h1>
        <div class="right_top_menu">
          <div class="right_top_menu_item" v-for="(item , index ) in 6" :key="index">
            <img :src="publicImg.menuImg" alt="" class="menu_img">
            <span>菜单项{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, reactive} from "vue";
import * as echarts from 'echarts';


/**
 * @name onMounted 钩子调用方法 函数
 * @author 小倪人  189135569@qq.com
 */
onMounted(() => {
  let myChart = echarts.init(document.getElementById('leftEcharts') as HTMLElement);
  let MainCharts = echarts.init(document.getElementById('main') as HTMLElement);

  echartsOne(myChart)
  echartsTwo(MainCharts)
  window.onresize = function () {
    myChart.resize();
    MainCharts.resize();
  }
})


/**
 * @name tableData 表格假数据
 * @author 小倪人  189135569@qq.com
 */
const tableData = [
  {
    rank: Math.floor(Math.random() * 10),
    list: 'Tom',
    prdMoney: Math.floor(Math.random() * 30),
    lastDay: Math.floor(Math.random() * 10) + '%'
  }, {
    rank: Math.floor(Math.random() * 10),
    list: 'Tom',
    prdMoney: Math.floor(Math.random() * 30),
    lastDay: Math.floor(Math.random() * 100) + '%'
  }, {
    rank: Math.floor(Math.random() * 10),
    list: 'Tom',
    prdMoney: Math.floor(Math.random() * 30),
    lastDay: Math.floor(Math.random() * 100) + '%'
  }, {
    rank: Math.floor(Math.random() * 10),
    list: 'Tom',
    prdMoney: Math.floor(Math.random() * 30),
    lastDay: Math.floor(Math.random() * 100) + '%'
  }, {
    rank: Math.floor(Math.random() * 10),
    list: 'Tom',
    prdMoney: Math.floor(Math.random() * 30),
    lastDay: Math.floor(Math.random() * 100) + '%'
  }, {
    rank: Math.floor(Math.random() * 10),
    list: 'Tom',
    prdMoney: Math.floor(Math.random() * 30),
    lastDay: Math.floor(Math.random() * 100) + '%'
  }, {
    rank: Math.floor(Math.random() * 10),
    list: 'Tom',
    prdMoney: Math.floor(Math.random() * 30),
    lastDay: Math.floor(Math.random() * 100) + '%'
  }, {
    rank: Math.floor(Math.random() * 10),
    list: 'Tom',
    prdMoney: Math.floor(Math.random() * 30),
    lastDay: Math.floor(Math.random() * 100) + '%'
  }
]


/**
 * @name  echartsOne  图表一   假数据  柱状图  显示交易量
 * @author 小倪人  189135569@qq.com
 */
const echartsOne = (data: any) => {
  let option;
  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Fri', 'Sat', 'Sun', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220, 390, 330, 220, 390, 330, 220]
      }
    ]
  };
  option && data.setOption(option);
}


/**
 * @name  echartsTwo 图表二   假数据  扇形图  显示交易量
 * @author 小倪人  189135569@qq.com
 */
const echartsTwo = (data: any) => {
  let option;
  option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '40%',
      left: 'right',
      orient: 'vertical'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          {value: 1048, name: 'Search Engine'},
          {value: 735, name: 'Direct'},
          {value: 580, name: 'Email'},
          {value: 484, name: 'Union Ads'},
          {value: 300, name: 'Video Ads'}
        ]
      }
    ]
  };
  option && data.setOption(option);
}


/**
 * @name   publicImg  图片资源  尝试了多次直接本地地址好像不行  require引入
 * @author 小倪人 189135569@qq.com
 */
const publicImg = reactive({
  firstImg: require('@/assets/home_img/home_order.png'),
  twiceImg: require('@/assets/home_img/home_person_count.png'),
  threeImg: require('@/assets/home_img/home_order.png'),
  fourImg: require('@/assets/home_img/home_person_count.png'),
  menuImg: require('@/assets/home_img/home_order.png')
})

</script>

<style lang="scss" scoped>
#leftEcharts {
  width: 100%;
  height: 100%;
  margin-left: -16px;
  margin-top: -8px;
}

#main {
  width: 100%;
  height: 90%;
}


.home {
  user-select: none;
  display: flex;
  justify-content: space-between;

  .left {
    width: 81%;
    box-sizing: border-box;
    height: 100%;


    .left_top {
      height: 50vh;
      background-color: #fff;
      padding: 1.4rem 1.2rem;
      margin-bottom: 1rem;

      .left_title {
        color: #333;
        font-size: 22px;
      }

      .left_list {
        height: 8vh;
        border-top: 1px solid #f2f3f5;
        padding: 4px 0;

        border-bottom: 1px solid #f2f3f5;
        display: flex;
        justify-content: space-between;
        //margin-bottom: 1rem;
        margin: 1.4rem 0;
        align-items: center;

        .left_list_item {
          overflow: hidden;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 80%;
          width: 24.5%;
          //background-color: #0f0;
          padding: 0 1rem;
          box-sizing: border-box;

          &:nth-child(2) {
            border-right: 1px solid #f2f3f5;
            //border-left: 1px solid #f2f3f5;
          }

          &:nth-child(3) {
            border-right: 1px solid #f2f3f5;
            //border-left: 1px solid #f2f3f5;
          }

          &:nth-child(1) {
            border-right: 1px solid #f2f3f5;
            //border-left: 1px solid #f2f3f5;
          }

          .left_title_img {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            margin-right: 1rem;
          }

          .left_list_item_text {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            flex-wrap: nowrap;


            p {
              color: rgba(16, 16, 16, 1);
              font-size: 0.75rem;
              font-weight: 600;
            }

            .left_list_item_money {
              color: rgba(16, 16, 16, 1);
              font-size: 1.2rem;
              text-overflow: ellipsis;
            }
          }
        }
      }

      .echarts_top_title {
        height: 30vh;
        //background-color: #0f0;
        .deal_date {
          padding: 2px 20px 0 10px;
          display: flex;
          font-size: 20px;
          color: #333333;
          margin-bottom: 2px;
          align-items: flex-end;

          span {
            font-size: 16px;
            color: #666666;
          }
        }
      }
    }


    .left_bottom {
      width: 100%;
      //background-color: #fff;
      display: flex;
      justify-content: space-between;
      height: 35vh;

      .left_bottom_left {
        width: 49.4%;
        height: 100%;
        background-color: rgba(255, 255, 255, 1);
        padding: 20px 20px;
        box-sizing: border-box;


        h1 {
          display: flex;
          align-items: center;
          font-weight: 700;
          color: #333333;
          font-size: 18px;
          padding-bottom: 14px;
        }

        ::v-deep th {
          background-color: rgba(242, 243, 248, 1);
          color: rgba(16, 16, 16, 1);
          font-size: 16px;
          text-align: center;
        }

        ::v-deep td {
          text-align: center;
        }
      }
    }
  }

  .right {
    //background-color: #fff;
    width: 18%;
    //max-height: 21%;
    min-height: 18%;
    height: calc(100vh - 5rem);
    box-sizing: border-box;

    .right_top {
      width: 100%;
      //height: 30rem;
      background-color: #fff;
      padding: 1.4rem 1rem;
      box-sizing: border-box;
      min-height: 25%;

      &:nth-child(1) {
        border: 1px solid #f2f3f5;
      }

      h1 {
        font-size: 1rem;
        color: #333333;
        font-weight: 700;
        padding-left: 1.3rem;
      }

      .right_top_menu {
        display: flex;
        margin: 12px;
        //margin-top: 20px;
        flex-wrap: wrap;
        cursor: pointer;
        overflow: hidden;

        .right_top_menu_item {
          width: 25%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          margin-bottom: 0.8rem;

          .menu_img {
            width: 50px;
            height: 50px;
            border-radius: 8px;
            margin-bottom: 6px;
          }

          span {
            font-size: 14px;
            font-weight: 700;
            color: #333333;
          }
        }
      }
    }
  }
}
</style>
