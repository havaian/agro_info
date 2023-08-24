# Define variables
COMPOSE_FILE := docker-compose.yml

# Targets
ps:
	docker-compose ps

logs:
	docker-compose logs -f

imgs:
	docker images

dc_imgs:
        docker-compose images

build:
	docker-compose -f $(COMPOSE_FILE) build

up:
	docker-compose -f $(COMPOSE_FILE) up -d

run: build up

down:
	docker-compose -f $(COMPOSE_FILE) down

kill:
	docker-compose -f $(COMPOSE_FILE) down -v

rm:
	docker-compose -f $(COMPOSE_FILE) rm -v -f

deploy: kill rm run

help:
	@echo "Available targets:"
	@echo "  ps        -  Show status of Docker Compose services"
	@echo "  logs      -  Show logs of Docker Compose services"
        @echo "  imgs      -  Show all Docker images"
        @echo "  dc_imgs   -  Show all Docker Compose images"
	@echo "  build     -  Build Docker images"
	@echo "  up        -  Start Docker Compose services"
	@echo "  run       -  Build images and start services"
	@echo "  down      -  Stop and remove services"
	@echo "  kill      -  Stop and remove services with volumes"
	@echo "  rm        -  Remove stopped services and volumes"
	@echo "  deploy    -  Kill, remove, rebuild, and run services"
	@echo "  help      -  Show this help message"

.PHONY: ps logs imgs dc_imgs build up run down kill rm deploy help
