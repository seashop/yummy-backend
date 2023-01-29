buf:
	@buf generate

build:
	pnpm run build

install:
	pnpm install

.PHONY: buf build install rsync
