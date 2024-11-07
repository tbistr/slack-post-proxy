FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu-24.04

ARG TARGETARCH \
    NODE_VERSION=v20.18.0 

SHELL ["/bin/bash", "-o", "pipefail", "-c"]
RUN curl -fL "https://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}-linux-${TARGETARCH}.tar.gz" \
    | tar -C /usr/local -xz --strip-components=1

RUN npm install -g @biomejs/biome
RUN npm install -g bun
