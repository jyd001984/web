<template>
  <div>
    <el-dialog title="提示" :visible="visible" width="50%" :before-close="fn">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row :gutter="20">
                 <el-col :span="12">
         <el-form-item label="订单号" prop="id">
          <el-input v-model="ruleForm.id"></el-input>
        </el-form-item>
                 <el-form-item label="起始城市" prop="start">
          <el-input v-model="ruleForm.start"></el-input>
        </el-form-item>
                 <el-form-item label="目的城市" prop="end">
          <el-input v-model="ruleForm.end"></el-input>
        </el-form-item>
                 <el-form-item label="货物名称" prop="cargo">
          <el-input v-model="ruleForm.cargo"></el-input>
                  </el-form-item>
      </el-col>
      <el-col :span="12">
                 <el-form-item label="单位" prop="unit">
          <el-input v-model="ruleForm.unit"></el-input>
        </el-form-item>
                 <el-form-item label="运费" prop="price">
          <el-input v-model="ruleForm.price"></el-input>
        </el-form-item>
                 <el-form-item label="是否支付" prop="pay">
          <el-input v-model="ruleForm.pay"></el-input>
        </el-form-item>
      </el-col>
      </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="fn">取 消</el-button>
        <el-button type="primary" @click="newData">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        id: [{ required: true, message: "不能为空", trigger: "blur" }],
        start: [{ required: true, message: "不能为空", trigger: "blur" }],
        end: [{ required: true, message: "不能为空", trigger: "blur" }],
        cargo: [{ required: true, message: "不能为空", trigger: "blur" }],
        unit: [{ required: true, message: "不能为空", trigger: "blur" }],
        parice: [{ required: true, message: "不能为空", trigger: "blur" }],
        pay: [{ required: true, message: "不能为空", trigger: "blur" }],
      },
      ruleForm: {
        id:"",
        start:"",
        end:"",
        cargo:"",
        unit:"",
        parice:"",
        pay:''
      },
    };
  },
  props: {
    visible: {
      type: Object,
      require: true,
    },
  },
  methods: {
    fn() {
      this.$emit("close");
    },
    newData() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$refs.ruleForm.resetFields();
          this.$emit("newData");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>