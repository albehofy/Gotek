.PHONY: start dev backend dashboard website test migrate seed

start:
	./start.sh

dev:
	./start.sh

backend:
	cd backend && php artisan serve

dashboard:
	cd fontend/dashboard && npm start

website:
	cd fontend/view && npm start

test:
	cd backend && php artisan test

migrate:
	cd backend && php artisan migrate

seed:
	cd backend && php artisan db:seed
