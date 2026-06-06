export type Stone = {
  id: string;
  lot: string;
  titleZh: string;
  titleEn: string;
  category: string;
  origin: string;
  weight: string;
  cover: string;
  estimate: string;
  status: "AVAILABLE" | "ON HOLD" | "RESERVED";
  videoNote: string;
  note: string;
  noteEn: string;
  specs: {
    shell: string;
    color: string;
    light: string;
    cut: string;
  };
};

export const stones: Stone[] = [
  {
    id: "wl-01",
    lot: "001",
    titleZh: "曼德勒 · 冰阳绿开窗",
    titleEn: "Mandalay Ice-Yang Green, Window Opened",
    category: "半明料 · Semi-cut",
    origin: "曼德勒货源 · 木那场口表现",
    weight: "2.18 kg",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Jadeitite_%28jadeite_jade%29_%28Hpakan-Tawmaw_Jade_Tract%2C_Hpakan_Ultramafic_Body%2C_Naga-Adaman_Ophiolite%2C_Late_Jurassic%2C_147_Ma%3B_alluvial_clast_%28placer_jade%29_%2814925512338%29.jpg",
    estimate: "面议",
    status: "AVAILABLE",
    videoNote: "已存：自然光 / 强光 / 开窗微距",
    note: "皮壳紧致，砂感细腻，开窗处起光明显。色带沿右侧延展，集中度高，边界清晰。强光下水头穿透，局部见荧光感。",
    noteEn: "Tight skin, fine sand. The window face throws back light cleanly. Color band runs along the right edge, defined and concentrated.",
    specs: {
      shell: "紧砂细皮 · 翻砂均匀",
      color: "右侧主色 · 集中度高",
      light: "穿透 · 局部荧光",
      cut: "顺色带保主色"
    }
  },
  {
    id: "wl-02",
    lot: "002",
    titleZh: "会卡 · 紫罗兰改口料",
    titleEn: "Hpakant Lavender, Reworked Face",
    category: "改口料 · Reworked",
    origin: "会卡场口",
    weight: "4.36 kg",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Lavender_jadeitite_%28jadeite_jade%29_%28Hpakan-Tawmaw_Jade_Tract%2C_Hpakan_Ultramafic_Body%2C_Naga-Adaman_Ophiolite%2C_Late_Jurassic%2C_147_Ma%3B_alluvial_clast_%28placer_jade%29_%2815112081905%29.jpg",
    estimate: "面议",
    status: "AVAILABLE",
    videoNote: "已存：自然光走紫 / 侧光结构",
    note: "改口面肉质细腻，皮壳偏薄，雾层过渡自然。紫色偏淡雅，底色均匀，适合做柔和东方风格成品。",
    noteEn: "A reworked face revealing fine flesh. Lavender, soft and even, draws the kind of light that flatters quiet pieces.",
    specs: {
      shell: "薄皮 · 雾层柔和",
      color: "淡紫均匀 · 底色稳",
      light: "起胶 · 棉不散",
      cut: "避棉取镯余作挂件"
    }
  },
  {
    id: "wl-03",
    lot: "003",
    titleZh: "瑞丽 · 黑皮高冰打灯料",
    titleEn: "Ruili Black Skin, High Ice on Backlight",
    category: "原石 · Raw",
    origin: "瑞丽市场精选",
    weight: "1.28 kg",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Raw_jadeite_jade_-_Burke_Museum_-_01.jpg",
    estimate: "面议",
    status: "ON HOLD",
    videoNote: "已存：黑皮压灯 / 裂纹巡检",
    note: "黑皮壳老辣，局部有蟒带表现。压灯通透，边缘起冰感，肉质结构紧。色带尚不明确，重点看种水与净度。",
    noteEn: "An old black skin with python banding. Backlit, the body throws an ice-cold clarity. Read it for water, not for colour.",
    specs: {
      shell: "黑皮老辣 · 见蟒带",
      color: "未明 · 看种水",
      light: "通透 · 边起冰",
      cut: "小窗扩开 · 不整切"
    }
  }
];
