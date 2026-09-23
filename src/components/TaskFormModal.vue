<template>
  <div class="modal-backdrop" v-if="modelValue">
    <div class="modal-card">
      <div class="header">
        <h3>新建任务</h3>
        <button class="close-btn" @click="close">×</button>
      </div>

      <div class="field-group">
        <label>任务名称</label>
        <input v-model="form.name" placeholder="例如：抖音关键词任务" />
      </div>

      <div class="field-group">
        <label>平台</label>
        <select v-model="form.platform">
          <option value="抖音">抖音</option>
          <option value="小红书">小红书</option>
          <option value="快手">快手</option>
          <option value="B站">B站</option>
          <option value="视频号">视频号</option>
          <option value="微信">微信</option>
        </select>
      </div>

      <div class="field-group">
        <label>关键词</label>
        <input v-model="form.keyword" placeholder="例如：AI工具,私域增长" />
      </div>

      <div class="actions">
        <button class="secondary" @click="close">取消</button>
        <button class="primary" @click="submit">确认创建</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const emit = defineEmits(['close', 'submit']);
const props = defineProps<{ modelValue: boolean }>();

const form = reactive({
  name: '',
  platform: '抖音',
  keyword: '',
});

function close() {
  emit('close');
}

function submit() {
  emit('submit', { ...form, status: '运行中', progress: 18 });
  form.name = '';
  form.keyword = '';
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(6, 12, 24, 0.62);
  display: grid;
  place-items: center;
  z-index: 30;
}

.modal-card {
  width: min(480px, 92vw);
  background: #0d1d36;
  border: 1px solid rgba(144, 178, 255, 0.18);
  border-radius: 18px;
  padding: 18px;
  color: #edf5ff;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 14px;
}

input, select {
  border-radius: 10px;
  border: 1px solid rgba(150, 185, 255, 0.2);
  background: rgba(255,255,255,0.03);
  color: white;
  padding: 10px 12px;
  outline: none;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.primary,
.secondary,
.close-btn {
  border-radius: 10px;
  border: 0;
  padding: 0.7rem 1rem;
  cursor: pointer;
}

.primary {
  background: linear-gradient(135deg, #28c7ff, #5d78ff);
  color: white;
}

.secondary,
.close-btn {
  background: rgba(255,255,255,0.05);
  color: #dfeefe;
}
</style>
