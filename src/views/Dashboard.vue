<template>
  <div class="page">
    <div class="section-head">
      <h2>工作台总览</h2>
      <span class="badge">今日更新 12 条</span>
    </div>

    <div class="grid grid-4">
      <StatCard title="运行任务" value="12" suffix="个" tone="blue" />
      <StatCard title="新增关键词" value="368" suffix="条" tone="green" />
      <StatCard title="命中评论" value="84" suffix="条" tone="purple" />
      <StatCard title="AI 文案" value="27" suffix="条" tone="orange" />
    </div>

    <div class="dashboard-grid">
      <div class="card panel">
        <div class="panel-head">
          <h3>平台状态</h3>
          <button class="small-btn">同步状态</button>
        </div>
        <div class="platform-list">
          <div v-for="platform in appStore.platformList.slice(0, 6)" :key="platform" class="platform-row">
            <span>{{ platform }}</span>
            <span class="platform-state on">正常</span>
          </div>
        </div>
      </div>

      <div class="card panel">
        <div class="panel-head">
          <h3>任务列表</h3>
          <button class="small-btn">全部</button>
        </div>
        <div class="task-list">
          <div v-for="task in appStore.tasks" :key="task.id" class="task-item">
            <div class="task-top">
              <strong>{{ task.name }}</strong>
              <span :class="['status-pill', task.status === '运行中' ? 'good' : task.status === '待处理' ? 'warning' : 'disable']">
                {{ task.status }}
              </span>
            </div>
            <div class="task-meta">{{ task.platform }}</div>
            <div class="progress-bar">
              <span :style="{ width: `${task.progress}%` }" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card panel">
      <div class="panel-head">
        <h3>实时日志</h3>
        <button class="small-btn">清空</button>
      </div>
      <ul class="log-list">
        <li v-for="(log, index) in appStore.logs" :key="index">{{ log }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';
import StatCard from '@/components/StatCard.vue';

const appStore = useAppStore();
</script>

<style scoped>
.dashboard-grid {
  display: grid;
  grid-template-columns: 1.1fr 1.4fr;
  gap: 18px;
}

.panel {
  padding: 18px;
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.panel-head h3 {
  margin: 0;
}

.small-btn {
  background: rgba(130, 168, 255, 0.12);
  border: 1px solid rgba(130, 168, 255, 0.2);
  color: #e5f1ff;
  padding: 0.45rem 0.7rem;
  border-radius: 10px;
  font-size: 0.85rem;
}

.platform-list,
.task-list,
.log-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.platform-row,
.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
}

.platform-state {
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 0.72rem;
  color: #dffef5;
}

.platform-state.on {
  background: rgba(46, 196, 145, 0.16);
}

.task-item {
  display: block;
}

.task-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.task-meta {
  margin: 8px 0;
  color: #9ab4da;
  font-size: 0.82rem;
}

.progress-bar {
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.progress-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #41d4ff, #7d7afe);
}

.status-pill {
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 0.72rem;
}

.status-pill.good { background: rgba(46, 196, 145, 0.14); color: #bff7e4; }
.status-pill.warning { background: rgba(255, 193, 97, 0.12); color: #ffe8b7; }
.status-pill.disable { background: rgba(255, 255, 255, 0.06); color: #bfd4f9; }

.log-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.log-list li {
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(120, 153, 255, 0.04);
  border: 1px solid rgba(120, 153, 255, 0.08);
}

@media (max-width: 980px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
</style>
