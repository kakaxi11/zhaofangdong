<template>
  <div>
   <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>股票</el-breadcrumb-item>
  <el-breadcrumb-item>持有股</el-breadcrumb-item>
</el-breadcrumb>

    <div class="MessageHeader">
      <div>
        <el-input
          size="small"
          style="width:230px"
          placeholder="用户ID | IDnumber |昵称|手机号"
          v-model="queryInfo.key"
          clearable
        ></el-input>
        <el-button type="primary" size="small" @click="Search">
          <i class="iconfont icon-sousuo"></i>查询
        </el-button>
        <el-button type="warning" size="small" class="Excel" @click="exportExcel">导出Excel</el-button>
      </div>
      <el-button type="primary" size="small" @click="refresh" class="refresh">
        <i class="iconfont icon-shuaxin"></i>刷新
      </el-button>
    </div>
    <el-table :data="userList" border id="out-table" stripe>
      <el-table-column prop="uid" label="uid"></el-table-column>
      <el-table-column prop="userType" label="注册来源">
        <!-- app和快应用通过el-tag标签进行标识。 充值列表也要做一个标识 -->
        <template slot-scope="scope">
    <el-tag
    v-if="scope.row.userType===1"
    effect="dark"
    color="#24E32E"
    style="width:45px;height:26px;line-height:26px;text-align:center;"
    >
  APP
  </el-tag>
  <el-tag
    v-else
    effect="dark"
    color="#4285F5"
     style="width:45px;height:26px;line-height:26px; padding:0px;"
    >
    快应用
  </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="isYk" label="注册方式">
        <template slot-scope="scope">{{scope.row.isYk===1?'游客用户':'注册用户'}}</template>
      </el-table-column>
      <el-table-column prop="idnumber" label="IDnum"></el-table-column>
      <el-table-column prop="username" label="昵称"></el-table-column>
      <el-table-column prop="score" label="书币"></el-table-column>
      <!-- <el-table-column
      prop="userType"
      label="注册渠道"
      >
      </el-table-column>-->
      <el-table-column prop="userface" label="头像">
        <template slot-scope="scope">
          <div v-if="scope.row.userface">
            <img :src="scope.row.userface" alt style="width:65%" />
          </div>
          <!-- <v-if="" img :src="scope.row.userface" alt="" style="width:65%" >
          <v-else img src="@/assets/default.png" >-->
          <div v-else>
            <img src="@/assets/default.png" alt style="width:65%" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="sex" label="性别">
        <template slot-scope="scope">
          <i v-if="scope.row.sex===1" class="iconfont icon-nan"></i>
           <i v-else class="iconfont icon-nv"></i>
          </template>
      </el-table-column>
      <el-table-column prop="mobile" label="手机号" min-width="99"></el-table-column>
      <el-table-column prop="isvip" label="vip"></el-table-column>
      <el-table-column prop="createTime" label="注册时间" min-width="140">
        <template slot-scope="scope">
          {{scope.row.createTime*1000 | dateFormat}}
          <!-- 作用于插槽替换默认样式使用filter -->
        </template>
      </el-table-column>
      <el-table-column prop="lastLoginTime" label="最后登录时间" min-width="140">
        <template slot-scope="scope">
          {{scope.row.lastLoginTime*1000 | dateFormat}}
          <!-- 作用于插槽替换默认样式使用filter -->
        </template>
      </el-table-column>
      <el-table-column prop="state" label="操作" min-width="100">
        <template slot-scope="scope">
            <el-tooltip content="查看用户明细">
          <el-button size="mini" type="primary" icon="el-icon-view" @click="view(scope.row.uid)"></el-button>
          </el-tooltip>
          <el-tooltip content="删除 ">
          <el-button size="mini" type="danger" icon="el-icon-delete" @click="remove(scope.row.uid)"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.page"
      layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[5, 10, 15]"
      :total="total"
    ></el-pagination>
    <el-dialog title="用户明细" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
      <div style="overflow-y:scroll; height:600px;">
        <el-table :data="payList" title="充值明细">
          <el-table-column label="充值明细">
            <el-table-column property="id" label="id"></el-table-column>
            <el-table-column property="idnumber" label="idnumber"></el-table-column>
            <el-table-column property="username" label="用户昵称"></el-table-column>
            <el-table-column property="orderType" label="充值类型">
              <template
                slot-scope="scope"
              >{{scope.row.orderType===1?'书币充值':scope.row.orderType===2?'包月会员':scope.row.orderType===3?'季度会员':scope.row.orderType===4?'半年会员':'包年会员'}}</template>
            </el-table-column>
            <el-table-column property="orderMoney" label="充值金额"></el-table-column>
            <template slot-scope="scope">{{'￥'+scope.row.orderMoney}}</template>
            <el-table-column property="orderAddtime" label="订单生成时间">
              <template slot-scope="scope">{{scope.row.orderAddtime*1000 | dateFormat}}</template>
            </el-table-column>
          </el-table-column>
        </el-table>
        <!-- 
        三个表格的切换翻页方法handleSizeChange名字记得改一下，或者用一个就用一个方法把参数传进来的同时进行判断看是哪一个对象的size，再根据不同的请求对象修改参数。-->
        <el-pagination
          small
          @size-change="payhandleSizeChange"
          @current-change="payhandleCurrentChange"
          :current-page="payInfo.page"
        layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[5, 10, 15]"
         :page-size="5"
      :total="paytotal"
        ></el-pagination>
        <el-table :data="signList">
          <el-table-column label="连续签到明细">
            <el-table-column property="id" label="id"></el-table-column>
            <el-table-column property="idnumber" label="idnumber"></el-table-column>
            <el-table-column property="username" label="用户昵称"></el-table-column>
            <el-table-column property="content" label="内容"></el-table-column>
            <el-table-column property="score" label="代金卷"></el-table-column>
            <el-table-column property="addtime" label="签到时间">
              <template slot-scope="scope">{{scope.row.addtime*1000 | dateFormat}}</template>
            </el-table-column>
          </el-table-column>
        </el-table>
        <el-pagination
          small
          @size-change="signhandleSizeChange"
          @current-change="signhandleCurrentChange"
          :current-page="Signinfo.page"
            layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[5, 10, 15]"
          :page-size="5"
          :total="Signtotal"
        ></el-pagination>
        <el-table :data="giveList">
          <el-table-column label="消费明细">
            <el-table-column property="id" label="id"></el-table-column>
            <el-table-column property="idnumber" label="idnumber"></el-table-column>
            <el-table-column property="username" label="用户昵称"></el-table-column>
            <el-table-column property="content" label="内容"></el-table-column>
            <el-table-column property="score" label="代金卷"></el-table-column>
            <el-table-column property="addtime" label="签到时间">
              <template slot-scope="scope">{{scope.row.addtime*1000 | dateFormat}}</template>
            </el-table-column>
          </el-table-column>
        </el-table>
        <el-pagination
          small
          @size-change="givehandleSizeChange"
          @current-change="givehandleCurrentChange"
          :current-page="giveinfo.page"
          layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[5, 10, 15]"
         :page-size="5"
          :total="givetotal"
        ></el-pagination>

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import FileSaver from 'file-saver'
import XLSX from 'xlsx'

