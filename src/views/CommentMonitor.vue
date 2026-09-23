<template>
  <div class="page">
    <div class="section-head">
      <h2>评论监控</h2>
      <button class="primary-btn" @click="addComment">新增记录</button>
    </div>

    <div class="table-card card">
      <table>
        <thead><tr><th>平台</th><th>评论内容</th><th>关键词</th><th>状态</th><th>时间</th></tr></thead>
        <tbody>
          <tr v-for="item in appStore.comments" :key="`${item.platform}-${item.message}`">
            <td>{{ item.platform }}</td>
            <td>{{ item.message }}</td>
            <td>{{ item.keyword }}</td>
            <td><span class="tag tag-red">{{ item.status }}</span></td>
            <td>{{ new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';
const appStore = useAppStore();

function addComment() {
  appStore.addComment({ platform: '抖音', message: '想了解合作流程', keyword: '合作', status: '待沟通' });
  appStore.appendLog('新增评论记录：想了解合作流程');
}
</script>

<style scoped>
.table-card{overflow:hidden}.table-card table{width:100%;border-collapse:collapse}.table-card thead{background:rgba(128,147,255,.06)}.table-card th,.table-card td{padding:14px 16px;text-align:left;border-bottom:1px solid rgba(159,189,255,.1)}.tag{display:inline-flex;align-items:center;padding:5px 8px;border-radius:999px;font-size:.72rem}.tag-red{background:rgba(255,104,104,.12);color:#ffc7c7}
</style>
