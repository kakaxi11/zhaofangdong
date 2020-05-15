<template>
  <div>
       <div class="MessageHeader">
    快应用版本控制
    <el-button type="primary" size="small" class="refresh">刷新</el-button>
  </div>


    <el-table
    :data="tableData"
    border
    >
    <el-table-column
      prop="date"
      label="ID"
     >
    </el-table-column>
    <el-table-column
      prop="name"
      label="平台"
     >
    </el-table-column>
    <el-table-column
      prop="address"
      label="版本"
     
      >
    </el-table-column>
     <el-table-column
      prop="state"
      label="版本状态"
      
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
    data(){
        return{
              tableData: [{
          date: '0',
          name: 'vivo',
          address: '1.1.2',
          state:'正式'
        }, {
          date: '1',
          name: 'vivo',
          address: '1.1.3',
          state:'正式'
        }, {
          date: '2',
          name: 'vivo',
          address: '1.1.4',
          state:'正式'
        }, {
          date: '3',
          name: 'vivo',
          address: '1.1.5',
          state:'正式'
        },
        {
          date: '4',
          name: 'vivo',
          address: '1.1.6',
          state:'正式'
        }
        
        ]
        }
    }

}
</script>

<style lang="less">
.MessageHeader{
  display:flex;
  justify-content:space-between;
 .refresh{
 }
  padding:0 0 10px 0px;
  border-bottom: 2px solid #ccc;
}


</style>