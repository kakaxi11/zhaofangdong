<template>
  <div>
     <div class="MessageHeader">
           全局搜索
          <el-input placeholder="用户名|昵称" size="small">
          </el-input>        
    <el-button  size="small" type="primary" >搜索</el-button>
   <el-button  size="small" type="primary" >添加</el-button> 
   <el-button  size="small"  type="primary" >显示全部</el-button>
   <el-button  size="small"  type="warning" >批量删除</el-button>
  </div>


    <p>会员列表</p>
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
      :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="20">
    </el-pagination>
  </div>
  
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.MessageHeader{
  display:flex;
  align-items: center;
 .refresh{
   margin-left:73%;
 }
 .el-input{
   width:300px;
   margin:0 20px;
 }

 padding:0 10px 10px 0px;
  border-bottom: 2px solid #ccc;
}
</style>