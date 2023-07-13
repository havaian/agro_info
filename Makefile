mongo_on:
	docker run -d -p 27017:27017 --name mongodb -v ~/mongodb/data:/data/db 
mongo_off:
	docker down mongodb
mongo_kill:
	docker kill mongodb
mongo_rm:
	docker rm -f mongodb
mongo_stat:
	docker ps --filter "name=mongodb"
mongo_insp:
	docker inspect mongodb