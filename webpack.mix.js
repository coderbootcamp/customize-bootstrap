const mix = require('laravel-mix');

mix.sass('sass/index.scss', 'dist')
   .setPublicPath('dist');