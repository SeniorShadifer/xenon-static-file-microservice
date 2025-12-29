all: build


build:
	npm run build
	go build

run:
	make build
	./static_file_microservice