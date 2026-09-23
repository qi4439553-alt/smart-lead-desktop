<template>
  <div class="page">
    <div class="section-head"><h2>数据分析</h2><span class="badge">过去 7 天</span></div>
    <div class="grid grid-3">
      <div class="card mini-card"><small>曝光</small><strong>1.12M</strong></div>
      <div class="card mini-card"><small>互动</small><strong>68.4K</strong></div>
      <div class="card mini-card"><small>转化</small><strong>4.7%</strong></div>
    </div>
    <div class="card chart-card">
      <h3>趋势图</h3>
      <div class="chart-bars"><span v-for="bar in [22,48,70,54,90,78,96]" :key="bar" :style="{ height: `${bar}%` }" /></div>
    </div>
  </div>
</template>

<style scoped>
.mini-card{padding:18px;display:flex;flex-direction:column;gap:8px}.mini-card small{color:#9ab4da}.mini-card strong{font-size:2rem}.chart-card{padding:18px}.chart-bars{display:flex;align-items:end;gap:12px;height:240px;margin-top:16px}.chart-bars span{flex:1;border-radius:12px 12px 0 0;background:linear-gradient(180deg,#5bd3ff,#6b7df7);box-shadow:0 8px 18px rgba(102,124,255,.28)}
</style>
