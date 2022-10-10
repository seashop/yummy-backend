install:
	pnpm install

build:
	pnpm run build

rsync:
	rsync -azv --delete dist/ ../yummy-app/public/backend/
