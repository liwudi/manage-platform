<template>
  <div class="wrapper">
    这是upload上传文件界面
    <el-upload
      class="upload-demo"
      action="http://114.55.249.153:8028/banner/add"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :on-success="handleSucess"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
  import ElUpload from "../../../../node_modules/element-ui/packages/upload/src/index";
  export default {
    components: {ElUpload},
    data: function () {
      return {
        fileList: [],
        importFileUrl: 'http:dtc.com/cpy/add',
        upLoadData: {
          cpyId: '123456',
          occurTime: '2017-08'
        }
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleSucess(response, file, fileList) {
        console.log('上传成功res',response);
      }
    }
  }
</script>

<style rel="stylesheet/scss" scoped>

</style>
