<template>
  <el-container class="layout">
    <el-aside width="200px">
      <el-menu active-text-color="#ffd04b">
        <el-menu-item index="calendar" :route="{name: 'calendar'}">
          <el-icon><SvgIcon name="icon-calendar"/></el-icon>
          <span>课程表</span>
        </el-menu-item>
        <el-menu-item index="student" :route="{name: 'student'}">
          <el-icon><SvgIcon name="icon-icon_students"/></el-icon>
          <span>学生</span>
        </el-menu-item>
        <el-menu-item index="teacher" :route="{name: 'teacher'}">
          <el-icon><SvgIcon name="icon-teacher"/></el-icon>
          <span>老师</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main></el-main>
  </el-container>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon.vue'
</script>

<style scoped lang="scss">
.layout {
  height: 100%;
  width: 100%;
}
</style>
