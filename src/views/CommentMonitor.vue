<template>
  <div class="page">
    <div class="section-head">
      <h2>评论监控</h2>
      <button class="primary-btn">导出结果</button>
    </div>

    <div class="table-card card">
      <table>
        <thead>
          <tr>
            <th>平台</th>
            <th>评论内容</th>
            <th>关键词</th>
            <th>状态</th>
            <th>时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in comments" :key="item.id">
            <td>{{ item.platform }}</td>
            <td>{{ item.message }}</td>
            <td>{{ item.keyword }}</td>
            <td><span class="tag tag-red">{{ item.status }}</span></td>
            <td>{{ item.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const comments = [
  { id: 1, platform: '抖音', message: '请问这个项目怎么做？', keyword: '怎么做', status: '待沟通', time: '09:24' },
  { id: 2, platform: '小红书', message: '想了解拿单价和方案', keyword: '价格', status: '待联系', time: '09:31' },
  { id: 3, platform: '视频号', message: '怎么合作，联系我', keyword: '合作', status: '已标记', time: '09:55' },
];
</script>

<style scoped>
.table-card {
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background: rgba(128, 147, 255, 0.06);
}

th, td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid rgba(159, 189, 255, 0.1);
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 0.72rem;
}

.tag-red {
  background: rgba(255, 104, 104, 0.12);
  color: #ffc7c7;
}
</style>
