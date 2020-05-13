<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane  label="用户管理" name="first">
      <el-card>
     <el-form :label-position="labelPosition" label-width="80px" >
  <el-form-item :label="item.name" v-for="item in formLabelAlign" :key="item.id" >
    <el-input v-model="item.placeholder"  size="small" :type="item.id===8?'textarea':''"></el-input>
  </el-form-item>
</el-form>
  <el-button size="small" type="primary">保存</el-button>
   <el-button size="small">返回</el-button>
</el-card>
      </el-tab-pane>
      
    <el-tab-pane label="配置管理" name="second">
      <el-card>
   <el-form :label-position="labelPosition" label-width="80px" >
  <el-form-item :label="item.name" v-for="item in formLabelAlign2" :key="item.id" >
    <el-input v-model="item.placeholder"  size="small" :type="item.istextarea===true?'textarea':''"></el-input>
  </el-form-item>
</el-form>
<el-button size="small" type="primary">保存</el-button>
   <el-button size="small">返回</el-button>
      </el-card>
    </el-tab-pane>
  
    <el-tab-pane label="开关设置" name="third">
      <el-card>
 <el-form :label-position="labelPosition" label-width="80px">
  <el-form-item :label="item.name" v-for="item in sessionList" :key="item.id" >
   <div   class="sessionlist">
       <el-radio v-model="radio[item.id]" label="1">开启</el-radio>
   <el-radio v-model="radio[item.id]" label="2">关闭</el-radio>
   </div>
  </el-form-item>
</el-form>
<el-button size="small" type="primary">保存</el-button>
   <el-button size="small">返回</el-button>
</el-card>
    </el-tab-pane>

  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
          radio:['1','2','2','2','2'],
        activeName: 'first',
          labelPosition: 'left',
        formLabelAlign: 
        [
           {
          name: '默认搜索词:',
          region: '',
          type: '',
          id:0,
          placeholder:'青春女孩'
        },
         {
          name: '网站名称:',
          region: '',
          type: '',
           id:1,
            placeholder:'香漫画'
        },
         {
          name: '网站域名:',
          region: '',
          type: '',
           id:2,
           placeholder:'http://quick-comic-admin.sxyj.com'
        },
         {
          name: '附件域名:',
          region: '',
          type: '',
           id:3,
           placeholder:'http://quick-comic-img.sxyj.com'
        },
         {
          name: '分享链接:',
          region: '',
          type: '',
           id:4,
             placeholder:'http://app-comic-download.sxyj.com'
        },
        {
          name: '上传文件根目录:',
          region: '',
          type: '',
           id:5,
            placeholder:'D:/wwwroot/sxmh/img/'
        },
        {
          name: '备案号:',
          region: '',
          type: '',
           id:6,
           placeholder:'渝ICP备14008776号-14'
        },
        {
          name: '版权信息:',
          region: '',
          type: '',
           id:7,
           placeholder:'Copyright (C) 2018 www.3k8.com 邪恶漫画 All rights reserved'
        },
        {
          name: '网站统计代码:',
          region: '',
          type: '',
           id:8,
           placeholder:'',
           istextarea:true
        }
        ],

          formLabelAlign2: 
        [
           {
          name: 'SEO标题:',
          region: '',
          type: '',
          id:0,
          placeholder:'书香漫画,书香漫画大全'
        },
         {
          name: 'SEO关键字:',
          region: '',
          type: '',
           id:1,
            placeholder:'书香漫画,书香漫画大全',
            istextarea:true
        },
          {
          name: 'SEO描述:',
          region: '',
          type: '',
           id:2,
            placeholder:'有趣的邪恶漫画原创网站,提供新颖的邪恶漫画大全,希望你能爱上这里的邪恶漫画！',
            istextarea:true
        }
        ],
        sessionList:[
          {
          name: '快应用审核开关:',
           id:0
        },
        {
          name: '手机端:',
           id:1,
        },
        {
          name: '后台验证码:',
           id:2
        },
        {
          name: '前台验证码:',
           id:3,
            
        },
        {
          name: '留言邮件提醒:',
        
           id:4
        }
          
        ]
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang="less" scoped>
.el-tab-pane{
  
   margin-left:20px;
 
   white-space: nowrap;
   .sessionlist{
     border:1px solid rgb(180, 176, 180);
     margin-left:30px;
     width:590px;
     border-radius:5px ;
     .el-radio{
       margin-left:30px;
     }
     .el-form-item{
       margin-bottom: 5px;
     }
   }
}
.el-input{
  margin-left:30px;
  width:520px;
}
.el-textarea{
  margin-left:30px;
  width:520px;
}
.el-card{
    width:1200px;
    padding:30px;
}
.el-form-item{
  margin-bottom:15px;
}
</style>