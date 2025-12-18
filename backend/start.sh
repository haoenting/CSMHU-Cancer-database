#!/bin/bash
set -e

echo "讀取 .env..."
export $(grep -v '^#' .env | xargs)

MYSQL_CONTAINER="backend-mysql-1"

echo "啟動 MySQL container..."
./vendor/bin/sail up -d mysql

# 1️⃣ 檢查 container 是否 running
echo "檢查 MySQL container 是否正在執行..."
until docker ps --filter "name=${MYSQL_CONTAINER}" --filter "status=running" | grep -q "${MYSQL_CONTAINER}"; do
    echo "MySQL 容器尚未啟動，等待 2 秒..."
    sleep 2
done

echo "MySQL 容器已啟動，等待 MySQL daemon 啟動..."

# 2️⃣ 等 MySQL daemon ready
until ./vendor/bin/sail exec mysql mysqladmin ping -h"127.0.0.1" --silent >/dev/null 2>&1; do
    echo "MySQL daemon 尚未就緒，等待 2 秒..."
    sleep 2
done

echo "MySQL daemon 已啟動，檢查資料庫是否存在..."

# 3️⃣ 建立兩個資料庫並給權限
for DB in "${DB_DATABASE}" "${PATIENT_DB_DATABASE}"; do
    echo "檢查 / 建立資料庫：$DB"
    ./vendor/bin/sail exec mysql mysql -u root -p${DB_PASSWORD} -e "CREATE DATABASE IF NOT EXISTS \`$DB\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
    ./vendor/bin/sail exec mysql mysql -u root -p${DB_PASSWORD} -e "CREATE USER IF NOT EXISTS '${DB_USERNAME}'@'%' IDENTIFIED BY '${DB_PASSWORD}';"
    ./vendor/bin/sail exec mysql mysql -u root -p${DB_PASSWORD} -e "GRANT ALL PRIVILEGES ON \`$DB\`.* TO '${DB_USERNAME}'@'%';"
done
./vendor/bin/sail exec mysql mysql -u root -p${DB_PASSWORD} -e "FLUSH PRIVILEGES;"

echo "資料庫已建立並授權完成 ✔"

# 4️⃣ 啟動 Laravel（PHP-FPM + nginx）
echo "啟動 Laravel..."
./vendor/bin/sail up -d laravel.test

# 5️⃣ 執行 migration
echo "執行 Laravel migration..."
./vendor/bin/sail artisan migrate --force

# 6️⃣ 啟動 React 前端
echo "啟動 React 前端..."
./vendor/bin/sail npm run dev
