<template>
  <div class="wrapper center flex-col-box login-background">
    <div class="login-title">在线教育管理平台</div>
    <div class="login-box flex-col-box center">
      <el-form :model="formData" ref="myForm" :rules="rules" label-position="left" label-width="80px" >

        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="login-btn" type="primary" @click="submitForm('myForm')">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="go-register">
        <router-link style="float: right" to="/register">去注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        formData: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur'},
            { min: 6, max: 10 ,message: '长度在 6 到 10 个字符', trigger: 'blur'}
          ]
        },
      }
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      setUserInfo(obj){
        window.localStorage.setItem('userInfo',obj);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var obj = JSON.stringify(this.formData)
            this.setUserInfo(obj);
            this.$message({
              message: '登录成功',
              type: 'success'
            });
            this.$router.replace('/')
          } else {
            alert('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName){
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style  scoped>
  .login-box{
    width: 350px;
    height: 300px;
    padding-right: 20px;
    border: 1px solid #cccccc;
    background: #ffffff;
  }
  .login-background{
    background: #324157;
  }
  .login-title{
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    color: #ffffff;
    text-align: center;
  }
  .go-register{
    width: 250px;
  }
  .login-btn{
    width: 100%;
  }

</style>
