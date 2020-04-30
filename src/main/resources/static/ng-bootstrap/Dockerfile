FROM node:13.3.0-alpine3.10

MAINTAINER SammiLiu<minliu@cn.ibm.com>

ENV PORT=4200 \
    NODE_ENV=dev

RUN npm install express@4.17.1 -g \
    && npm install -g @angular/cli \
	&& npm install -g typescript   \
    && npm install -g typings

RUN mkdir -p /workspace

COPY . /workspace
WORKDIR /workspace

RUN npm install && ng build --base-href

EXPOSE ${PORT}

ENTRYPOINT ["node", "/workspace/server.js"]