export type Video = {
  id: string;
  title: string;
  titleEn: string;
  caption: string;
  /** YouTube video ID — 链接 v= 后面那段。如：https://youtube.com/watch?v=AbC123xYz → "AbC123xYz" */
  youtubeId?: string;
  /** 或者直接传到 public/videos/ 里的 mp4 文件，如 "/videos/lot-001.mp4" */
  src?: string;
  /** 自定义封面图（不填 youtube 会自动取）。放 public/posters/ */
  poster?: string;
  /** 纵向（手机竖拍）或横向 */
  orientation: "portrait" | "landscape";
  /** 关联的原石 LOT 号，可选 */
  lot?: string;
};

/**
 * ⚠️  这里目前是占位数据，部署后视频图标会显示但播放需要替换 youtubeId 或 src。
 * 替换方法见：public/videos/README.md
 */
export const videos: Video[] = [
  {
    id: "v-01",
    title: "开窗微距 · 看色带边界",
    titleEn: "Window macro · Reading the band",
    caption: "强光从开窗面侧入，看绿色集中度与边界是否清晰。",
    youtubeId: "",
    poster:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Jadeitite_%28jadeite_jade%29_%28Hpakan-Tawmaw_Jade_Tract%2C_Hpakan_Ultramafic_Body%2C_Naga-Adaman_Ophiolite%2C_Late_Jurassic%2C_147_Ma%3B_alluvial_clast_%28placer_jade%29_%2814925512338%29.jpg",
    orientation: "portrait",
    lot: "001"
  },
  {
    id: "v-02",
    title: "压灯 · 看水头与棉",
    titleEn: "Backlight · Reading water",
    caption: "强光从背面打过来，看肉的通透度、棉团是否散乱、有没有内裂走线。",
    youtubeId: "",
    poster:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Raw_jadeite_jade_-_Burke_Museum_-_01.jpg",
    orientation: "portrait",
    lot: "003"
  },
  {
    id: "v-03",
    title: "自然光 · 走紫罗兰",
    titleEn: "Daylight · Lavender check",
    caption: "紫料见光易淡，必须自然光下复核真实色相。",
    youtubeId: "",
    poster:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Lavender_jadeitite_%28jadeite_jade%29_%28Hpakan-Tawmaw_Jade_Tract%2C_Hpakan_Ultramafic_Body%2C_Naga-Adaman_Ophiolite%2C_Late_Jurassic%2C_147_Ma%3B_alluvial_clast_%28placer_jade%29_%2815112081905%29.jpg",
    orientation: "portrait",
    lot: "002"
  },
  {
    id: "v-04",
    title: "皮壳与翻砂",
    titleEn: "Skin and grain",
    caption: "近距离看皮壳老不老、砂感细不细、有没有蟒带提示色位。",
    youtubeId: "",
    poster:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Jadeitite_%28jadeite_jade%29_%28Hpakan-Tawmaw_Jade_Tract%2C_Hpakan_Ultramafic_Body%2C_Naga-Adaman_Ophiolite%2C_Late_Jurassic%2C_147_Ma%3B_alluvial_clast_%28placer_jade%29_%2814925512338%29.jpg",
    orientation: "portrait"
  },
  {
    id: "v-05",
    title: "切前商议",
    titleEn: "Cutting plan",
    caption: "决定切前一晚的录像。切哪刀、保哪边、风险点在哪里全部说清楚。",
    youtubeId: "",
    poster:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Raw_jadeite_jade_-_Burke_Museum_-_01.jpg",
    orientation: "landscape"
  },
  {
    id: "v-06",
    title: "切后复盘",
    titleEn: "After the cut",
    caption: "结果好坏都拍下来。切涨切垮都写在档案里，做长期信任。",
    youtubeId: "",
    poster:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Lavender_jadeitite_%28jadeite_jade%29_%28Hpakan-Tawmaw_Jade_Tract%2C_Hpakan_Ultramafic_Body%2C_Naga-Adaman_Ophiolite%2C_Late_Jurassic%2C_147_Ma%3B_alluvial_clast_%28placer_jade%29_%2815112081905%29.jpg",
    orientation: "landscape"
  }
];

export function videoPoster(v: Video): string {
  if (v.poster) return v.poster;
  if (v.youtubeId) return `https://img.youtube.com/vi/${v.youtubeId}/maxresdefault.jpg`;
  return "";
}

export function videoEmbedUrl(v: Video): string | null {
  if (v.youtubeId) {
    return `https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&rel=0&modestbranding=1`;
  }
  return null;
}
