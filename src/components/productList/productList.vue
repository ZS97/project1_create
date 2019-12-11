<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="产品姓名">
            <el-input v-model="formInline.username" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="产品密码">
            <el-input v-model="formInline.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import { login } from "@/api/product";
export default {
    data() {
        return {
            formInline: {
                username: "",
                password: ""
            }
        };
    },
    mounted() {},
    methods: {
        onSubmit() {
            login(this.formInline)
                .then(res => {
                    if (res.data.status == 200) {
                        this.$message.success("成功");
                    } else {
                        this.$message.error(res.data.body.msg);
                    }
                })
                .catch(res => {
                    console.log(res);
                    // this.$message.error()
                });
        }
    }
};
</script>

