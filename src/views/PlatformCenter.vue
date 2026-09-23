<template>
  <div class="page">
    <div class="section-head">
      <h2>全平台覆盖</h2>
      <span class="badge">支持 8 类平台</span>
    </div>

    <div class="platform-grid">
      <div v-for="platform in platforms" :key="platform.name" class="platform-card card">
        <div class="platform-icon" :style="{ background: platform.color }">{{ platform.short }}</div>
        <div class="platform-name">{{ platform.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const platforms = [
  { name: '抖音综合引流工具', short: '抖', color: 'linear-gradient(135deg, #101010, #111111)' },
  { name: '抖音AI克隆矩阵工具', short: '抖', color: 'linear-gradient(135deg, #101010, #111111)' },
  { name: '小红书AI克隆矩阵系统', short: '小', color: 'linear-gradient(135deg, #ff4f5d, #ff1a58)' },
  { name: '小红书AI文案创作工具', short: '小', color: 'linear-gradient(135deg, #ff4f5d, #ff1a58)' },
  { name: '小红书综合引流工具', short: '小', color: 'linear-gradient(135deg, #ff4f5d, #ff1a58)' },
  { name: '快手综合工具', short: '快', color: 'linear-gradient(135deg, #ff8b29, #ffb927)' },
  { name: 'B站综合引流工具', short: 'B', color: 'linear-gradient(135deg, #ff7aa4, #ff4f83)' },
  { name: '直播间采集工具', short: '直', color: 'linear-gradient(135deg, #7a8cff, #537bf7)' },
  { name: '视频号获客工具', short: '视', color: 'linear-gradient(135deg, #4bcdff, #2ca2ff)' },
  { name: '微信营销获客工具', short: '微', color: 'linear-gradient(135deg, #3cd181, #12af64)' },
];
</script>

<style scoped>
.platform-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.platform-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 16px;
  min-height: 112px;
}

.platform-icon {
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  font-weight: 800;
  color: white;
  box-shadow: 0 14px 22px rgba(95, 103, 255, 0.26);
}

.platform-name {
  font-size: 1.02rem;
}

@media (max-width: 980px) {
  .platform-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
