<template>
  <div>
    <p>会员列表</p>
      <el-table
    :data="userList"
    border
  >
    <el-table-column
      prop="date"    
      label="uid"
      min-width="50"
     >
    </el-table-column>
    <el-table-column
      prop="userType"
      label="注册来源"
     >
    </el-table-column>
    <el-table-column
      prop="isYk"
      label="注册方式" 
      >
    </el-table-column>
     <el-table-column
      prop="idnumber"
      label="IDnum" 
      >
    </el-table-column>
    <el-table-column
      prop="username"
      label="昵称"
      min-width="97"
      >
    </el-table-column>
    <el-table-column
      prop="score"
      label="书币"
      >
    </el-table-column>
    <el-table-column
      prop=""
      label="注册渠道"
      >
    </el-table-column>
    <el-table-column
      prop="state"
      label="注册计划ID"
      >
    </el-table-column>
    <el-table-column
      prop="state"
      label="注册漫画ID"
      >
    </el-table-column>
    <el-table-column
      prop="state"
      label="头像"
      >
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      >
    </el-table-column>
    <el-table-column
      prop="state"
      label="手机号"
      >
    </el-table-column>
    <el-table-column
      prop="isvip"
      label="vip"
      >
    </el-table-column>
    <el-table-column
      prop="state"
      label="三方登录"
      >
    </el-table-column>
    <el-table-column
      prop="state"
      label="状态"
      >
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="注册时间"
       min-width="140"
      >
      <template slot-scope="scope">
        {{scope.row.createTime | dateFormat}}
        <!-- 作用于插槽替换默认样式使用filter -->
        </template>
    </el-table-column>
    <el-table-column
      prop="lastLoginTime"
      label="最后登录时间"
      min-width="140"
      >
       <template slot-scope="scope">
        {{scope.row.lastLoginTime | dateFormat}}
        <!-- 作用于插槽替换默认样式使用filter -->
        </template>
    </el-table-column>
    <el-table-column
      prop="state"
      label="操作"
      >
    </el-table-column>
  </el-table>
   <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
  
</template>

<script>
export default {
   data(){
     return{
          userList:[],
          queryInfo:{
            page:1,
            size:10
          },
          total:1000
     }
   },
   created(){
      this.$http.get('admin/index/user/list/get',
      {
        params: this.queryInfo
      }
      ).then(res=>{
        this.userList = res.data.data.list
         this.userList.forEach(item=>      
       {
               item.isvip = item.isvip===1?'普通会员':'高级会员'
               item.isYk = item.isYK===1?'游客':'注册'
               item.userType = item.userType===1?'APP':'快应用'
               item.sex = item.sex===1?'男':'女'
               console.log(item.isYk);                           
               return 
       } 
        )
        
        
      })
     
   }




}
</script>

<style>

</style>