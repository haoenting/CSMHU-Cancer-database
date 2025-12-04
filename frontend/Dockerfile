# 使用官方的 Node.js 基本映像
FROM node:18-alpine

# 設置工作目錄
WORKDIR /var/www/frontend

RUN apk add --no-cache curl

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製其他應用程式檔案
COPY . .

# 開放端口 3000 以供外部訪問
EXPOSE 3000