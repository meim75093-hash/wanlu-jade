export type Stone = {
  id: string;
  title: string;
  type: string;
  weight: string;
  origin: string;
  priceSignal: string;
  cover: string;
  videoLabel: string;
  tags: string[];
  shell: string;
  colorBand: string;
  light: string;
  risk: string;
  cutAdvice: string;
  ai: {
    yieldRate: string;
    colorConfidence: string;
    crackRisk: string;
    water: string;
  };
};

export const stones: Stone[] = [
  {
    id: "mnd-ice-green-2180",
    title: "曼德勒冰阳绿开窗半明料",
    type: "半明料 / 高货色料",
    weight: "2.18 kg",
    origin: "曼德勒货源 / 木那表现",
    priceSignal: "已完整存档",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Jadeitite_%28jadeite_jade%29_%28Hpakan-Tawmaw_Jade_Tract%2C_Hpakan_Ultramafic_Body%2C_Naga-Adaman_Ophiolite%2C_Late_Jurassic%2C_147_Ma%3B_alluvial_clast_%28placer_jade%29_%2814925512338%29.jpg",
    videoLabel: "开窗微距 + 强光走色",
    tags: ["冰种", "阳绿", "开窗", "收藏级"],
    shell: "皮壳紧致，砂感细，局部翻砂均匀，开窗面起光明显。",
    colorBand: "色带沿开窗右侧延展，绿色集中度高，边界较清晰。",
    light: "强光下水头穿透感好，局部荧光感明显。",
    risk: "侧边暗裂需复核，色带是否贯穿仍需二次打灯确认。",
    cutAdvice: "建议顺着色带方向慢慢取，先保住主色位，不急着大刀切。",
    ai: {
      yieldRate: "68%",
      colorConfidence: "高",
      crackRisk: "中",
      water: "冰种倾向"
    }
  },
  {
    id: "hp-violet-4360",
    title: "会卡紫罗兰改口料",
    type: "改口料 / 紫罗兰",
    weight: "4.36 kg",
    origin: "会卡场口",
    priceSignal: "可预约欣赏",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Lavender_jadeitite_%28jadeite_jade%29_%28Hpakan-Tawmaw_Jade_Tract%2C_Hpakan_Ultramafic_Body%2C_Naga-Adaman_Ophiolite%2C_Late_Jurassic%2C_147_Ma%3B_alluvial_clast_%28placer_jade%29_%2815112081905%29.jpg",
    videoLabel: "自然光走紫 + 侧光结构",
    tags: ["紫罗兰", "改口", "手镯位", "性价比"],
    shell: "改口面肉质细腻，皮壳局部偏薄，雾层过渡自然。",
    colorBand: "紫色偏淡雅，底色均匀，适合做柔和东方风格成品。",
    light: "灯下起胶感，棉感可见但不散乱。",
    risk: "紫料见光易淡，需直播自然光复核色差。",
    cutAdvice: "先避开棉集中的地方，有手镯位再考虑取镯，余料可以看挂件。",
    ai: {
      yieldRate: "54%",
      colorConfidence: "中",
      crackRisk: "低",
      water: "糯冰倾向"
    }
  },
  {
    id: "rl-black-shell-1280",
    title: "瑞丽黑皮高冰打灯料",
    type: "原石 / 打灯料",
    weight: "1.28 kg",
    origin: "瑞丽市场精选",
    priceSignal: "精品展示",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Raw_jadeite_jade_-_Burke_Museum_-_01.jpg",
    videoLabel: "黑皮压灯 + 裂纹巡检",
    tags: ["高冰", "黑皮", "打灯", "直播代购"],
    shell: "黑皮壳老辣，局部有蟒带表现，压灯透度强。",
    colorBand: "暂未见明显大色带，重点看种水和净度。",
    light: "压灯通透，边缘有冰感，肉质结构较紧。",
    risk: "黑皮料不确定性高，内裂与变种风险需重点说明。",
    cutAdvice: "这种黑皮料别急，先小窗口扩开看看，再决定要不要整切。",
    ai: {
      yieldRate: "42%",
      colorConfidence: "低",
      crackRisk: "中高",
      water: "高冰倾向"
    }
  }
];
