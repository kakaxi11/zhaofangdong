<template>
  <div>
  <div class="MessageHeader">
    第三方登陆设置

    <el-button type="primary" size="small" class="refresh">刷新</el-button>
  </div>
  <div class="Wechat">
    微信登录
  </div>
<el-card class="box-card">
   <el-form :label-position="labelPosition" label-width="80px" >
  <el-form-item :label="item.name" v-for="item in WechatList" :key="item.id" >
    <el-input v-model="item.placeholder"  size="small" :type="item.istextarea===true?'textarea':''"></el-input>
  </el-form-item>
</el-form>
<el-button size="small" type="primary">保存</el-button>
      </el-card>






  

  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition:'left',
       WechatList:[
         {
          name: 'APP_KEY:',
          id:0,
          placeholder:'wxebf032217a8f2e18'
        },
         {
          name: 'APP_SECRET:',
          id:1,
          placeholder:'37fc3a6c07a0baad21d8980732a24355'
        },
         {
          name: '作用域:',
          id:2,
          placeholder:'http://quick-comic-admin.sxyj.com'
        },
        {
          name: '回调地址:',
          id:3,
          placeholder:'index.php'
        }
        
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

 padding:0 10px 10px 0px;
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
  margin-top:7px;
}

.Wechat{
  font-size:14px;
margin:10px 0 0 0;
border:1px solid #ccc;
height:35px;
width: 93px;
display:flex;
justify-content: center;
align-items:center;
}


.el-form-item{
  margin-bottom:15px;
}



</style>
