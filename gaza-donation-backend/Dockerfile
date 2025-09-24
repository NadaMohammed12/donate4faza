FROM php:8.2-fpm

# تثبيت التبعيات
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    curl \
    git \
    libpq-dev

# تثبيت الامتدادات المطلوبة
RUN docker-php-ext-install pdo pdo_pgsql
RUN docker-php-ext-install pdo pdo_pgsql mbstring exif pcntl bcmath gd



# نسخ ملفات المشروع
WORKDIR /var/www/html
COPY . .

# تثبيت Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

