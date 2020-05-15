<template>
  <div>
      <p>投放回收统计列表</p>
        <div class="MessageHeader">
            <div>
    <el-button type="primary" size="small" plain>选择时间</el-button>
        <el-button type="primary" size="small" plain>查询</el-button>
            <el-button type="warning" size="small"  class="Excel">导出Excel</el-button>
            </div>

   
   <el-button type="primary" size="small" >刷新</el-button>
  </div>
  
  <el-table
    :data="tableData"
    border
   >
    <el-table-column
      prop="date"    
      label="日期"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="总新增用户"
      >
    </el-table-column>
    <el-table-column
      prop="address"
      label="头条"
   
      >
    </el-table-column>
     <el-table-column
      prop="state"
      label="oppo"
    
      >
    </el-table-column>
    <el-table-column
      prop="state"
      label="APP应用"
 
      >
    </el-table-column>
    <el-table-column
      prop="state"
      label="其他（未知渠道）"
  
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

</style>