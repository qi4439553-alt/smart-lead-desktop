<template>
  <div class="page">
    <div class="section-head">
      <h2>设置中心</h2>
      <button class="primary-btn" @click="saveConfig">保存设置</button>
    </div>

    <div class="card settings-card">
      <div class="setting-row">
        <span>自动启动</span>
        <toggle-switch :checked="config.autoStart" @click="toggle('autoStart')" />
      </div>
      <div class="setting-row">
        <span>桌面通知</span>
        <toggle-switch :checked="config.notification" @click="toggle('notification')" />
      </div>
      <div class="setting-row">
        <span>深色模式</span>
        <toggle-switch :checked="config.darkMode" @click="toggle('darkMode')" />
      </div>
      <div class="setting-row">
        <span>关键词检测间隔</span>
        <input v-model.number="config.keywordInterval" type="number" min="10" max="180" />
      </div>
      <div class="setting-row">
        <span>评论扫描间隔</span>
        <input v-model.number="config.commentInterval" type="number" min="10" max="180" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/store/app';

const appStore = useAppStore();
const config = computed(() => appStore.config);

function toggle(key: 'autoStart' | 'notification' | 'darkMode') {
  appStore.updateConfig({ [key]: !config.value[key] });
}

function saveConfig() {
  appStore.appendLog('设置已保存');
}

const ToggleSwitch = {
  props: ['checked'],
  template: '<span class="toggle" :class="{ on: checked }"><span class="toggle-knob" /></span>',
};
</script>

<style scoped>
.settings-card { padding: 18px; }
.setting-row { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 14px 0; border-bottom: 1px solid rgba(162,190,255,.12); }
.setting-row:last-child { border-bottom: 0; }
input { border-radius: 10px; border: 1px solid rgba(150,185,255,0.2); background: rgba(255,255,255,0.03); color: white; padding: 8px 10px; width: 110px; }
.toggle { width: 48px; height: 26px; border-radius: 999px; background: rgba(255,255,255,.08); position: relative; display: inline-flex; align-items: center; padding: 4px; cursor: pointer; }
.toggle.on { background: rgba(67,196,128,.32); }
.toggle-knob { width: 18px; height: 18px; border-radius: 50%; background: white; display: block; transition: .2s ease; }
.toggle.on .toggle-knob { transform: translateX(22px); }
</style>
