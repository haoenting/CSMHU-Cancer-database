# 前端
## 安裝
使用React進行開發
首先安裝Node.js(其中包括npm, npx)
接著建立react app
```sh
npx create-react-app frontend
```
## 預設端口
由於React自帶伺服器功能（預設端口3000）
所以在啟用React app後便能自動運行
```sh
npm start
```
## 內容
### index.js 
React 應用的進入點，專注於應用的啟動和環境配置，負責全局性的初始化工作。
### App.js
應用的核心邏輯容器，專注於應用的業務邏輯和頁面結構，負責定義 UI 和功能。
# 後端 
需要將laravel建置在apache上

1. 打開 httpd.conf 文件
```sh
sudo nano /etc/apache2/httpd.conf
```

確保有以下內容
```sh
LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_http_module modules/mod_proxy_http.so
...
# Virtual hosts
Include /etc/apache2/extra/httpd-vhosts.conf
```

crtl+o 保存文件後enter
ctrl+x退出編輯器

2. 打開 /etc/apache2/extra/httpd-vhost.conf
對laravel進行配置
```bash
<VirtualHost *:80>
    ServerName laravel-app.local
    DocumentRoot "/Users/tinghaoen/CSMHU/backend/public"
    
    <Directory "/Users/tinghaoen/CSMHU/backend/public">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

3. 到laravel資料夾中啟用服務
```bash
sudo apachectl restart
```

# mysql
使用`init.sql`初始化需要用到的資料庫
因為是在docker裡面建立的服務，所以不能直接使用`mysql -u root -p`
要呼叫docker才能檢查
```bash
docker exec -it mysql-container mysql -u root -p
```
輸入密碼進到資料庫管理頁面
```bash
# 顯示所有資料庫
show databases;
# 選擇資料庫
use user_db;
# 顯示所有資料表
show tables;
```




# 前後端連線
由於前後端都在本機，所以可以透過調用api直接連線來交換資料
1. 打開 /etc/apache2/extra/httpd-vhost.conf
並於其中添加規則讓ip連線到預設port:3000
以及本地api服務，連線到port:80(Laravel的預設端口)
```bash
<VirtualHost *:80>
    ServerName localhost

    # Proxy settings for React
    ProxyRequests Off
    ProxyPreserveHost On
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/

    # Proxy settings for Laravel API (if needed)
    # Only accessible internally from React
    <Location "/api">
        ProxyPass http://localhost:80/api
        ProxyPassReverse http://localhost:80/api
        Require local
    </Location>
</VirtualHost>
```

2. 在React app 中的 package.json 設置代理：
```bash
"proxy": "http://localhost:80.test"
```

# Debug
## 檢查連線
```bash
docker exec -it csmhu-frontend-1 sh
apk add curl
curl http://backend:8000/api/test

docker exec -it csmhu-backend-1 sh

```
