# Smart Lead Desktop

这是一个基于 Electron + Vue 3 + TypeScript + SQLite 的桌面端产品架构，目标是做一个全平台统一运营工具，支持：

- 关键词采集与监控
- 评论关键词筛选
- 评论哨兵任务
- 作品实时监听
- AI 文案生成
- 数据导出
- Windows 本地执行 EXE

## 技术栈

- Electron
- Vue 3
- Vite
- TypeScript
- Pinia
- Vue Router
- SQLite

## 目录结构

```text
smart-lead-desktop/
├── electron/
│   ├── main.js
│   └── preload.js
├── src/
│   ├── components/
│   ├── router/
│   ├── store/
│   ├── views/
│   ├── App.vue
│   ├── main.ts
│   └── styles.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.js
└── README.md
```

## 本地启动

```bash
npm install
npm run dev
```

## 构建生产包

```bash
npm run build
```

## 说明

当前版本是可运行的桌面端前端骨架和系统架构，适合作为后续开发基础。真实采集、平台对接和 AI 接口，需要在后续阶段逐平台实现，且必须遵守平台规则与合规要求。
