<template>
  <div>
   <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>股票</el-breadcrumb-item>
  <el-breadcrumb-item>股票信息</el-breadcrumb-item>
</el-breadcrumb>
    <div class="MessageHeader">
      <div>
        <el-input
          size="small"
          style="width:130px"
          placeholder="股票名称"
          v-model="queryInfo.name"
          clearable
        ></el-input>
         <el-input
          size="small"
          style="width:130px;margin:0 5px;"
          placeholder="股票代码"
          v-model="queryInfo.code"
          clearable
        ></el-input>
        <el-button type="primary" size="small" @click="Search">
          <i class="iconfont icon-sousuo"></i>查询
        </el-button>
   
        <el-button type="warning" size="small" class="Excel" @click="exportExcel">导出Excel</el-button>
             <el-switch
            style="margin-left:25px;"
  v-model="showCompany"
  active-text="展示数量单位"
  inactive-text="隐藏数量单位">
</el-switch>
      </div>
      <el-button type="primary" size="small" @click="refresh" class="refresh">
        <i class="iconfont icon-shuaxin"></i>刷新
      </el-button>
    </div>
    <el-dialog  :visible.sync="dialogFormVisible" fullscreen>
<div>
<b style="font-size:16px;margin-right:20px;">持股信息列表</b>
  <el-button type="warning" @click="back" style="margin-bottom:10px;">返回上层</el-button>
</div>
   <el-table :data="holdShareList" border id="out-table" stripe>
      <el-table-column prop="hdDate" label="时间"></el-table-column>
      <el-table-column prop="sCode" label="代码"></el-table-column>
      <el-table-column prop="sName" label="名称"></el-table-column>
     <el-table-column prop="shareholdSum" label="持股数量(股)" min-width="70">
   <template slot-scope="scope"
   >
              <!-- <p style="color:red;" v-show="showCompany">
              {{scope.row.shareholdSum>100000000?scope.row.shareholdSum/100000000+'亿':scope.row.shareholdSum>10000000?scope.row.shareholdSum/10000000+'千万':scope.row.shareholdSum>1000000?scope.row.shareholdSum/1000000+'百万':scope.row.shareholdSum}}
              </p> -->
              <p style="color:red;" v-show="!showCompany">
            {{scope.row.shareholdSum}}
              </p>
<div v-show="showCompany">
 <p style="color:red;" v-show="scope.row.shareholdSum>100000000">
    {{scope.row.shareholdSum/100000000| number}} <a>亿</a>
  </p>
 <p style="color:red;" v-show="scope.row.shareholdSum<100000000" >
    {{scope.row.shareholdSum/10000| number}} <a>万</a>
  </p>

</div>




            </template>
     </el-table-column>
       <el-table-column prop="shareholdPrice" label="持股数值(元)" min-width="70">
             <template slot-scope="scope" >
                 <p style="color:red;" v-show="!showCompany">
            {{scope.row.shareholdPrice}}
              </p>
<div v-show="showCompany">
 <p style="color:red;" v-show="scope.row.shareholdPrice>100000000">
    {{scope.row.shareholdPrice>100000000?scope.row.shareholdPrice/100000000:''| number}} <a>亿</a>
  </p>
<p style="color:red;" v-show="scope.row.shareholdPrice<100000000" >
    {{scope.row.shareholdPrice/10000| number}} <a>万</a>
  </p>
</div>
            </template>
       </el-table-column>
        <el-table-column prop="sharesrate" label="持股数量占A股百分比(%)" min-width="70"></el-table-column>
      <el-table-column prop="closePrice" label="当日收盘价" ></el-table-column>
            <el-table-column prop="zdf" label="当日涨跌幅" ></el-table-column>
            <el-table-column prop="shareholdPriceOne" label="持股市值变化(元)1日"></el-table-column>
            <el-table-column prop="shareholdPriceFive" label="持股市值变化(元)5日"></el-table-column>
             <el-table-column prop="shareholdPriceTen" label="市盈率" min-width="持股市值变化(元)10日"></el-table-column>
              <el-table-column prop="market" label="标签" min-width="70"></el-table-column>
               <el-table-column prop="shareholdSumChg" label="是否通用">
                   <template slot-scope="scope">
                       {{scope.row.isCurrency===true?'是':'否'}}
                   </template>
               </el-table-column>
            <!-- <el-table-column prop="zb" label="类型"></el-table-column>
            <el-table-column prop="zzb" label="最高价"></el-table-column> -->
            <el-table-column prop="updateTime" label="更新时间" min-width="90"></el-table-column>
            <el-table-column prop="createTime" label="创建时间" min-width="90"></el-table-column>
    </el-table>
   <el-pagination
      @size-change="handleSizeChangeHold"
      @current-change="handleCurrentChangeHold"
      :current-page="holdShareInfo.page"
      layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[10,15,20,30]"
      :total="holdShareTotal"
    ></el-pagination>
</el-dialog>
    <el-dialog  :visible.sync="HkdialogFormVisible" fullscreen>
