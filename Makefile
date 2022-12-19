buf:
	@buf generate

build:
	pnpm run build

install:
	pnpm install

rsync:
	rsync -azv --delete dist/ ../yummy-app/public/backend/

.PHONY: buf build install rsync
