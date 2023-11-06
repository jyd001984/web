 <template>
  <div>
    <el-row type="flex" justify="center" align="middle" style="height: 80vh">
      <el-card class="box-card box">
        <div slot="header" class="clearfix">
          <p class="title">球馆后台管理系统</p>
        </div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="80px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="userid">
            <el-input
              v-model="ruleForm.userid"
              @keydown.native.enter="log"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="ruleForm.password"
              type="password"
              @keydown.native.enter="log"
            ></el-input>
            <el-button
              type="primary"
              style="width: 100%; margin-top: 20px"
              @click="log"
              :loading="loading"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { post } from "../utils/reques";
import { setToken } from "@/utils/auth";
export default {
  data() {
    return {
      ruleForm: {
        userid: "",
        password: "",
      },
      loading: false,
      rules: {
        userid: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    log() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          post("/user/login", this.ruleForm)
            .then((res) => {
              setToken(res.accessToken);
              sessionStorage.setItem("username", res.username);
              sessionStorage.setItem("auth", "3e69156a");
              sessionStorage.setItem("refreshToken", res.refreshToken);
              this.$store.commit("changeop", res.op);
              this.$router.push("/");
            })
            .catch(() => {
              this.loading = false;
            });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 500px;
  .title {
    color: #5696ff;
    font-size: 26px;
    font-weight: 700;
    text-align: center;
  }
}
</style>