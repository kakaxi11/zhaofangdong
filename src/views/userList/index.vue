<template>
  <div>
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

<style>

</style>