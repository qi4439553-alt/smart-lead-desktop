<template>
  <div class="stat-card card">
    <div class="stat-header">
      <span>{{ title }}</span>
      <small>{{ suffix }}</small>
    </div>
    <div class="stat-number" :class="tone">{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  value: string | number;
  suffix?: string;
  tone?: 'blue' | 'green' | 'purple' | 'orange';
}

withDefaults(defineProps<Props>(), {
  suffix: '',
  tone: 'blue',
});
</script>

<style scoped>
.stat-card {
  padding: 18px 20px;
  min-height: 122px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #b8cdf5;
  font-size: 0.82rem;
}

.stat-number {
  font-size: clamp(1.8rem, 2.5vw, 2.5rem);
  font-weight: 800;
}

.blue { color: #63d3ff; }
.green { color: #4ee3b7; }
.purple { color: #8e8cff; }
.orange { color: #ffbc7a; }
</style>
