# Wanlu Jade 自有服务器部署

推荐服务器：Ubuntu 22.04/24.04，美国 VPS，2C/2G 起步。

## Docker 部署

```bash
git clone <repo-url> wanlu-jade
cd wanlu-jade
cp .env.example .env.production
bash deploy/deploy.sh
```

访问：

```bash
curl http://127.0.0.1:3000
```

## Nginx 反代

把 `deploy/nginx-wanlu-jade.conf` 复制到：

```bash
/etc/nginx/sites-available/wanlu-jade
```

改掉里面的 `example.com`，然后执行：

```bash
ln -s /etc/nginx/sites-available/wanlu-jade /etc/nginx/sites-enabled/wanlu-jade
nginx -t
systemctl reload nginx
```

## HTTPS

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d your-domain.com -d www.your-domain.com
```

## 更新网站

```bash
git pull
docker build -t wanlu-jade .
docker stop wanlu-jade
docker rm wanlu-jade
docker run -d --name wanlu-jade --restart unless-stopped -p 3000:3000 wanlu-jade
```
