# Define variables
BUILD_COMPOSE_FILE := docker-compose.build.yml
SERVE_COMPOSE_FILE := docker-compose.serve.yml


# Targets
ps_b:
	docker-compose -f $(BUILD_COMPOSE_FILE) ps

imgs_b:
	docker-compose -f $(BUILD_COMPOSE_FILE) images

logs_b:
	docker-compose -f ${BUILD_COMPOSE_FILE} logs

build_b:
	docker-compose -f $(BUILD_COMPOSE_FILE) build

up_b:
	docker-compose -f $(BUILD_COMPOSE_FILE) up -d

run_b: build_b up_b

down_b:
	docker-compose -f $(BUILD_COMPOSE_FILE) down

kill_b:
	docker-compose -f $(BUILD_COMPOSE_FILE) kill

rm_b:
	docker-compose -f $(BUILD_COMPOSE_FILE) rm

deploy_b: down_b kill_b rm_b run_b


# Targets
ps_s:
	docker-compose -f ${SERVE_COMPOSE_FILE} ps

imgs_s:
	docker-compose -f ${SERVE_COMPOSE_FILE} images

logs_s:
	docker-compose -f ${SERVE_COMPOSE_FILE} logs

build_s:
	docker-compose -f $(SERVE_COMPOSE_FILE) build

up_s:
	docker-compose -f $(SERVE_COMPOSE_FILE) up -d

run_s: build_s up_s

down_s:
	docker-compose -f $(SERVE_COMPOSE_FILE) down

kill_s:
	docker-compose -f $(SERVE_COMPOSE_FILE) kill

rm_s:
	docker-compose -f $(SERVE_COMPOSE_FILE) rm

deploy_s: down_s kill_s rm_s run_s



help:
	@echo "Available targets:"
	@echo "  deploy_b    -  Kill, remove, rebuild, and run build services"
	@echo "  deploy_s    -  Kill, remove, rebuild, and run serve services"
	@echo "  ps        -  Show status of Docker Compose services"
	@echo "  logs      -  Show logs of Docker Compose services"
	@echo "  dc_imgs   -  Show all Docker Compose images"
	@echo "  imgs      -  Show all Docker images"
	@echo "  build_b     -  Build Docker build images"
	@echo "  up_b        -  Start Docker Compose build services"
	@echo "  run_b       -  Build images and start build services"
	@echo "  down_b      -  Stop and remove build services"
	@echo "  kill_b      -  Stop and remove build services with volumes"
	@echo "  rm_b        -  Remove stopped build services and volumes"
	@echo "  build_s     -  Build Docker serve images"
	@echo "  up_s        -  Start Docker Compose serve services"
	@echo "  run_s       -  Build images and start serve services"
	@echo "  down_s      -  Stop and remove serve services"
	@echo "  kill_s      -  Stop and remove serve services with volumes"
	@echo "  rm_s        -  Remove stopped serve services and volumes"
	@echo "  help      -  Show this help message"

.PHONY: ps logs imgs dc_imgs build_b up_b run_b down_b kill_b rm_b deploy_b build_b up_s run_s down_s kill_s rm_s deploy_s help