<div>
<b style="font-size:16px;margin-right:20px;">沪深港持股信息</b>
  <el-button type="warning" @click="HKback" style="margin-bottom:10px;">返回上层</el-button>
</div> 
   <el-table :data="HKholdShareList" border id="out-table" stripe >
      <el-table-column prop="hdDate" label="时间"></el-table-column>
      <el-table-column prop="sCode" label="代码"></el-table-column>
      <el-table-column prop="sName" label="名称"></el-table-column>
     <el-table-column prop="shareholdSum" label="持股数量(股)" min-width="70">
          <template slot-scope="scope" >
                     <p style="color:red;" v-show="!showCompany">
            {{scope.row.shareholdSum}}
              </p>
<div v-show="showCompany">
 <p style="color:red;" v-show="scope.row.shareholdSum>100000000">
    {{scope.row.shareholdSum/100000000| number}} <a>亿</a>
  </p>
 <p style="color:red;" v-show="scope.row.shareholdSum<100000000" >
    {{scope.row.shareholdSum/10000| number}} <a>万</a>
  </p>
</div>
      </template>
     </el-table-column>
       <el-table-column prop="shareholdPrice" label="持股数值(元)" min-width="70">
           <template slot-scope="scope" >
   <p style="color:red;" v-show="!showCompany">
            {{scope.row.shareholdPrice}}
              </p>
 <div v-show="showCompany">
 <p style="color:red;" v-show="scope.row.shareholdPrice>100000000">
    {{scope.row.shareholdPrice/100000000| number}} <a>亿</a>
  </p>
 <p style="color:red;" v-show="scope.row.shareholdPrice<100000000" >
    {{scope.row.shareholdPrice/10000| number}} <a>万</a>
  </p> 
</div>
    </template>
       </el-table-column>
        <el-table-column prop="sharesrate" label="持股数量占A股百分比(%)" min-width="70"></el-table-column>
      <el-table-column prop="closePrice" label="当日收盘价" ></el-table-column>
            <el-table-column prop="zdf" label="当日涨跌幅" ></el-table-column>
            <el-table-column prop="shareholdPriceOne" label="持股市值变化(元)1日"></el-table-column>
            <el-table-column prop="shareholdPriceFive" label="持股市值变化(元)5日"></el-table-column>
             <el-table-column prop="shareholdPriceTen" label="市盈率" min-width="持股市值变化(元)10日"></el-table-column>
              <el-table-column prop="market" label="标签" min-width="70"></el-table-column>
               <el-table-column prop="shareholdSumChg" label="是否通用">
                   <template slot-scope="scope">
                       {{scope.row.isCurrency===true?'是':'否'}}
                   </template>
               </el-table-column>
            <el-table-column prop="zb" label="类型"></el-table-column>
            <el-table-column prop="zzb" label="最高价"></el-table-column>
            <el-table-column prop="updateTime" label="更新时间" min-width="90"></el-table-column>
            <el-table-column prop="createTime" label="创建时间" min-width="90"></el-table-column>
    </el-table>
   <el-pagination
      @size-change="HKhandleSizeChangeHold"
      @current-change="HKhandleCurrentChangeHold"
      :current-page="HKholdShareInfo.page"
      layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[10,15,20,30]"
      :total="HKholdShareTotal"
    ></el-pagination>
</el-dialog>
    <el-table :data="SharesList" border id="out-table" stripe height="800">
      <el-table-column prop="onDate" label="上市时间" width="120"></el-table-column>
      <el-table-column prop="code" label="代码"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
     <el-table-column prop="openPrice" label="今日开盘价" min-width="70"></el-table-column>
       <el-table-column prop="closePrice" label="当日收盘价" min-width="70"></el-table-column>
        <el-table-column prop="zdf" label="当日涨跌幅(%)" min-width="70"></el-table-column>
      <el-table-column prop="dealSum" label="成交量" >
         <template slot-scope="scope" >
   <p style="color:red;" v-show="!showCompany">
            {{scope.row.dealSum}}
              </p>
 <div v-show="showCompany">
 <p style="color:red;" v-show="scope.row.dealSum>100000000">
    {{scope.row.dealSum/100000000| number}} <a>亿</a>
  </p>
 <p style="color:red;" v-show="scope.row.dealSum<100000000" >
    {{scope.row.dealSum/10000| number}} <a>万</a>
  </p> 
</div>
            </template>
      </el-table-column>
            <el-table-column prop="dealPrice" label="成交额" width="100">
            <template slot-scope="scope" >
                <p style="color:red;" v-show="!showCompany">
            {{scope.row.dealPrice}}
              </p>
 <div v-show="showCompany">
 <p style="color:red;" v-show="scope.row.dealPrice>100000000">
    {{scope.row.dealPrice/100000000| number}} <a>亿</a>
  </p>
 <p style="color:red;" v-show="scope.row.dealPrice<100000000" >
    {{scope.row.dealPrice/10000| number}} <a>万</a>
  </p> 
