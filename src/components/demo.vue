<template>
  <div class="demo">
    <template>
        <el-button v-on:click="testdemo">axios+mock测试</el-button>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="date_joined"
            label="日期"
            width="180">
            </el-table-column>
            <el-table-column
            prop="first_name"
            label="姓名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="key"
            label="地址">
            </el-table-column>
        </el-table>
    </template>
  </div>
</template>

<script>
// import api from './../api/api.js'
export default {
  name: 'demo',
  data () {
    return {
      tableData: [
        {
          first_name: '111',
          date_joined: '222',
          key: '333'
        }
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    testdemo () {
      this.$http.get('http://localhost:3030/getList.json').then(function (result) {
        console.log(result.body)
      })
    },
    setNewsApi () {
      this.api.JH_news('100', '{}')
        .then(res => {
          this.tableData[0].first_name = res.data.first_name
          this.tableData[0].key = res.data.key
          this.tableData[0].date_joined = res.data.date_joined
          console.log(this.tableData)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 960px;
    border: 0px
}
</style>
