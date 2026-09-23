export type PlatformName =
  | '抖音'
  | '小红书'
  | '快手'
  | 'B站'
  | '视频号'
  | '微信'
  | '直播间'
  | '私域矩阵';

export interface PlatformItem {
  name: string;
  short: string;
  color: string;
}

export interface KeywordItem {
  id?: number;
  name: string;
  platform: string;
  status: string;
}

export interface CommentItem {
  id?: number;
  platform: string;
  message: string;
  keyword: string;
  status: string;
}

export const platformCatalog: PlatformItem[] = [
  { name: '抖音综合引流工具', short: '抖', color: 'linear-gradient(135deg, #101010, #111111)' },
  { name: '抖音AI克隆矩阵工具', short: '抖', color: 'linear-gradient(135deg, #101010, #111111)' },
  { name: '小红书AI克隆矩阵系统', short: '小', color: 'linear-gradient(135deg, #ff4f5d, #ff1a58)' },
  { name: '小红书AI文案创作工具', short: '小', color: 'linear-gradient(135deg, #ff4f5d, #ff1a58)' },
  { name: '小红书综合引流工具', short: '小', color: 'linear-gradient(135deg, #ff4f5d, #ff1a58)' },
  { name: '快手综合工具', short: '快', color: 'linear-gradient(135deg, #ff8b29, #ffb927)' },
  { name: 'B站综合引流工具', short: 'B', color: 'linear-gradient(135deg, #ff7aa4, #ff4f83)' },
  { name: '直播间采集工具', short: '直', color: 'linear-gradient(135deg, #7a8cff, #537bf7)' },
  { name: '视频号获客工具', short: '视', color: 'linear-gradient(135deg, #4bcdff, #2ca2ff)' },
  { name: '微信营销获客工具', short: '微', color: 'linear-gradient(135deg, #3cd181, #12af64)' },
];

export const seedKeywords: KeywordItem[] = [
  { id: 1, name: 'AI工具', platform: '全平台', status: '激活' },
  { id: 2, name: '获客方案', platform: '抖音', status: '激活' },
  { id: 3, name: '私域变现', platform: '小红书', status: '待处理' },
  { id: 4, name: '直播带货', platform: '视频号', status: '激活' },
];

export const seedComments: CommentItem[] = [
  { id: 1, platform: '抖音', message: '请问这个项目怎么做？', keyword: '怎么做', status: '待沟通' },
  { id: 2, platform: '小红书', message: '想了解拿单价和方案', keyword: '价格', status: '待联系' },
  { id: 3, platform: '视频号', message: '怎么合作，联系我', keyword: '合作', status: '已标记' },
];
