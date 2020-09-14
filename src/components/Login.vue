<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <h2>系统登录</h2>
      </div>
 <el-form class="login-form" status-icon  ref="loginFormRef" :model="loginForm" label-width="0">
    <el-form-item prop="username">
      <el-input size="small"  v-model="loginForm.username"  placeholder="请输入用户名">
        <i slot="prefix" class="iconfont icon-yonghu"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input size="small" @keyup.enter.native="login" type="password" v-model="loginForm.password" placeholder="请输入密码">
        <i slot="prefix" class="iconfont icon-mimayanzhengma"></i>
      </el-input>
    </el-form-item>
    <el-form-item class="btns">
      <el-button type="primary" size="small" @click.native.prevent="login" class="login-submit">登录</el-button>
      <el-button type="info" size="small" @click="resetLoginForm">重置</el-button>
    </el-form-item>
  </el-form>
    </div>
    <!-- 登陆表单区域 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      //这是登录表单的数据登陆对象
      loginForm: {
        'username':null,
        'password':null,
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在3到15之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度不低于6', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm() {
      //重置为原来的值
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      // validate回调函数判断表单验证是否通过,valid为真则表示通过验证
      this.$refs.loginFormRef.validate(async valid=>{
        if(!valid)return
         const res = await this.$http.post('api/auth/login', this.loginForm)
         console.log(res);  
         //从接口获取token并存入sessionStorage
        if (res.data.code !== 200) return this.$message.error('登录失败')
        this.$message.success('登录成功')
        window.sessionStorage.setItem('token', 'Bearer '+res.data.data.authorization) 
        console.log(res.data.data.authorization);       
         this.$router.push('/home')
      })  
        this.$router.push('/home') 
   }  
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image:url(../assets/login1.png);
}
.login_box {
  width: 447px;
  height: 271px;
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom:110px;
  overflow: hidden;
  .avatar_box {
    // height: 130px;
    // width: 130px;
    // border: 1px solid #eee;
    // border-radius: 50%;
    padding: 10px;
    // box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    color: rgb(27, 27, 27);
    transform: translate(-50%, -240%);
    // background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
  margin-right:20px;
  
}
.el-input{
  width:90%;
  margin-left:5%;
}

</style>
