<template>
  <div class="page">
    <div class="section-head">
      <h2>评论哨兵</h2>
      <button class="primary-btn">创建任务</button>
    </div>

    <div class="task-grid">
      <div v-for="task in tasks" :key="task.id" class="card task-card">
        <div class="task-head">
          <strong>{{ task.name }}</strong>
          <span class="status-pill" :class="task.state === '运行中' ? 'good' : 'disable'">{{ task.state }}</span>
        </div>
        <div class="task-body">
          <div><label>平台</label><span>{{ task.platform }}</span></div>
          <div><label>关键词</label><span>{{ task.keyword }}</span></div>
          <div><label>新增</label><span>{{ task.newCount }} 条</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tasks = [
  { id: 1, name: '抖音评论哨兵', platform: '抖音', keyword: '价格,合作,联系', newCount: 28, state: '运行中' },
  { id: 2, name: '小红书评论哨兵', platform: '小红书', keyword: '私域,代理,咨询', newCount: 16, state: '待处理' },
  { id: 3, name: '视频号评论哨兵', platform: '视频号', keyword: '加盟,合作', newCount: 11, state: '已暂停' },
];
</script>

<style scoped>
.task-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.task-card {
  padding: 18px;
}

.task-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.task-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.task-body div {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: #cfe0ff;
}

.task-body label { color: #8fa9d6; }

.status-pill {
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 0.72rem;
}

.status-pill.good { background: rgba(46, 196, 145, 0.14); color: #bff7e4; }
.status-pill.disable { background: rgba(255, 255, 255, 0.06); color: #bfd4f9; }

@media (max-width: 980px) {
  .task-grid {
    grid-template-columns: 1fr;
  }
}
</style>
