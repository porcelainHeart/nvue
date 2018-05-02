<template>
  <el-form :model="form" :rules="rules" ref="form" label-width="100px">
    <el-form-item label="name" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')">submit</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { doSubmit } from ''
export default {
  name: '__NAME__',
  props: {},
  data() {
    return {
      form: {
        name: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入名称", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let data = {
            name: this.roleForm.roleName,
          }
          let res = await doSubmit(data)
          if (res === true) this.$emit('success')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  async mounted () {}
};
</script>