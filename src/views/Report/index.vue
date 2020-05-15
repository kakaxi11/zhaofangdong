<template>
  <div>
      <p>举报用户列表</p>
        <div class="MessageHeader">
    
   
   <el-button type="primary" size="small">刷新</el-button>
  </div>
  
  <el-table
    :data="ReportList"
    border
    style="width: 97%">
    <el-table-column
      prop="username"    
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
      queryInfo:{
        page:1,
        size:5
      },
      ReportList:[]
    }
  },
  created(){
      this.$http.get('admin/report/get',{params:this.queryInfo}).then(res=>{
       this.ReportList = res.data.data.list
      })

    }

}
</script>

<style lang="less" scoped>
p{
    font-size:13px;
}
.MessageHeader{
  
  display:flex;
  justify-content:flex-end;
 .refresh{
   margin-left:73%;
 }

 padding:0 10px 10px 0px;
  border-bottom: 2px solid #ccc;
}

</style>