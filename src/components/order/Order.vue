<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <el-row>
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="getOrderList">
            <el-button slot="append" icon="el-icon-search" @click="getOrderList"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <!-- 订单列表数据 -->
      <el-table :data="orderList" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="订单编号" prop="order_number"></el-table-column>
        <el-table-column label="订单价格" prop="order_price"></el-table-column>
        <el-table-column label="是否付款" prop="pay_status">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.pay_status === '1'">已付款</el-tag>
            <el-tag type="danger" v-else>未付款</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="是否发货" prop="is_send"></el-table-column>
        <el-table-column label="下单时间" prop="create_time">
          <template slot-scope="scope">{{ scope.row.create_time | dateFormat }}</template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="showBox"></el-button>
            <el-button type="success" icon="el-icon-location" size="mini" @click="showProgressBox"></el-button>
            <el-button type="info" icon="el-icon-s-order" size="mini" @click="showOrderFormDialog(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[5, 10, 15]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
    <!-- 修改地址的对话框 -->
    <el-dialog title="修改地址" :visible.sync="addressViseible" width="50%" @close="addressDialogClosed">
      <el-form :model="addressForm" :rules="addressFormRules" ref="addressFormRef" label-width="100px">
        <el-form-item label="省市区/县 " prop="address1">
          <el-cascader :options="cityData" v-model="addressForm.address1"></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址 " prop="address2">
          <el-input v-model="addressForm.address2"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addressViseible = false">取 消</el-button>
        <el-button type="primary" @click="addressViseible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 展示物流进度的对话框 -->
    <el-dialog title="物流进度" :visible.sync="progressVisible" width="50%">
      <!-- 时间线 -->
      <el-timeline>
        <el-timeline-item v-for="(activity, index) in progressInfo" :key="index" :timestamp="activity.time">{{ activity.context }}</el-timeline-item>
      </el-timeline>
    </el-dialog>

    <!-- 订单详情对话框 -->
    <el-dialog title="订单详情" :visible.sync="orderFormDialogVisible" width="50%">
      <el-form ref="orderFormRef" :model="orderForm" label-width="160px">
        <el-form-item label="发票类型：">{{ orderForm.order_fapiao_title }}</el-form-item>
        <el-form-item label="订单创建时间：">{{ orderForm.create_time | dateFormat }}</el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="orderFormDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="orderFormDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import cityData from './citydata.js'

export default {
  data() {
    return {
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 15
      },
      total: 0,
      orderList: [],
      addressViseible: false,
      addressForm: {
        address1: [],
        address2: ''
      },
      addressFormRules: {
        address1: [
          {
            required: true,
            message: '请选择省市区/县',
            trigger: 'blur'
          }
        ],
        address2: [
          {
            required: true,
            message: '请填写详细地址',
            trigger: 'blur'
          }
        ]
      },
      //重名简写省略
      cityData,
      progressVisible: false,
      progressInfo: [],
      orderFormDialogVisible: false,
      orderForm: []
    }
  },
  created() {
    this.getOrderList()
  },
  methods: {
    async getOrderList() {
      const { data: res } = await this.$http.get('orders', {
        params: this.queryInfo
      })
      if (res.meta.status !== 200) {
        return this.$message.error('获取订单列表失败')
      }
      // console.log(res)
      this.total = res.data.total
      this.orderList = res.data.goods
    },
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
      this.getOrderList()
    },
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage
      this.getOrderList()
    },
    //展示修改地址的对话框
    showBox() {
      this.addressViseible = true
    },
    addressDialogClosed() {
      this.$refs.addressFormRef.resetFields()
    },
    async showProgressBox() {
      const { data: res } = await this.$http.get('/kuaidi/804909574412544580')
      if (res.meta.status !== 200) {
        return this.$message.error('获取物流进度失败')
      }
      this.progressInfo = res.data

      this.progressVisible = true
    },
    //展示订单详情
    async showOrderFormDialog(msg) {
      const { data: res } = await this.$http.get('orders/' + msg.order_id)
      console.log(res)
      this.orderForm = res.data

      this.orderFormDialogVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
.el-cascader {
  width: 100%;
}
</style>
