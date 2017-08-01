FROM nginx

ADD nginx.conf /etc/nginx/conf.d/nginx.conf

WORKDIR /src

RUN echo "{\n  \"proxy\":\"$HTTP_PROXY\",\n  \"https-proxy\":\"$HTTPS_PROXY\",\n  \"directory\": \"bower_components\"\n}" > .bowerrc

RUN apt-get update -y \
 && apt-get install -y curl gnupg \
 && curl -sL https://deb.nodesource.com/setup_6.x | bash - \
 && apt-get install -y nodejs \
 && apt-get autoremove -y curl gnupg \
 && rm -rf /var/lib/apt/lists/*

RUN npm config set proxy $HTTP_PROXY
RUN npm config set https-proxy $HTTPS_PROXY

ADD package.json /src
RUN npm install


ADD bower.json /src

RUN apt-get update -y \
 && apt-get install -y git \
 && git config --global http.proxy $HTTP_PROXY \
 && git config --global https.proxy $HTTPS_PROXY \
 && $(npm bin)/bower install --allow-root \
 && apt-get autoremove -y git \
 && rm -rf /var/lib/apt/lists/*

RUN npm install -g grunt
RUN apt-get update -y \
 && apt-get install -y ruby-full build-essential \
 && gem install compass \
 && apt-get autoremove -y build-essential \
 && rm -rf /var/lib/apt/lists/*

# Loading "grunt-karma.js" tasks...ERROR
# >> Error: Cannot find module 'karma'
RUN npm install phantomjs jasmine-core jasmine karma grunt-karma grunt-contrib-compass

ADD . /src
RUN grunt build
