# Deploy Instructions

## Method 1: Automatic Deploy via Git

1. Fork this repository.
2. Connect your Vercel account to your GitHub account.
3. Import the project in Vercel.
4. Configure the custom domain `ramxpedition.com.br`.

## Method 2: Manual Deploy

1. Install the Vercel CLI:
```bash
npm i -g vercel
```

2. Login:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

### Domain Configuration

1. In the Vercel dashboard, go to **Settings > Domains**.
2. Add `ramxpedition.com.br`.
3. Configure the DNS in your provider:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```