<template>
  <div id="app">
    <el-container >
      <el-aside width="200px" >
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <router-link  to="/first" style="text-decoration: none;">
            <el-menu-item index="1">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </el-menu-item>
           </router-link>
          <router-link  to="/second"  style="text-decoration: none;">
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
          </router-link>
          <router-link  to="/third"  style="text-decoration: none;">
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
          </router-link>
          <router-link  to="/fourth"  style="text-decoration: none;">
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-main style="height:100%">
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
#app {
  margin: 0px;
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 960px;
    border: 0px
}
</style>
