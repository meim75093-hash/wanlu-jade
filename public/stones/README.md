# 原石图片 / Stone Photos

把每块原石的照片放在这个文件夹，然后在 `data/stones.ts` 里把 `cover` 改成 `/stones/<文件名>`。Hero 大图在 `app/page.tsx` 第 11 行 `heroImage` 常量。

---

## 一、用 AI 生图（推荐 · 5 分钟出图）

在 **Midjourney**（Discord `/imagine`）、**Flux**（[flux1.ai](https://flux1.ai)）或 **DALL·E**（ChatGPT）里粘贴下面四段提示词。每段都是不同模特、不同光线、不同氛围，但拼成一组就是同一个品牌叙事：

### Hero · 大图（全景剪影）
```
Over-the-shoulder view of young East Asian woman in dark slate cashmere,
standing by a tall window in a quiet gallery, holding a large rough jadeite
boulder with both hands at chest height, soft afternoon backlight rim,
deep shadows, full body partial silhouette, muted earth tones,
editorial fashion campaign, Hasselblad medium format, 50mm
--ar 16:10 --style raw --v 7
```

### LOT 001 · 冰阳绿开窗（明亮编辑感）
```
Close macro of fine-skinned East Asian hands with pearl-pink manicure
delicately cradling a 2kg rough jadeite with bright ice-green window face,
clean cream studio backdrop, bright soft top light, jewellery campaign
aesthetic, no face, minimalist composition, 100mm macro lens, f/4
--ar 4:5 --style raw --v 7
```

### LOT 002 · 紫罗兰（温柔侧颜）
```
Side profile portrait of East Asian woman in soft beige silk blouse,
eyes closed, lifting a lavender jadeite stone toward her cheekbone,
warm golden hour window light, blurred greenery in background,
intimate quiet mood, like a Vogue China still, 85mm portrait, f/2
--ar 4:5 --style raw --v 7
```

### LOT 003 · 黑皮高冰（深夜戏剧感）
```
Two pale East Asian hands emerging from black silk sleeves, presenting a
dark black-skinned raw jadeite stone on an open palm, pure black background,
single sharp overhead spotlight casting a bright ice-cold edge on the stone,
dramatic chiaroscuro, jewellery auction press image, 85mm, f/5.6
--ar 4:5 --style raw --v 7
```

**四张连起来的叙事**：
1. Hero 远景剪影 → 品牌氛围
2. LOT 001 手部宏观 → 工艺细节
3. LOT 002 侧颜柔光 → 抒情私密
4. LOT 003 黑暗戏剧 → 收藏级稀有

---

## 二、生图后怎么换上去

**Step 1**：把图命名为 `hero.jpg`、`lot-001.jpg`、`lot-002.jpg`、`lot-003.jpg` 放进这个文件夹

**Step 2**：改 `app/page.tsx` 第 11 行：

```ts
const heroImage = "/stones/hero.jpg";
```

**Step 3**：改 `data/stones.ts` 每个 stone 的 `cover` 字段：

```ts
cover: "/stones/lot-001.jpg",  // 同理 lot-002、lot-003
```

**Step 4**：`git add . && git commit -m "替换原石图片" && git push`，Vercel 90 秒自动部署。

---

## 三、图片规格建议

- **格式**：JPG（照片）或 WebP（更小）。AVIF 也可以。
- **尺寸**：宽至少 1600px，高至少 1600px 或更大。Next.js 会自动压缩。
- **文件大小**：单张控制在 500 KB 以内。可以用 [tinypng.com](https://tinypng.com) 压一下。
- **Hero 大图比例**：16:10 或 16:9 横向
- **LOT 卡封面比例**：4:5 或 5:4 纵向
- **命名建议**：`lot-001.jpg`、`lot-002-side.jpg` 这种，方便管理。

---

## 四、用图床代替本地文件（图多时推荐）

把图传到 Cloudinary / 阿里云 OSS / 你自己的 CDN，拿到外链直接粘到 `cover`：

```ts
cover: "https://res.cloudinary.com/你的账号/image/upload/v123/lot-001.jpg",
```

这样改图不用每次都推代码，前端立刻见效。

---

## 五、多张图（之后扩展用）

如果一块原石要展示多张图（开窗 / 侧面 / 打灯），可以在 `data/stones.ts` 加 `gallery: string[]` 字段：

```ts
gallery: [
  "/stones/lot-001-cover.jpg",
  "/stones/lot-001-window.jpg",
  "/stones/lot-001-light.jpg",
  "/stones/lot-001-side.jpg"
]
```

（这个字段还没接进组件，需要时告诉我，我接到 StoneCard。）
