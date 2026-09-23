<template>
  <div class="page">
    <div class="section-head">
      <h2>关键词监控</h2>
      <div class="head-actions">
        <button class="primary-btn" @click="addKeyword">新增关键词</button>
      </div>
    </div>

    <div class="card panel keyword-form">
      <div class="field-row">
        <input v-model="keywordInput" placeholder="输入关键词，例如：AI工具" />
        <select v-model="keywordPlatform">
          <option value="全平台">全平台</option>
          <option value="抖音">抖音</option>
          <option value="小红书">小红书</option>
          <option value="快手">快手</option>
          <option value="视频号">视频号</option>
        </select>
        <button class="primary-btn" @click="submitKeyword">保存</button>
      </div>
    </div>

    <div class="panel-grid">
      <div class="card panel">
        <h3>关键词列表</h3>
        <div class="keyword-list">
          <div v-for="item in appStore.keywords" :key="item.id ?? `${item.name}-${item.platform}`" class="keyword-row">
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
          <div><strong>245</strong><span>本日命中</span></div>
          <div><strong>68</strong><span>高意向</span></div>
          <div><strong>12</strong><span>待处理</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAppStore } from '@/store/app';

const appStore = useAppStore();
const keywordInput = ref('');
const keywordPlatform = ref('全平台');

function submitKeyword() {
  const value = keywordInput.value.trim();
  if (!value) return;
  appStore.addKeyword({ name: value, platform: keywordPlatform.value, status: '激活' });
  keywordInput.value = '';
}

function addKeyword() {
  const defaultKeyword = '新关键词';
  appStore.addKeyword({ name: defaultKeyword, platform: '全平台', status: '激活' });
}
</script>

<style scoped>
.head-actions { display: flex; align-items: center; justify-content: flex-end; }
.panel-grid { display: grid; grid-template-columns: 1.3fr 0.9fr; gap: 18px; }
.panel { padding: 18px; }
.keyword-form { margin-bottom: 18px; }
.field-row { display: flex; gap: 12px; flex-wrap: wrap; }
.field-row input, .field-row select { flex: 1; min-width: 160px; }
input, select { border-radius: 10px; border: 1px solid rgba(150, 185, 255, 0.2); background: rgba(255,255,255,0.03); color: white; padding: 10px 12px; outline: none; }
.keyword-list { display: flex; flex-direction: column; gap: 12px; }
.keyword-row { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 12px; background: rgba(255,255,255,0.03); }
.keyword-row small { display: block; color: #a1b7d8; }
.chip { padding: 4px 8px; border-radius: 999px; font-size: 0.72rem; }
.chip-on { background: rgba(51,214,155,.12); color: #b0f8da; }
.chip-off { background: rgba(255,255,255,.06); color: #dbe9ff; }
.hit-summary { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
.hit-summary div { padding: 20px 14px; border-radius: 14px; background: rgba(109,131,255,.08); display: flex; flex-direction: column; align-items: center; text-align: center; }
.hit-summary strong { font-size: 2rem; }
.hit-summary span { color: #a3badd; }
@media (max-width: 980px) { .panel-grid { grid-template-columns: 1fr; } }
</style>
