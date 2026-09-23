<template>
  <div class="page">
    <div class="section-head">
      <h2>关键词监控</h2>
      <button class="primary-btn">新增关键词</button>
    </div>

    <div class="panel-grid">
      <div class="card panel">
        <h3>关键词列表</h3>
        <div class="keyword-list">
          <div v-for="item in keywords" :key="item.name" class="keyword-row">
            <div>
              <strong>{{ item.name }}</strong>
              <small>{{ item.platform }}</small>
            </div>
            <span class="chip" :class="item.status === '激活' ? 'chip-on' : 'chip-off'">{{ item.status }}</span>
          </div>
        </div>
      </div>

      <div class="card panel">
        <h3>命中情况</h3>
        <div class="hit-summary">
          <div>
            <strong>245</strong>
            <span>本日命中</span>
          </div>
          <div>
            <strong>68</strong>
            <span>高意向</span>
          </div>
          <div>
            <strong>12</strong>
            <span>待处理</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const keywords = [
  { name: 'AI工具', platform: '全平台', status: '激活' },
  { name: '获客方案', platform: '抖音', status: '激活' },
  { name: '私域变现', platform: '小红书', status: '待处理' },
  { name: '直播带货', platform: '视频号', status: '激活' },
];
</script>

<style scoped>
.panel-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 18px;
}

.panel {
  padding: 18px;
}

.keyword-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.keyword-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
}

.keyword-row small {
  display: block;
  color: #a1b7d8;
}

.chip {
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 0.72rem;
}

.chip-on {
  background: rgba(51, 214, 155, 0.12);
  color: #b0f8da;
}

.chip-off {
  background: rgba(255, 255, 255, 0.06);
  color: #dbe9ff;
}

.hit-summary {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.hit-summary div {
  padding: 20px 14px;
  border-radius: 14px;
  background: rgba(109, 131, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hit-summary strong {
  font-size: 2rem;
}

.hit-summary span {
  color: #a3badd;
}

@media (max-width: 980px) {
  .panel-grid {
    grid-template-columns: 1fr;
  }
}
</style>
