<template>
  <div>
      <p>充值列表</p>
        <div class="MessageHeader">
        
     <el-input placeholder="用户名|ID 订单号" size="small"></el-input>

   <el-select v-model="value" placeholder="支付状态" size="small">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

<el-select v-model="value" placeholder="支付方式" size="small">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="value" placeholder="充值类型" size="small">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  <el-select v-model="value" placeholder="应用" size="small">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  
  <el-select v-model="value" placeholder="应用" size="small">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>



<el-button type="primary" size="small" >选择时间</el-button>
    <el-button type="primary" size="small" >搜索查询</el-button>
   
   <el-button type="primary" size="small" >显示全部</el-button>
   <el-button type="warning" size="small" >导出Excel</el-button>
      <el-button type="primary" size="small" class="refresh">刷新</el-button>
  </div>
  
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
    data(){
        return{
             options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
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
  justify-content:flex-start;
    .el-input{
        width:200px;
    }

 padding:0 10px 10px 0px;
  border-bottom: 2px solid #ccc;
  .el-button{
      margin-left:30px;
  }
}
.el-select{
    width:140px;
    margin:0 3px
}
.refresh{
    margin:0 0 0 130px !important;
}
</style>