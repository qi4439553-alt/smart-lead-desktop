import { defineStore } from 'pinia';
import { seedComments, seedKeywords, platformCatalog } from '@/lib/platforms';

export const useAppStore = defineStore('app', {
  state: () => ({
    platformList: platformCatalog.map((item) => item.name),
    platforms: platformCatalog,
    tasks: [
      { id: 1, name: '抖音关键词任务', platform: '抖音', status: '运行中', progress: 76, keyword: 'AI工具' },
      { id: 2, name: '小红书评论筛选', platform: '小红书', status: '待处理', progress: 42, keyword: '私域' },
      { id: 3, name: '视频号哨兵', platform: '视频号', status: '已暂停', progress: 15, keyword: '合作' },
    ],
    keywords: seedKeywords,
    comments: seedComments,
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
      keywordInterval: 30,
      commentInterval: 20,
    },
    aiTemplates: [
      'AI工具快速搭建私域增长脚本，提升转化率。',
      '利用关键词雷达和评论哨兵提升热点发现效率。',
      '做高意向流量筛选，锁定真实合作客户。',
    ],
  }),
  actions: {
    addTask(task: Record<string, any>) {
      this.tasks.unshift({
        id: Date.now(),
        status: '运行中',
        progress: 25,
        ...task,
      });
    },
    addKeyword(keyword: Record<string, any>) {
      const payload = {
        id: Date.now(),
        name: keyword.name || '新关键词',
        platform: keyword.platform || '全平台',
        status: keyword.status || '激活',
      };
      this.keywords.unshift(payload);
      this.appendLog(`新增关键词：${payload.name}`);
    },
    addComment(comment: Record<string, any>) {
      const payload = {
        id: Date.now(),
        platform: comment.platform || '全平台',
        message: comment.message || '新评论记录',
        keyword: comment.keyword || '关键词',
        status: comment.status || '待沟通',
      };
      this.comments.unshift(payload);
      this.appendLog(`新增评论：${payload.message}`);
    },
    appendLog(log: string) {
      this.logs.unshift(log);
      if (this.logs.length > 100) this.logs = this.logs.slice(0, 100);
    },
    updateConfig(payload: Record<string, any>) {
      this.config = { ...this.config, ...payload };
    },
    toggleTask(taskId: number) {
      const item = this.tasks.find((task: any) => task.id === taskId);
      if (!item) return;
      item.status = item.status === '运行中' ? '已暂停' : '运行中';
      this.appendLog(`${item.name} 已${item.status}`);
    },
    markCommentDone(commentId: number) {
      const item = this.comments.find((comment: any) => comment.id === commentId);
      if (!item) return;
      item.status = '已处理';
      this.appendLog(`评论已处理：${item.message}`);
    },
  },
});
