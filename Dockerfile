FROM ubuntu:latest
LABEL authors="romels"

ENTRYPOINT ["top", "-b"]