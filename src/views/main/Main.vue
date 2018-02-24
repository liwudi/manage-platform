<template>
  <el-container class="wrapper">
    <el-header
      class="header"
    >
      <span class="header-title">mapbar_front的管理后台</span>

      <el-dropdown class="dropdown" trigger="click">
        <span class="el-dropdown-link">
          <i class="el-icon-edit-outline"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><span @click="dialogVisible = true">修改密码</span></el-dropdown-item>
          <el-dropdown-item><span @click="loginOut()">退出登录</span></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!--修改密码模块-->
      <el-dialog
        title="密码修改"
        :visible.sync="dialogVisible"
        width="40%"
      >

        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="请输入新密码">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="请再次输入密码">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>

    </el-header>
    <el-container>
      <el-aside style="height: 100%;">
        <el-menu
          default-active="2"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height: 100%;"
        >

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>dashboard</span>
            </template>
            <el-menu-item-group>
              <template slot="title">charts</template>
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
            <span slot="title"><router-link to="/upload">Upload</router-link></span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
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
  import ElDropdown from "../../../node_modules/element-ui/packages/dropdown/src/dropdown";
  import ElForm from "../../../node_modules/element-ui/packages/form/src/form";
  export default {
    data: function () {
      return {
        dialogVisible: false,
        form: {

        }
      }
    },
    methods: {
        loginOut(){
          this.$router.replace('/login')
        }
    },
    created: function () {
      console.log(this.$route)
    }

  }
</script>

<style rel="stylesheet/scss" scoped>
  .header{
    background-color: #409EFF;
    text-align: center;
    position: relative;
  }
  .header-title{
    color: #ffffff;
    line-height: 60px;
    font-size: 30px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #ffffff;
    font-size: 25px;
  }
  .dropdown{
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
  }
  a{
    color: white;
  }
</style>
