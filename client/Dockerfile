FROM nginx

COPY . /src
RUN ln -s /src/nginx.conf /etc/nginx/conf.d/nginx.conf

WORKDIR /src

RUN apt-get update -y && apt-get install -y curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs
RUN npm install --dev
RUN npm run bower -- install --allow-root
RUN npm run grunt -- build
