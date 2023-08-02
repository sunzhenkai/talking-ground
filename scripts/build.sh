#!/bin/bash
set -x
BASE=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
CODE_DIR=$BASE/..
RUNTIME_CONTAINER_IMAGE_VERSION=0.0.4
RUNTIME_CONTAINER_IMAGE=sunzhenkai/node-runtime:$RUNTIME_CONTAINER_IMAGE_VERSION
CONTAINER_NAME=talking-ground-compiler-$RUNTIME_CONTAINER_IMAGE_VERSION

function CreateContainer() {
    NAME=$1
    IMAGE=$2
    CODE_DIR=$3
    docker inspect --format='{{.Name}}' $(docker ps -aq) | grep $NAME
    [ ! $? -eq 0 ] && {
        docker run -it -d --privileged \
            -v $CODE_DIR:/code \
            --name=$NAME $IMAGE
    }
}

function Build() {
    docker exec -t $1 /bin/bash -c "cd /code && make resolve && make build"
}

CreateContainer $CONTAINER_NAME $RUNTIME_CONTAINER_IMAGE "$CODE_DIR"
Build $CONTAINER_NAME
