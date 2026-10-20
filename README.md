# market-agent

Agente Eve desplegado en Vercel. Comandos para crear, vincular, configurar credenciales, conectar canales y publicar a producción.

Docs: [CLI Eve](https://eve.dev/docs/reference/cli) · [Deploy en Vercel](https://eve.dev/docs/guides/deployment/vercel) · [Canales](https://eve.dev/docs/channels/overview)

## Requisitos

```bash
node -v          # 24.x
npm i -g eve     # o usar npx eve@latest
npm i -g vercel
vercel login

# Proyecto nuevo
eve init market-agent
# o con modelo explícito
eve init market-agent --model openai/gpt-6-luna-fast --reasoning high

# En el directorio actual (vacío)
eve init .

# Agregar agente a un package.json existente (sin carpeta agent/)
eve init

# Scaffold sin abrir la TUI
eve init market-agent --non-interactive

cd market-agent
yarn          # o npm install

yarn dev      # eve dev  (TUI + servidor local, puerto 2000)
eve info      # qué descubrió Eve (modelo, tools, canales, schedules)
eve info --json

eve set model openai/gpt-6-luna-fast --reasoning high

eve build
yarn typecheck
eve start     # sirve el build local (.output/)

eve link
# Este proyecto ya está ligado a: marketagentvercel
eve link --project marketagentvercel --non-interactive

# Con team
eve link --project marketagentvercel --team <team-slug> --non-interactive

vercel link
vercel whoami
vercel project ls

AI_GATEWAY_API_KEY
AI Gateway (local; en Vercel suele bastar OIDC)
VERCEL_OIDC_TOKEN
Auth OIDC del proyecto (la escribe eve link / vercel env pull)
TWELVE_LABS_API_KEY
Tool de market data
SLACK_CHANNEL_ID
Canal destino (p. ej. schedules)

vercel env ls
vercel env ls production

# Agregar (pide el valor de forma interactiva; no pongas secretos en el historial)
vercel env add TWELVE_LABS_API_KEY production
vercel env add TWELVE_LABS_API_KEY preview
vercel env add TWELVE_LABS_API_KEY development

vercel env add SLACK_CHANNEL_ID production

# Desde un archivo (mejor para secretos)
vercel env add TWELVE_LABS_API_KEY production < ./secret.txt

vercel env update TWELVE_LABS_API_KEY production
vercel env rm TWELVE_LABS_API_KEY production

vercel          # preview
vercel --prod   # production
vercel ls
vercel inspect <url-o-deployment-id>
vercel logs <url>

eve remote info --url https://<tu-dominio>.vercel.app
eve remote connect --url https://<tu-dominio>.vercel.app
eve remote invoke --url https://<tu-dominio>.vercel.app "¿Cómo va el mercado?"

eve registry search channel
eve add channel/slack
eve add channel/telegram
eve add channel/discord
eve add channel/web
eve add channel/github
eve add channel/linear
eve add channel/teams

yarn eval
eve eval
eve eval --url https://<tu-dominio>.vercel.app
eve eval --list --json

eve logs
eve logs list
eve logs show <logid>

eve traces list
eve traces show