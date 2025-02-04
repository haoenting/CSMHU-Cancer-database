# CSMUH-CRS
## Introduction


# 建置環境
前端 : React 18.3.1
後端 : Laravel Framework 11.15.0


# 使用 
1. 下載

先到init.sql中修改資料庫的登入密碼
2. 啟動docker
3. 

## Docker操作
```bash
# 建立容器
docker-compose build
# 停止所有容器
docker compose down
# 移除已停止的容器
docker compose down --volumes
# 重新建立容器
docker compose up -d

