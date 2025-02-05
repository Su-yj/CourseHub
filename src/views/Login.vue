<script setup lang="ts">
import {reactive, ref} from 'vue'
import {ElMessage} from 'element-plus'
import {User, Lock} from '@element-plus/icons-vue'
import {useRouter} from 'vue-router'
import type {FormInstance} from 'element-plus'

const form = reactive({username: '', password: ''})
const loginFormRef = ref<FormInstance>()
const router = useRouter()

// 登录事件处理
const submit = async (formEL: FormInstance | undefined) => {
  console.log(form, form.username, form.password)
  console.log(loginFormRef)
  if (!formEL) return
  await formEL.validate((valid) => {
    if (!valid) return
    if (form.username !== 'admin' || form.password !== '123456') {
      ElMessage({
        message: '账号或密码错误',
        type: 'error',
      })
      return
    }
    router.push({name: 'layout'})
  })
}
</script>

<template>
  <div class="login-wrapper">
    <img src="~@/assets/images/login.png" alt="login" class="login-logo">
    <el-form :model="form" ref="loginFormRef">
      <el-form-item prop="username" required>
        <el-input :prefix-icon="User" v-model="form.username" placeholder="username"
                  autofocus @keyup.enter.native="submit(loginFormRef)"/>
      </el-form-item>
      <el-form-item prop="password" required>
        <el-input :prefix-icon="Lock" v-model="form.password" placeholder="password"
                  type="password" @keyup.enter.native="submit(loginFormRef)"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="submit(loginFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.login-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .login-logo {
    width: 200px;
  }

  .el-form {
    width: 200px;
  }
}
</style>
