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
	docker-compose -f $(COMPOSE_FILE) build --remove-orphans

up:
	docker-compose -f $(COMPOSE_FILE) up -d

run: build up

down:
	docker-compose -f $(COMPOSE_FILE) down --remove-orphans

kill:
	docker-compose -f $(COMPOSE_FILE) kill

rm:
	docker-compose -f $(COMPOSE_FILE) rm

clean: down kill rm

deploy: clean run

help:
	@echo "Available targets:"
	@echo "  deploy    -  Kill, remove, rebuild, and run agro_info_api"
	@echo "  ps        -  Show status of Docker Compose agro_info_api"
	@echo "  logs      -  Show logs of Docker Compose agro_info_api"
	@echo "  dc_imgs   -  Show all Docker Compose images agro_info_api"
	@echo "  imgs      -  Show all Docker images agro_info_api"
	@echo "  build     -  Build Docker images agro_info_api"
	@echo "  up        -  Start Docker Compose agro_info_api"
	@echo "  run       -  Build images and start agro_info_api"
	@echo "  down      -  Stop and remove agro_info_api"
	@echo "  kill      -  Stop and remove agro_info_api"
	@echo "  rm        -  Remove stopped agro_info_api"
	@echo "  clean     -  Down && kill && rm agro_info_api"
	@echo "  help      -  Show agro_info_api help message"

.PHONY: ps logs imgs dc_imgs build up run down kill rm deploy help
