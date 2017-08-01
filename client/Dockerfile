FROM nginx

ADD nginx.conf /etc/nginx/conf.d/nginx.conf

WORKDIR /src

RUN echo "{\n  \"proxy\":\"$HTTP_PROXY\",\n  \"https-proxy\":\"$HTTPS_PROXY\",\n  \"directory\": \"bower_components\"\
n}" > .bowerrc
RUN git config --global http.proxy $HTTP_PROXY
RUN git config --global https.proxy $HTTPS_PROXY
RUN npm config set proxy $HTTP_PROXY
RUN npm config set https-proxy $HTTPS_PROXY

RUN apt-get update -y \
 && apt-get install -y curl gnupg \
 && curl -sL https://deb.nodesource.com/setup_6.x | bash - \
 && apt-get install -y nodejs \
 && apt-get autoremove -y curl gnupg \
 && rm -rf /var/lib/apt/lists/*

RUN npm install

# RUN npm install phantomjs jasmine-core jasmine karma grunt-karma grunt-contrib-compass

RUN $(npm bin)/bower install --allow-root

RUN npm install -g grunt
RUN apt-get update -y \
 && apt-get install -y git ruby-full build-essential \
 && gem install compass
 && rm -rf /var/lib/apt/lists/*
RUN grunt build
