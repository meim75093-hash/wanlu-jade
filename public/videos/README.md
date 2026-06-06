# 视频文件 / Video Files

视频有 **两种方式** 接入，选你方便的：

## 方式 A · YouTube（推荐 · 不占你网站流量）

1. 把视频传到 YouTube（可以设"不公开"也能播）
2. 复制视频链接 `https://www.youtube.com/watch?v=AbC123xYz`
3. 在 `data/videos.ts` 里写：

```ts
{
  id: "v-01",
  title: "曼德勒 · 开窗微距",
  // ...
  youtubeId: "AbC123xYz",   // ← v= 后面那一段
  orientation: "portrait",   // 竖屏手机视频 / "landscape" 横屏
}
```

**好处**：YouTube 帮你扛带宽、自动转码、海外播放快、有自动生成的封面图

---

## 方式 B · 直接传文件到这个文件夹

把视频文件放在 `public/videos/lot-001-natural.mp4`，在数据里写：

```ts
{
  id: "v-01",
  title: "曼德勒 · 自然光",
  src: "/videos/lot-001-natural.mp4",
  poster: "/posters/v-01.jpg",  // 可选，封面图放 public/posters/
  orientation: "portrait",
}
```

**注意**：
- 视频文件单个不要超过 10 MB（手机端流量考虑）
- 推荐用 H.264 MP4 编码，最广泛兼容
- 长视频建议传 YouTube，短的（10 秒看货精华）可以直接传

---

## 横屏 / 竖屏

- `orientation: "portrait"` — 手机竖拍 9:16，适合"近距离看石头"
- `orientation: "landscape"` — 横拍 16:9，适合"全景看货 / 直播片段"

竖屏视频在网站上会以手机比例展示，更贴近"实拍感"。
