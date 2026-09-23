import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    platformList: [
      '抖音',
      '小红书',
      '快手',
      'B站',
      '视频号',
      '微信',
      '直播间',
      '私域矩阵',
    ],
    tasks: [
      { id: 1, name: '抖音关键词任务', platform: '抖音', status: '运行中', progress: 76 },
      { id: 2, name: '小红书评论筛选', platform: '小红书', status: '待处理', progress: 42 },
      { id: 3, name: '视频号哨兵', platform: '视频号', status: '已暂停', progress: 15 },
    ],
    logs: [
      '关键词 “AI工具” 监控项已启动',
      '新评论命中：需要了解报价',
      'B站视频采集完成，共 128 条',
      'AI 文案生成任务已完成 3 条',
    ],
    config: {
      darkMode: true,
      notification: true,
      autoStart: false,
    },
  }),
  actions: {
    addTask(task: Record<string, any>) {
      this.tasks.unshift(task);
    },
    appendLog(log: string) {
      this.logs.unshift(log);
    },
    updateConfig(payload: Record<string, any>) {
      this.config = { ...this.config, ...payload };
    },
  },
});
