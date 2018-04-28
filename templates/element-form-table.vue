<template>
  <el-container class="form-container">
    <el-header class="data-form">
      <el-form :inline="true" :model="form">
        <el-form-item label="输入搜索信息">
          <el-input v-model="form.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="add">新增</el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main class="data-table">
      <el-table
        :data="tableData"
        border
        stripe
        style="width: 100%;height: 75vh">
        <el-table-column prop="name" label="name" />
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button type="primary" @click="edit(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="page"
        :page-size="pageSize"
        background
        layout="total, prev, pager, next"
        :total="dataCount">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
      },
      tableData: [],
      page: 1,
      pageSize: 20,
      dataCount: 0,
    }
  },
  components: {},
  methods: {
    async edit (row) {},
    async handleCurrentChange (page) {},
    async search () {},
    add () {}
  },
  mounted () {
    this.search()
  }
}
</script>

<style lang="scss" scoped>
.form-container{
  height: 100%;
  .data-form{
    padding-top: 14px;
  }
  .data-table{
    padding-top: 0;
  }
}
</style>
