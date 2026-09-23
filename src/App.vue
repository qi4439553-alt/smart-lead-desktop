<template>
  <div class="app-shell">
    <aside class="sidebar">
      <div class="brand-box">
        <div class="brand-mark">S</div>
        <div>
          <div class="brand-name">SmartLead</div>
          <div class="brand-sub">Desktop</div>
        </div>
      </div>

      <nav class="nav-menu">
        <router-link to="/dashboard" class="nav-item">
          <span>📊</span>
          <span>工作台</span>
        </router-link>
        <router-link to="/platform" class="nav-item">
          <span>🧩</span>
          <span>全平台</span>
        </router-link>
        <router-link to="/keywords" class="nav-item">
          <span>🔎</span>
          <span>关键词监控</span>
        </router-link>
        <router-link to="/comments" class="nav-item">
          <span>💬</span>
          <span>评论监控</span>
        </router-link>
        <router-link to="/sentinel" class="nav-item">
          <span>🛡️</span>
          <span>评论哨兵</span>
        </router-link>
        <router-link to="/ai-writer" class="nav-item">
          <span>✍️</span>
          <span>AI 文案</span>
        </router-link>
        <router-link to="/analytics" class="nav-item">
          <span>📈</span>
          <span>数据分析</span>
        </router-link>
        <router-link to="/settings" class="nav-item">
          <span>⚙️</span>
          <span>设置</span>
        </router-link>
      </nav>

      <div class="sidebar-footer">
        <div class="status-dot" />
        <div>
          <strong>系统状态</strong>
          <small>运行中</small>
        </div>
      </div>
    </aside>

    <main class="content-panel">
      <header class="topbar">
        <div>
          <p class="eyebrow">智能获客工作台</p>
          <h1>全平台统一运营中心</h1>
        </div>
        <div class="topbar-actions">
          <button class="outline-btn">导出报告</button>
          <button class="primary-btn">新建任务</button>
        </div>
      </header>

      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app-shell {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(180deg, #09162d 0%, #0f2246 100%);
  color: #edf5ff;
}

.sidebar {
  width: 260px;
  background: rgba(10, 20, 41, 0.75);
  border-right: 1px solid rgba(147, 182, 255, 0.15);
  padding: 22px 18px;
  display: flex;
  flex-direction: column;
}

.brand-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 8px 20px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, #2ad3ff, #6d7cff);
  font-weight: 800;
  box-shadow: 0 12px 28px rgba(67, 118, 255, 0.4);
}

.brand-name {
  font-size: 1.1rem;
  font-weight: 700;
}

.brand-sub {
  font-size: 0.7rem;
  color: #8ca7d8;
}

.nav-menu {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 12px;
  border-radius: 12px;
  text-decoration: none;
  color: #eaf2ff;
  transition: 0.25s ease;
  border: 1px solid transparent;
}

.nav-item:hover,
.nav-item.router-link-active {
  background: rgba(98, 136, 255, 0.12);
  border-color: rgba(98, 136, 255, 0.35);
}

.sidebar-footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 10px;
  border-radius: 12px;
  background: rgba(74, 128, 255, 0.08);
  color: #dfeeff;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3bf0b3;
  box-shadow: 0 0 12px #3bf0b3;
}

.content-panel {
  flex: 1;
  padding: 26px 28px 32px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 18px;
}

.eyebrow {
  margin: 0 0 8px;
  color: #7bc9ff;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
}

.topbar h1 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.7rem);
}

.topbar-actions {
  display: flex;
  gap: 12px;
}

button {
  border: 0;
  border-radius: 12px;
  padding: 0.8rem 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, #28c7ff, #5d78ff);
  color: white;
  box-shadow: 0 12px 26px rgba(38, 127, 255, 0.35);
}

.outline-btn {
  background: rgba(255, 255, 255, 0.04);
  color: #edf5ff;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

@media (max-width: 980px) {
  .app-shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }

  .nav-menu {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
