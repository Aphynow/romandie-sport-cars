install:
	cd frontend && yarn install --silent
	cd backend && yarn install --silent

clear:
	cd frontend && rm -rf node_modules
	cd backend && rm -rf node_modules
