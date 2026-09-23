<template>
  <div class="page">
    <div class="section-head">
      <h2>工作台总览</h2>
      <div class="head-actions">
        <span class="badge">今日更新 {{ appStore.logs.length }} 条</span>
        <button class="primary-btn" @click="showTaskModal = true">新建任务</button>
      </div>
    </div>

    <div class="grid grid-4">
      <StatCard title="运行任务" :value="runningCount" suffix="个" tone="blue" />
      <StatCard title="新增关键词" :value="appStore.keywords.length" suffix="条" tone="green" />
      <StatCard title="命中评论" :value="appStore.comments.length" suffix="条" tone="purple" />
      <StatCard title="AI 文案" value="27" suffix="条" tone="orange" />
    </div>

    <div class="dashboard-grid">
      <div class="card panel">
        <div class="panel-head"><h3>平台状态</h3><button class="small-btn" @click="syncStatus">同步状态</button></div>
        <div class="platform-list">
          <div v-for="platform in appStore.platformList.slice(0, 6)" :key="platform" class="platform-row">
            <span>{{ platform }}</span><span class="platform-state on">正常</span>
          </div>
        </div>
      </div>

      <div class="card panel">
        <div class="panel-head"><h3>任务列表</h3><span class="muted">{{ appStore.tasks.length }} 个任务</span></div>
        <div class="task-list">
          <div v-for="task in appStore.tasks" :key="task.id" class="task-item">
            <div class="task-top">
              <strong>{{ task.name }}</strong>
              <button class="status-pill" :class="statusClass(task.status)" @click="toggleTask(task)">{{ task.status }}</button>
            </div>
            <div class="task-meta">{{ task.platform }} · {{ task.keyword || '未设置关键词' }}</div>
            <div class="progress-bar"><span :style="{ width: `${task.progress}%` }" /></div>
          </div>
        </div>
      </div>
    </div>

    <div class="card panel">
      <div class="panel-head"><h3>实时日志</h3><button class="small-btn" @click="appStore.logs = []">清空</button></div>
      <ul class="log-list"><li v-for="(log, index) in appStore.logs" :key="index">{{ log }}</li></ul>
    </div>

    <TaskFormModal :model-value="showTaskModal" @close="showTaskModal = false" @submit="createTask" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useAppStore } from '@/store/app';
import StatCard from '@/components/StatCard.vue';
import TaskFormModal from '@/components/TaskFormModal.vue';

const appStore = useAppStore();
const showTaskModal = ref(false);
const runningCount = computed(() => appStore.tasks.filter((task) => task.status === '运行中').length);

function statusClass(status: string) {
  return status === '运行中' ? 'good' : status === '待处理' ? 'warning' : 'disable';
}

function toggleTask(task: any) {
  task.status = task.status === '运行中' ? '已暂停' : '运行中';
  appStore.appendLog(`${task.name} 已${task.status}`);
}

async function createTask(payload: any) {
  appStore.addTask({ id: Date.now(), ...payload });
  appStore.appendLog(`已创建任务：${payload.name}`);
  showTaskModal.value = false;
  if (window.appApi?.db) await window.appApi.db.createTask({ ...payload, status: 'running' });
}

function syncStatus() {
  appStore.appendLog('平台状态同步完成');
}
</script>

<style scoped>
.head-actions,.panel-head,.task-top{display:flex;align-items:center;justify-content:space-between;gap:12px}.head-actions{justify-content:flex-end}.dashboard-grid{display:grid;grid-template-columns:1.1fr 1.4fr;gap:18px}.panel{padding:18px}.panel-head{margin-bottom:14px}.panel-head h3{margin:0}.small-btn{background:rgba(130,168,255,.12);border:1px solid rgba(130,168,255,.2);color:#e5f1ff;padding:.45rem .7rem;border-radius:10px;font-size:.85rem}.platform-list,.task-list,.log-list{display:flex;flex-direction:column;gap:12px}.platform-row,.task-item{padding:12px 14px;border-radius:12px;background:rgba(255,255,255,.03)}.platform-row{display:flex;align-items:center;justify-content:space-between}.platform-state{padding:4px 8px;border-radius:999px;font-size:.72rem;color:#dffef5}.platform-state.on{background:rgba(46,196,145,.16)}.task-item{display:block}.task-meta{margin:8px 0;color:#9ab4da;font-size:.82rem}.progress-bar{width:100%;height:8px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden}.progress-bar span{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,#41d4ff,#7d7afe)}.status-pill{border:0;padding:4px 8px;border-radius:999px;font-size:.72rem;cursor:pointer}.status-pill.good{background:rgba(46,196,145,.14);color:#bff7e4}.status-pill.warning{background:rgba(255,193,97,.12);color:#ffe8b7}.status-pill.disable{background:rgba(255,255,255,.06);color:#bfd4f9}.log-list{list-style:none;margin:0;padding:0}.log-list li{padding:10px 12px;border-radius:10px;background:rgba(120,153,255,.04);border:1px solid rgba(120,153,255,.08)}@media(max-width:980px){.dashboard-grid{grid-template-columns:1fr}.head-actions{flex-wrap:wrap}}
</style>
