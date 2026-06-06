# 原石图片 / Stone Photos

把每块原石的照片放在这个文件夹，然后在 `data/stones.ts` 里把 `cover` 改成 `/stones/<文件名>`。

## 例子

放一张图：`public/stones/lot-001.jpg`

在 `data/stones.ts`：

```ts
{
  id: "wl-01",
  lot: "001",
  // ...
  cover: "/stones/lot-001.jpg",
  // ...
}
```

## 建议

- **格式**：JPG（照片）或 WebP（更小）。AVIF 也可以。
- **尺寸**：宽至少 1600px，高至少 1600px 或更大。Next.js 会自动压缩。
- **文件大小**：单张控制在 500 KB 以内。可以用 [tinypng.com](https://tinypng.com) 压一下。
- **比例**：4:5 或 5:4 都行，会按 frame 裁切。
- **命名**：用 `lot-001-1.jpg`、`lot-002-front.jpg` 这种，方便管理。

## 多张图（之后扩展用）

如果一块原石要展示多张图（开窗 / 侧面 / 打灯），可以在 `data/stones.ts` 加 `gallery: string[]` 字段，文件命名建议：
- `lot-001-cover.jpg`（封面）
- `lot-001-window.jpg`（开窗）
- `lot-001-light.jpg`（打灯）
- `lot-001-side.jpg`（侧面）
