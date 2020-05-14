<template>
  <div>
      <p>充值统计图表</p>
        <div class="MessageHeader">
        <div>
            <el-button type="primary" size="small" plain>选择时间</el-button>
            <el-button type="primary" size="small" plain>查询</el-button>
        </div> 
   <el-button type="primary" size="small" >刷新</el-button>
  </div>


 <el-row :gutter="20">
  <el-col :span="6"><div class="bg">昨日充值</div></el-col>
  <el-col :span="6"><div class="bg">今日充值</div></el-col>
  <el-col :span="6"><div class="bg">本月充值</div></el-col>
  <el-col :span="6"><div class="bg">总充值</div></el-col>
</el-row>

    <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-blue">
      app充值
      </div></el-col>
  <el-col :span="6"><div class="grid-content bg-aqua">
        今日充值
      </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">  app充值</div></el-col>
  <el-col :span="6"><div class="grid-content bg-green">  app充值</div></el-col>
</el-row>
  <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-blue"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-aqua"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-green"></div></el-col>
</el-row>
  

    <div id="myChart" :style="{width: '1200px', height: '450px'}"></div>

    <el-table
    :data="tableData"
    border
    style="width: 97%">
    <el-table-column
      prop="date"    
      label="日期"
      width="200">
    </el-table-column>
    <el-table-column
      prop="name"
      label="总新增用户"
      width="280">
    </el-table-column>
    <el-table-column
      prop="address"
      label="头条"
      width="280"
      >
    </el-table-column>
     <el-table-column
      prop="state"
      label="oppo"
      width="280"
      >
    </el-table-column>
    <el-table-column
      prop="state"
      label="APP应用"
      width="280"
      >
    </el-table-column>
    <el-table-column
      prop="state"
      label="其他（未知渠道）"
      width="280"
      >
    </el-table-column>
  </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
 

  </div>
</template>

<script>


export default {
  name: 'hello',
  data () {
    return {
     testRes:[
          {
              name:"重庆",  //name点的名称
              value:369,   //value在y轴的位置高度
              orgNum:15485,
              regCapital:1907
          },  
          {
              name:"上海",
              value:276,
              orgNum:15485,
              regCapital:1907
          },
            {
              name:"文档",
              value:563,
              orgNum:15485,
              regCapital:1907
          },
            {
              name:"sss",
              value:613,
              orgNum:15485,
              regCapital:1907
          },
           {
              name:"kss",
              value:513,
              orgNum:15485,
              regCapital:1907
          }
      ],
      testLes:[
          {
              name:"重庆",  //name点的名称
              value:249,   //value在y轴的位置高度
              orgNum:15485,
              regCapital:1907
          },  
          {
              name:"上海",
              value:336,
              orgNum:15485,
              regCapital:1907
          },
            {
              name:"文档",
              value:453,
              orgNum:15485,
              regCapital:1907
          },
            {
              name:"sss",
              value:343,
              orgNum:15485,
              regCapital:1907
          },
           {
              name:"kss",
              value:533,
              orgNum:15485,
              regCapital:1907
          }
      ]
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))

// this.testRes = res.responBody.map(item => {
//      let jsonData = {}
//      jsonData.name = item.adminArea
//      jsonData.value = item.orgNum 
//      jsonData.regCapital = item.regCapital 
    
//      return jsonData
// })

        // 绘制图表
        myChart.setOption({
            title: { text: '用户折线图' },
            tooltip: {
    trigger: 'item',
    formatter: function(a) {
        //进行格式处理
        return (
            `${a['name']}</br>机构数量: ${a['value']} (${a['data'].orgNum}%)</br>注册资金: ${a['data'].regCapital} 亿元 (${a['data'].regCapitalPercent}%)</br>职工人数: ${a['data'].orgNum} (${a['data'].employeeNumPercent}%)`
        )
    }
},

            xAxis: {
                data: ["2020-05-06","2020-05-07","2020-05-08","2020-05-09","2020-05-06"]
            },
            yAxis: {},
            //series用于设置多个折线图
            series: [
                {
                    type:'line',
                    data:this.testRes
                },
                {
                    type:'line',
                    data:this.testLes
                }
            ]
        });
    }
  }
}
</script>

<style lang="less" scoped>
p{
    font-size:13px;
}
.MessageHeader{
  display:flex;
  justify-content:space-between;
 .refresh{
   margin-left:73%;
 }

 padding:0 10px 10px 0px;
  border-bottom: 2px solid #ccc;
}
  .el-row {
    margin-bottom: 20px;
    margin-top:10px;
    color:white;
    text-align:center;

    &:last-child {
      margin-bottom: 0;
     
    }
  }
  .el-col {
    border-radius: 4px;
  
    
    
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #605ca8), color-stop(1, #9491c4)) !important;
  }
  .bg-green{
    background:  -webkit-gradient(linear, left bottom, left top, color-stop(0, #00a65a), color-stop(1, #00ca6d)) !important;
  }
  .bg-blue {
    background-color: #0073b7 !important;
}
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    height:150px;
    line-height:150px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
    .bg{
        font-size:19px;
        color: rgb(66, 66, 66);
    }
    .bg-aqua{
        background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #00c0ef), color-stop(1, #14d1ff)) !important;
    }
</style>