</div>
            </template>
            </el-table-column>
            <el-table-column prop="amplitude" label="振幅"></el-table-column>
            <el-table-column prop="turnoverRate" label="换手率"></el-table-column>
             <el-table-column prop="pER" label="市盈率" min-width="70"></el-table-column>
              <el-table-column prop="pBR" label="市净率" min-width="70"></el-table-column>
               <el-table-column prop="isCurrency" label="是否通用">
                   <template slot-scope="scope">
                       {{scope.row.isCurrency===true?'是':'否'}}
                   </template>
               </el-table-column>
            <el-table-column prop="type" label="类型"></el-table-column>
            <el-table-column prop="highestPrice" label="最高价"></el-table-column>
            <el-table-column prop="minimumPrice" label="最低价"></el-table-column>
            <el-table-column prop="zdPrice" label="涨跌额"></el-table-column>
            <el-table-column prop="zdf" label="涨跌幅"></el-table-column>
            <el-table-column prop="updateTime" label="更新时间" min-width="90"></el-table-column>
            <el-table-column prop="createTime" label="创建时间" min-width="90"></el-table-column>
            <el-table-column prop label="查看" min-width="122">
        <template slot-scope="scope">
          <el-link type="primary" @click="openShare(scope.row.code)">持股信息</el-link> <p></p>
          <el-link type="primary" @click="openShareHK(scope.row.code)">沪深港持股信息</el-link>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.page"
      layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[10,15,20,30]"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  data() {
    return {
      queryInfo: {
        page: 1,
        size: 10,
        name:null,
        code:null,
      },
      dialogFormVisible:false,
      HkdialogFormVisible:false,
      showCompany:true,
      holdShareInfo:{
        page:1,
        size:10,
        code:null
      },
      
      HKholdShareInfo:{
        page:1,
        size:10,
        code:null
      },
      // 港股自持股列表
      HKholdShareList:[],
      Hkcode:null,
      HKholdShareTotal:null,
      code:null,
      total:null,
      holdShareTotal:null,
      SharesList:[],
      holdShareList:[]
    }
  },
 filters: {
    //保留2位小数点过滤器 不四舍五入
    number(value) {
      var toFixedNum = Number(value).toFixed(3);
      var realVal = toFixedNum.substring(0, toFixedNum.toString().length - 1);
      return realVal;
    }
  },

  methods: {
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
 openShare(code){
   this.holdShareInfo.page = 1
this.dialogFormVisible = true
this.holdShareInfo.code = code
this.code = code
this.$http.get('api/shares/hold',{params:this.holdShareInfo}).then(res=>{
  console.log(res);
  this.holdShareList = res.data.data.list
  this.holdShareTotal = res.data.data.total
})
  },
  getHoldShare(){
    this.holdShareInfo.code = this.code
this.$http.get('api/shares/hold',{params:this.holdShareInfo}).then(res=>{
  console.log(res);
  this.holdShareList = res.data.data.list
  this.holdShareTotal = res.data.data.total
})  
},
//获取港澳股    
getHKshare(){
this.HKholdShareInfo.code = this.HKcode
this.$http.get('api/shares/hold',{params:this.HKholdShareInfo}).then(res=>{
  console.log(res);
  this.HKholdShareList = res.data.data.list
  this.HKholdShareTotal = res.data.data.total
})  
},
openShareHK(code){
  this.HKholdShareInfo.page =1
this.HkdialogFormVisible = true
this.HKholdShareInfo.code = code
this.HKcode = code


this.$http.get('api/shares/hand/statistics',{params:this.HKholdShareInfo}).then(res=>{
  console.log(res);
  this.HKholdShareList = res.data.data.list
  this.HKholdShareTotal = res.data.data.total
  console.log(this.HKholdShareInfo);
  console.log(this.HKcode);
  
  
  
})  
},
  back(){
    this.dialogFormVisible = false
  },
  HKback(){
    this.HkdialogFormVisible = false
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
    // 全部股票分页
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
    //自持股分页
      handleSizeChangeHold(newsize) {
      console.log(newsize)
      this.holdShareInfo.page = 1
      this.holdShareInfo.size = newsize
      this.getHoldShare()
    },
    handleCurrentChangeHold(newpage) {
      this.holdShareInfo.page = newpage
      this.getHoldShare();
    },
    //港深股分页
     HKhandleSizeChangeHold(newsize) {
      console.log(newsize)
      this.HKholdShareInfo.page = 1
      this.HKholdShareInfo.size = newsize
      this.getHKshare()
    },
    HKhandleCurrentChangeHold(newpage) {
      this.HKholdShareInfo.page = newpage
      console.log(this.HKholdShareInfo);
      
      this.getHKshare()
    },
    //数据请求api 
    getList() {
     this.$http.get('api/shares/info',{params:this.queryInfo}).then(res=>{
         this.SharesList = res.data.data.list
         this.total = res.data.data.total
     })
    }
  },
  created() {
    this.getList()
  },
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