export default {
  data() {
    return {
      dialogVisible: false,
      userList: [],
      queryInfo: {
        page: 1,
        size: 10,
        key: ''
      },
      //充值明细请求体
      payInfo: {
        page: 1,
        type: 1,
        size: 5
      },
      //签到明细请求体
      Signinfo: {
        page: 1,
        type: 2,
        size:5
      },
      //赠送明细请求体
      giveinfo: {
        page: 1,
        type: 3,
        size:5
      },
      //连续签到明细,赠送明细，充值明细
      signList: [],
      giveList: [],
      payList: [],
      total: null,
      givetotal:null,
      paytotal:null,
      Signtotal:null
    }
  },
  methods: {
    payhandleSizeChange(newsize) {
      console.log(newsize)
      this.payInfo.page = 1
      this.payInfo.size = newsize
      this.$http.get(`admin/user/recharge/log/get`, { params: this.payInfo }).then(res => {
        this.payList = res.data.data.list
      })
    },
    payhandleCurrentChange(newpage) {
      console.log(newpage)
      this.payInfo.page = newpage
      this.$http.get(`admin/user/recharge/log/get`, { params: this.payInfo }).then(res => {
        this.payList = res.data.data.list
      })
    },
    signhandleSizeChange(newsize) {
      console.log(newsize)
      this.Signinfo.page = 1
      this.Signinfo.size = newsize
      this.$http.get(`admin/user/recharge/log/get`, { params: this.Signinfo }).then(res => {
        this.signList = res.data.data.list
      })
    },
    signhandleCurrentChange(newpage) {
      console.log(newpage)
      this.Signinfo.page = newpage
      this.$http.get(`admin/user/recharge/log/get`, { params: this.Signinfo }).then(res => {
        this.signList = res.data.data.list
      })
    },
    givehandleSizeChange(newsize) {
      console.log(newsize)
      this.giveinfo.page = 1
      this.giveinfo.size = newsize
      this.$http.get(`admin/user/recharge/log/get`, { params: this.giveinfo }).then(res => {
        this.giveList = res.data.data.list
      })
    },
    givehandleCurrentChange(newpage) {
      console.log(newpage)
      this.giveinfo.page = newpage
      this.$http.get(`admin/user/recharge/log/get`, { params: this.giveinfo }).then(res => {
        this.giveList = res.data.data.list
      })
    },
    view(id) {
      //把id加入请求体，其他字段由分页器选择决定。
      console.log(id)
      this.payInfo.page = 1

      this.dialogVisible = true
      this.payInfo.id = id
      this.Signinfo.id = id
      this.giveinfo.id = id
      //  改写为带params带请求体
      this.$http.get(`admin/user/recharge/log/get`, { params: this.payInfo }).then(res => {
        this.payList = res.data.data.list
          this.paytotal = res.data.data.total
      })
      this.$http.get(`admin/user/recharge/log/get`, { params: this.Signinfo }).then(res => {
        this.signList = res.data.data.list
          this.Signtotal = res.data.data.total
      })
      this.$http.get(`admin/user/recharge/log/get`, { params: this.giveinfo }).then(res => {
        this.giveList = res.data.data.list
        this.givetotal = res.data.data.total
      })
    },
    exportExcel() {
      /* 从表生成工作簿对象 */
      var wb = XLSX.utils.table_to_book(document.querySelector('#out-table'))
      /* 获取二进制字符串作为输出 */
      var wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'array'
      })
      try {
        FileSaver.saveAs(
          //Blob 对象表示一个不可变、原始数据的类文件对象。
          //Blob 表示的不一定是JavaScript原生格式的数据。
          //File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
          //返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
          new Blob([wbout], { type: 'application/octet-stream' }),
          //设置导出文件名称
          'sheetjs.xlsx'
        )
      } catch (e) {
        if (typeof console !== 'undefined') console.log(e, wbout)
      }
      return wbout
    },
    Search() {
      this.queryInfo.page = 1
      this.getList()
    },
    refresh() {
      this.queryInfo.type = 1
      this.queryInfo.page = 1
      this.queryInfo.size = 10
      this.queryInfo.key = ''
      this.getList()
    },
    handleSizeChange(newsize) {
      console.log(newsize)
      this.queryInfo.page = 1
      this.queryInfo.size = newsize
      this.getList()
    },
    handleCurrentChange(newpage) {
      this.queryInfo.page = newpage
      this.getList()
      
    },
    //数据请求api
    getList() {
      this.$http
        .get('admin/index/user/list/get', {
          params: this.queryInfo
        })
        .then(res => {
          this.userList = res.data.data.list
          this.total = res.data.data.total
          console.log(res)
          this.userList.forEach(item => {
            //转化参数的数据格式
            switch (item.isvip) {
              case 1:
                item.isvip = '普通'
                break
              case 2:
                item.isvip = '包月'
                break
              case 3:
                item.isvip = '季度'
                break
              case 4:
                item.isvip = '半年'
                break
              case 5:
                item.isvip = '包年'
                break
            }
            return
          })
        })
    }
  },
  created() {
    this.getList()
  },
  mounted() {
    console.log(this.userList)
  }
}
</script>

<style lang="less" scoped>
p {
  font-size: 13px;
}
.MessageHeader {
  display: flex;
  justify-content: space-between;
  .el-button {
    margin-left: 5px;
  }
  div {
    display: flex;

    align-items: center;
  }
  .refresh {
    // position: fixed;
    // right: 19px;
  }

  padding: 0 10px 10px 0px;
  border-bottom: 2px solid #ccc;
}
.el-dialog {
  
  .el-table {
    margin: 5px 0;
    border-radius: 7px;
  }
  .el-pagination {
    margin: 7px 0 35px 0;
    text-align: right;
  }
}

</style>