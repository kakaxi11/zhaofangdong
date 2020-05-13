<template>
  <div>
    <!-- 短信配置区域 -->
  <div class="MessageHeader">
    华为云短信
    <el-button type="warning" size="small">查看错误码</el-button>
    <el-button type="primary" size="small" class="refresh">刷新</el-button>
  </div>
  <el-card class="box-card">
      <el-form :label-position="labelPosition" label-width="80px" >
  <el-form-item :label="item.name" v-for="item in Mslist" :key="item.id" >
    <el-input v-model="item.placeholder"  size="small" :type="item.id===8?'textarea':''"></el-input>
  </el-form-item>
</el-form>
<el-button size="small" type="primary">保存</el-button>
   <el-button size="small">重置</el-button>
</el-card>
 



  </div>
</template>

<script>
export default {
  data() {
    return {
      //权限列表
      labelPosition:'left',
      Mslist:[
         {
          name: 'APP_KEY:',
          id:0,
          placeholder:'46fzO6jSD8fB0Vg51uFz96xJT9M4'
        },
         {
          name: 'APP_SECRET:',
          id:1,
          placeholder:'wA26WzjtHN1T089vjvDXkEalTOM9'
        },
         {
          name: '签名名称:',
          id:2,
          placeholder:'书香漫画'
        },
        {
          name: '签名通道:',
          id:3,
          placeholder:'8819092320309'
        },
          {
          name: '模板ID:',
          id:4,
          placeholder:'b429d1cc16d5453a9272649738ba5761'
        },
        
      ]
    }
  },
  created() {

  },
  methods: {
 
  }
}
</script>

<style lang="less" scoped>
.MessageHeader{
  display:flex;
  justify-content:space-between;
 .refresh{
   margin-left:73%;
 }

 padding:0 0 10px 0px;
  border-bottom: 2px solid #ccc;
}
.el-form{
  white-space: nowrap;
  .el-input{
    width:510px;
    margin-left:35px;

  }
}
.box-card{
  margin-top:30px;
}
.el-form-item{
  margin-bottom:15px;
}
</style>
