import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import PlatformCenter from '../views/PlatformCenter.vue';
import KeywordMonitor from '../views/KeywordMonitor.vue';
import CommentMonitor from '../views/CommentMonitor.vue';
import SentinelTasks from '../views/SentinelTasks.vue';
import AiWriter from '../views/AiWriter.vue';
import Analytics from '../views/Analytics.vue';
import Settings from '../views/Settings.vue';

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: Dashboard },
  { path: '/platform', component: PlatformCenter },
  { path: '/keywords', component: KeywordMonitor },
  { path: '/comments', component: CommentMonitor },
  { path: '/sentinel', component: SentinelTasks },
  { path: '/ai-writer', component: AiWriter },
  { path: '/analytics', component: Analytics },
  { path: '/settings', component: Settings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
