<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像 -->
            <div class="avatar_box">
                    <img src="@/assets/logo.png">
            </div>
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click='resetLoginForm()'>重置</el-button>
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
                loginForm : {
                    username:'admin',
                    password:'123456'
                },
                loginFormRules:{
                    username:[
                        {required:true,message:'请输入用户名',trigger:'blur'},
                        {min:3,max:15,message:"长度在3到15之间",trigger:'blur'}
                    ],
                    password:[
                        {required:true,message:'请输入密码',trigger:'blur'},
                        {min:6,message:"密码长度不低于6",trigger:'blur'}
                    ]
                }
            }
        },
        methods: {
            resetLoginForm() {
                this.$refs.loginFormRef.resetFields();//重置为原来的值
            },
            login(){
                this.$refs.loginFormRef.validate(async valid=>{
                    if(!valid) return; 
                    const {data:res} = await this.$http.post('login',this.loginForm);
                    if(res.meta.status !== 200) return this.$message.error('登录失败');
                    this.$message.success('登录成功');
                    window.sessionStorage.setItem("token",res.data.token);
                    this.$router.push('/home')
                })
            }
        },
    }
</script>

<style lang="less" scoped>
.login_container{
    background-color:#2b4b6b;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content:center;
}
.avatar_box{
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding:10px;
    box-shadow: 0 0 10px #ddd;

}
img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
}
</style>