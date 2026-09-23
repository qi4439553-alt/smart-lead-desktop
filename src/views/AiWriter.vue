<template>
  <div class="page">
    <div class="section-head">
      <h2>AI 文案工坊</h2>
      <button class="primary-btn">生成文案</button>
    </div>

    <div class="ai-layout">
      <div class="card panel">
        <h3>参数配置</h3>
        <div class="form-grid">
          <label>
            场景
            <select>
              <option>短视频标题</option>
              <option>口播脚本</option>
              <option>评论回复</option>
              <option>私信话术</option>
            </select>
          </label>
          <label>
            平台
            <select>
              <option>全平台</option>
              <option>抖音</option>
              <option>小红书</option>
              <option>视频号</option>
            </select>
          </label>
        </div>
        <textarea placeholder="请输入产品卖点和目标用户：AI工具、私域变现、引流增长……"></textarea>
      </div>

      <div class="card panel output-panel">
        <h3>生成结果</h3>
        <div class="output-box">
          <p>“AI工具让你快速搭建私域增长脚本，提升互动率和转化率，适合新手和成长型团队。”</p>
          <p>“一键生成文案，配合评论哨兵和关键词监控，形成整体获客闭环。”</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.ai-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 18px;
}

.panel {
  padding: 18px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #bfd2f7;
}

select, textarea {
  width: 100%;
  padding: 0.85rem 0.9rem;
  border-radius: 12px;
  border: 1px solid rgba(163, 192, 255, 0.15);
  background: rgba(255, 255, 255, 0.03);
  color: white;
  outline: none;
}

textarea {
  min-height: 190px;
  resize: vertical;
}

.output-box {
  padding: 14px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(179, 201, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 980px) {
  .ai-layout {
    grid-template-columns: 1fr;
  }
}
</style>
