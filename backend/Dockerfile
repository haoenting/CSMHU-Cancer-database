FROM php:8.2-fpm

WORKDIR /var/www/backend

RUN apt-get update && apt-get install -y \
    curl \ 
    netcat-openbsd \
    libonig-dev \
    libxml2-dev \
    && docker-php-ext-install pdo_mysql mbstring\
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer

COPY . .

RUN composer install --optimize-autoloader --no-dev

EXPOSE 8000
