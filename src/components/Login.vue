<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar_box">
                <div class="img_div">
                    <img src="@/assets/logo.png">
                </div>
                
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        
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
    justify-content:center;
    align-items:center;
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