<template>
  <div class="page">
    <div class="section-head">
      <h2>设置中心</h2>
      <button class="primary-btn">保存设置</button>
    </div>

    <div class="card settings-card">
      <div class="setting-row">
        <span>自动启动</span>
        <toggle-switch :checked="true" />
      </div>
      <div class="setting-row">
        <span>桌面通知</span>
        <toggle-switch :checked="true" />
      </div>
      <div class="setting-row">
        <span>深色模式</span>
        <toggle-switch :checked="true" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const ToggleSwitch = {
  props: ['checked'],
  template: `
    <span class="toggle" :class="{ on: checked }">
      <span class="toggle-knob" />
    </span>
  `,
};
</script>

<style scoped>
.settings-card {
  padding: 18px;
}

.setting-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(162, 190, 255, 0.12);
}

.setting-row:last-child {
  border-bottom: 0;
}

.toggle {
  width: 48px;
  height: 26px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 4px;
}

.toggle.on {
  background: rgba(67, 196, 128, 0.32);
}

.toggle-knob {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: white;
  display: block;
  transform: translateX(0);
  transition: 0.2s ease;
}

.toggle.on .toggle-knob {
  transform: translateX(22px);
}
</style>
