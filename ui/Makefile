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
	docker-compose -f $(BUILD_COMPOSE_FILE) down --remove-orphans

kill_b:
	docker-compose -f $(BUILD_COMPOSE_FILE) kill

rm_b:
	docker-compose -f $(BUILD_COMPOSE_FILE) rm

clean_b: down_b kill_b rm_b

deploy_b: clean_b run_b


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
	docker-compose -f $(SERVE_COMPOSE_FILE) down --remove-orphans

kill_s:
	docker-compose -f $(SERVE_COMPOSE_FILE) kill

rm_s:
	docker-compose -f $(SERVE_COMPOSE_FILE) rm

clean_s: down_s kill_s rm_s

deploy_s: clean_s run_s



help:
	@echo "Available targets:"
	@echo "  deploy_b    -  Kill, remove, rebuild, and run build"
	@echo "  deploy_s    -  Kill, remove, rebuild, and run serve"
	@echo "  ps_b        -  Show status of Docker Compose build"
	@echo "  logs_b      -  Show logs of Docker Compose build"
	@echo "  imgs_b      -  Show all Docker images build"
	@echo "  build_b     -  Build Docker images build"
	@echo "  up_b        -  Start Docker Compose build"
	@echo "  run_b       -  Build images and start build"
	@echo "  down_b      -  Stop and remove build build"
	@echo "  kill_b      -  Stop and remove build build"
	@echo "  rm_b        -  Remove stopped build build"
	@echo "  clean_b     -  Down && kill && rm build"
	@echo "  ps_s        -  Show status of Docker Compose serve"
	@echo "  logs_s      -  Show logs of Docker Compose serve"
	@echo "  imgs_s      -  Show all Docker images serve"
	@echo "  build_s     -  Build Docker images serve"
	@echo "  up_s        -  Start Docker Compose serve"
	@echo "  run_s       -  Build images and start serve"
	@echo "  down_s      -  Stop and remove serve"
	@echo "  kill_s      -  Stop and remove serve"
	@echo "  rm_s        -  Remove stopped serve"
	@echo "  clean_s     -  Down && kill && rm serve"
	@echo "  help        -  Show agro_info_ui help message"

.PHONY: ps logs imgs dc_imgs build_b up_b run_b down_b kill_b rm_b deploy_b build_b up_s run_s down_s kill_s rm_s deploy_s help
