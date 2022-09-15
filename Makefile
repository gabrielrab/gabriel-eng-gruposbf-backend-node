up: 
	docker-compose up

down: 
	docker-compose down

up-production:
	docker-compose -f docker-compose.yml -f docker-compose.production.yml up