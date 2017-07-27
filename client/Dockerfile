FROM nginx

COPY . /src
RUN ln -s /src/nginx.conf /etc/nginx/conf.d/nginx.conf

WORKDIR /src

RUN apt-get update -y && apt-get install -y curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs
RUN npm install
RUN npm install -g bower grunt
RUN bower install --allow-root
RUN grunt build
