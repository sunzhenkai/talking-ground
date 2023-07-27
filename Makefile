dev:
	@npm run docs:dev -- --host

dev-bg:
	@nohup npm run docs:dev -- --host &

resolve:
	@sudo snap install node --classic
	@npm config set registry https://registry.npmmirror.com
	@npm install