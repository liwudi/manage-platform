<template>
  <el-container class="wrapper">
    <el-header>

    </el-header>
    <el-container>
      <el-aside style="height: 100%;background: green;">
        <el-menu
          default-active="2"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-main style="background: red;">
        123
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import ElContainer from "../../../node_modules/element-ui/packages/container/src/main";
  import ElHeader from "../../../node_modules/element-ui/packages/header/src/main";
  import ElAside from "../../../node_modules/element-ui/packages/aside/src/main";
  import ElMain from "../../../node_modules/element-ui/packages/main/src/main";
  import ElMenu from "../../../node_modules/element-ui/packages/menu/src/menu";
  export default {
    components: {
      ElMenu,
      ElMain,
      ElAside,
      ElHeader,
      ElContainer}

  }
</script>

<style rel="stylesheet/scss" scoped>

</style>
