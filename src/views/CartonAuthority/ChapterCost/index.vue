<template>
  <div>
      <p>章节费用配置</p>
     <div class="MessageHeader">  
   <el-button  size="small" type="primary" >添加</el-button> 

   <el-button  size="small"  type="primary" >刷新</el-button>
  </div>
 
    <el-card>
        <div>
        <i>*</i> 收费章节费用(元)  <el-input style="width:400px" size="mini"></el-input>

        <div class="btn">
            <el-button type="primary" size="small">保存</el-button>
             <el-button size="small">重置</el-button>
        </div>
        </div>
    </el-card>

  
    
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
  justify-content: space-between;
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
.el-card{
    padding-left:200px;
    div{
        margin:10px 0;
    }
    i{
        color: red;
    }
}
</style>