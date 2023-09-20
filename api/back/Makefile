# Define variables
APP_NAME := agro_info_back
NETWORK := agro_info_netw
DOCKERFILE := Dockerfile
ENV_FILE := .env

# Check if network exists and create it if not
network:
	@if [ -z $$(docker network ls -q -f name=agro_info_netw) ]; then \
		docker network create agro_info_netw; \
		echo "Network agro_info_netw created"; \
	else \
		echo "Network agro_info_netw already exists"; \
	fi

# Targets
build:
	docker build -t $(APP_NAME) -f $(DOCKERFILE) .


# run: build
# 	docker run --env-file $(ENV_FILE) -d --network $(NETWORK) --name $(APP_NAME) $(APP_NAME)
run: build
	docker run --env-file $(ENV_FILE) -d --name $(APP_NAME) $(APP_NAME)

stop:
	docker stop $(APP_NAME)

remove: stop
	docker rm $(APP_NAME)

clean: remove
	docker rmi $(APP_NAME)

deploy: down up

# Targets
ps:
	docker ps -f name=$(APP_NAME)

logs:
	docker logs -f $(APP_NAME)

help:
	@echo "Available targets:"
	@echo "  create_network - Create the 'agro_info_netw' network if it doesn't exist"
	@echo "  build    - Build the Docker image"
	@echo "  run      - Build and run the Docker container"
	@echo "  stop     - Stop the Docker container"
	@echo "  remove   - Stop and remove the Docker container"
	@echo "  clean    - Remove the Docker image"
	@echo "  deploy   - Clean and run the Docker container"
	@echo "  ps       - Show status of the Docker container"
	@echo "  logs     - Show logs of the Docker container"
	@echo "  help     - Show this help message"

.PHONY: build run stop remove clean deploy help