<template>
  <div class="page">
    <div class="section-head">
      <h2>评论监控</h2>
      <button class="primary-btn" @click="addComment">新增记录</button>
    </div>

    <div class="card panel filters">
      <div class="filter-row">
        <select v-model="filters.platform">
          <option value="全部">全部</option>
          <option value="抖音">抖音</option>
          <option value="小红书">小红书</option>
          <option value="视频号">视频号</option>
        </select>
        <input v-model="filters.keyword" placeholder="筛选关键词" />
        <select v-model="filters.status">
          <option value="全部">全部状态</option>
          <option value="待沟通">待沟通</option>
          <option value="待联系">待联系</option>
          <option value="已标记">已标记</option>
          <option value="已处理">已处理</option>
        </select>
      </div>
    </div>

    <div class="table-card card">
      <table>
        <thead><tr><th>平台</th><th>评论内容</th><th>关键词</th><th>状态</th><th>时间</th><th>操作</th></tr></thead>
        <tbody>
          <tr v-for="item in filteredComments" :key="`${item.platform}-${item.message}`">
            <td>{{ item.platform }}</td>
            <td>{{ item.message }}</td>
            <td>{{ item.keyword }}</td>
            <td><span class="tag tag-red">{{ item.status }}</span></td>
            <td>{{ new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}</td>
            <td><button class="small-btn" @click="handleCommentDone(item.id ?? 0)">已处理</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useAppStore } from '@/store/app';

const appStore = useAppStore();
const filters = ref({ platform: '全部', keyword: '', status: '全部' });

const filteredComments = computed(() => {
  return appStore.comments.filter((item: any) => {
    const platformOk = filters.value.platform === '全部' || item.platform === filters.value.platform;
    const keywordOk = !filters.value.keyword || item.keyword.includes(filters.value.keyword);
    const statusOk = filters.value.status === '全部' || item.status === filters.value.status;
    return platformOk && keywordOk && statusOk;
  });
});

function addComment() {
  appStore.addComment({ platform: '抖音', message: '想了解合作流程', keyword: '合作', status: '待沟通' });
}

function handleCommentDone(id: number) {
  appStore.markCommentDone(id);
}
</script>

<style scoped>
.filters { margin-bottom: 18px; }
.filter-row { display: flex; gap: 12px; flex-wrap: wrap; }
.filter-row input, .filter-row select { flex: 1; min-width: 160px; }
input, select { border-radius: 10px; border: 1px solid rgba(150, 185, 255, 0.2); background: rgba(255,255,255,0.03); color: white; padding: 10px 12px; outline: none; }
.table-card { overflow: hidden; }
.table-card table { width: 100%; border-collapse: collapse; }
.table-card thead { background: rgba(128,147,255,.06); }
.table-card th, .table-card td { padding: 14px 16px; text-align: left; border-bottom: 1px solid rgba(159,189,255,.1); }
.tag { display: inline-flex; align-items: center; padding: 5px 8px; border-radius: 999px; font-size: 0.72rem; }
.tag-red { background: rgba(255,104,104,.12); color: #ffc7c7; }
.small-btn { background: rgba(130,168,255,.12); border: 1px solid rgba(130,168,255,.2); color: #e5f1ff; padding: 0.45rem 0.7rem; border-radius: 10px; font-size: 0.8rem; cursor: pointer; }
</style>
