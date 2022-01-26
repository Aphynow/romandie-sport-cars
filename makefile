install:
	cd frontend && yarn
	cd backend && yarn

clear:
	cd frontend && rm -rf node_modules
	cd backend && rm -rf node_modules
