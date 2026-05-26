# Hermes Operations Handoff

Hermes is responsible for deployment, runtime operations, and security hygiene for the Wanlu Jade website.

## Project

- Name: Wanlu Jade
- Stack: Next.js 14, React 18, TailwindCSS
- Runtime: Node.js 20
- Deployment target: US Linux server
- Container: Docker / Docker Compose

## Hermes Responsibilities

1. Deploy and update the website on the production server.
2. Manage Nginx reverse proxy and HTTPS certificates.
3. Monitor container health and restart failures.
4. Keep `.env.production` current with WhatsApp, LINE, Telegram, and site URL.
5. Run basic security checks before public launch.
6. Report deployment results back to Codex/user with command output.

## Required Server Inputs

- Server IP
- SSH username
- SSH port
- SSH key or access method
- Domain name
- Whether Cloudflare is managing DNS
- Final WhatsApp, LINE, and Telegram URLs

## First Deploy

```bash
mkdir -p /opt/wanlu-jade
cd /opt/wanlu-jade
git clone <repo-url> .
cp .env.example .env.production
vi .env.production
bash deploy/deploy.sh
```

## Nginx

Use `deploy/nginx-wanlu-jade.conf`.

Replace:

```nginx
server_name example.com www.example.com;
```

with the real domain.

Then:

```bash
nginx -t
systemctl reload nginx
```

## HTTPS

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Update Deploy

```bash
cd /opt/wanlu-jade
git pull
bash deploy/deploy.sh
```

## Health Checks

```bash
docker compose -f deploy/docker-compose.yml ps
docker logs --tail 100 wanlu-jade
curl -I http://127.0.0.1:3000
curl -I https://your-domain.com
```

## Security Checklist

- Do not commit `.env.production`.
- Keep SSH key access restricted.
- Use Cloudflare proxy if available.
- Enable HTTPS before sharing the public URL.
- Confirm Nginx exposes only ports 80 and 443 publicly.
- Confirm Docker container is not running as root.
- Replace placeholder contact URLs before launch.

## Report Format

After deployment, Hermes should report:

```text
Deployment status:
- Server:
- Domain:
- Container status:
- Local curl:
- Public curl:
- Nginx status:
- HTTPS status:
- Any errors:
```
