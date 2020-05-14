<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
    
        <span>香漫画</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse?'64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区 -->
        <el-menu background-color="#333744" router text-color="#fff" active-text-color="#409EFF" unique-opened :collapse="isCollapse" :collapse-transition="false">
          <!-- 一级菜单 -->
          
      
          <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
            <!-- 一级菜单模板区 -->
            <template slot="title">
              <i :class="'iconfont '+iconFontList[item.id]"></i>
              <span>{{item.name}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id">
              <template slot="title">
                <i class="iconfont icon-normal"></i>
                <span>{{ subItem.aname }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  created() {
    // this.getMenuList()
  },
  data() {
    return {
      //左侧菜单数据
 iconFontList:[
   'icon-xitongshezhi',
   'icon-quanxianguanli',
'icon-kehuhuiyuanguanli',
'icon-icon-',
'icon-caiwu',
'icon-rizhiguanli'
 ],





        menulist:[
      {
        name:'系统设置',
        id:0,
       
        children:[
          {
        aname:'系统设置',
         path:'system',
        },
        {
        aname:'短信配置',
         path:'rights',
        },
        {
        aname:'第三方登陆设置',
        path:'goods',
        },
        {
        aname:'支付设置',
         path:'paySession'
        },
     
{
        aname:'快应用版本管理',
       path:'fastApp'
        },

        ]
      },
        {
        name:'权限管理',
        id:1,
        children:[
            {
        aname:'管理员列表',
         path:'AuthorityList',
        },
        {
        aname:'用户组列表',
         path:'echars'
        },
        {
        aname:'菜单规则',
        path:'AuthoUserList'
        }

        ]
        },
        {
        name:'会员管理',
        id:2,
         
        children:[
          {
        aname:'用户统计',
        path:'userTotal'
        },
        {
        aname:'会员列表',
        path:'userList'
        },
        {
        aname:'会员等级',
        path:'userLevel'
        },
        {  
      aname:'充值配置',
      path:'paySetting'
        },
        {
          aname:'举报用户',
          path:'Report'
        },
         {
          aname:'意见反馈',
          path:'suggestion'
        }
        ]

      },
       {
        name:'漫画管理',
        id:3,
        
      },
      {
        name:'财务统计',
        id:4,
         
        children:[
          {
        aname:'充值统计',
        path:'PaymentStatistics'
        },
        {
        aname:'漫画充值',
        path:'cartoonPay'
        },
        {
        aname:'广告投放回收',
        path:'Advertisement'
        },
{
        aname:'充值列表',
        path:'PayList'
        },


        ]
      }
      ,{
        name:'日志管理',
        id:5,
      }
    ],
     

      iconObj: {
        '125': 'iconfont icon-user',
        '103': 'iconfont icon-tijikongjian',
        '101': 'iconfont icon-shangpin',
        '102': 'iconfont icon-danju',
        '145': 'iconfont icon-baobiao'
      },
      // width:window.document.documentElement.clientWidth,
      isCollapse:false
    }
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    //获取所有请求
    // async getMenuList() {
    //   const { data: res } = await this.$http.get('menus')
    //   if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
    //   // this.menulist = res.data
    //   console.log(res)
    // },
    //点击按钮切换菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
      console.log(this.width);
    },
    //实时监听屏幕获取clientwitdh传递给this.widtth。
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
    background-color: #18BC9C;
  div {
    display: flex;
    align-items: center;
  
    span {
      margin-left: 65px;
      font-weight:600;
    }
  }
}
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.iconfont {
  margin-right: 10px;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
