<template>
  <el-dropdown trigger="click">
    <el-avatar :size="30" class="cursor-pointer">U</el-avatar>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :icon="LogOut" @click.native="handleLogout">登出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { LogOut } from 'lucide-vue-next'

const router = useRouter()
const handleLogout = () => {
  router.push('/login')
}
</script>
