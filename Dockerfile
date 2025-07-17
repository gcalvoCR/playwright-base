FROM mcr.microsoft.com/playwright:v1.54.1-focal

COPY [".", "/usr/src/"]

WORKDIR /usr/src/

RUN npm install

CMD ["npm", "test"]