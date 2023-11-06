<template>
  <div>
    <el-card class="warp">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
      >
        <el-form-item label="原密码:" prop="oldPassword">
          <el-input
            v-model.trim="ruleForm.oldPassword"
            style="width: 200px"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码:" prop="newPassword">
          <el-input
            v-model.trim="ruleForm.newPassword"
            style="width: 200px"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item label="再次输入:" prop="confirm">
          <el-input
            v-model.trim="ruleForm.confirm"
            style="width: 200px"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm" :loading="loading"
            >提交</el-button
          >
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { clearToken } from "@/utils/auth";
import { post } from "@/utils/reques";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.confirm !== "") {
          this.$refs.ruleForm.validateField("confirm");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      ruleForm: {
        oldPassword: "",
        newPassword: "",
        confirm: "",
      },
      rules: {
        oldPassword: [
          { required: true, message: "请输入原密码", tigger: "blur" },
          {
            pattern: /^[A-Za-z0-9]+$/,
            message: "不允许使用特殊符号",
            tigger: "blur",
          },
        ],
        newPassword: [
          { required: true, message: "请输入新密码", tigger: "blur" },
          {
            validator: validatePass,
            trigger: "blur",
          },
          {
            pattern: /^[A-Za-z0-9]+$/,
            message: "不允许使用特殊符号",
            tigger: "blur",
          },
        ],
        confirm: [
          { required: true, message: "再次输入密码", tigger: "blur" },
          { validator: validatePass2, trigger: "blur", required: true },
        ],
      },
    };
  },
  created() {
    this.$route.meta.keepAlive = true;
  },
  methods: {
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          post("/user/changePassword", this.ruleForm)
            .then(({ success }) => {
              if (success) {
                this.$message({
                  message: "修改成功,请重新登录!",
                  type: "success",
                });
                clearToken();
                this.$router.push("/login");
              }
            })
            .catch((res) => {
              this.$message.error(res.message);
              this.loading = false;
            });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.warp {
  height: 90vh;
  padding: 50px;
  box-sizing: border-box;
}
</style>