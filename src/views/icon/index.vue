<template>
  <div class="p-5">
    <h2>图标集</h2>
    <div class="desc">
      本项目使用 lcuide 图标库，图标集见：
      <a href="https://lucide.dev/icons/" target="_blank">https://lucide.dev/icons/</a>
    </div>
    <h2>自定义 svg 图标</h2>
    <div class="desc">
      <p>
        将 svg 图标放在
        <code>src/assets/icons/</code>
        下，即可在页面中导入使用。
      </p>
      <p>导入方式：</p>
      <p>
        <code>import Wechat from '~icons/svg/wechat'</code>
      </p>
    </div>
    <Wechat width="100" height="100" />
  </div>
</template>

<script setup>
import Wechat from '~icons/svg/wechat'
</script>

<style scoped lang="scss">
.desc {
  @apply p-3 rounded-2xl bg-border line-height-7 w-fit my-5;
}
</style>
