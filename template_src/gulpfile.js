const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

elixir.config.publicPath = 'www';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
       .less('./node_modules/admin-lte/build/less/AdminLTE.less')
       .less('adminlte-app.less')
       .styles([
            './www/css/AdminLTE.css',
            './www/css/adminlte-app.css',
            './node_modules/admin-lte/dist/css/skins/_all-skins.css',
            './www/css/app.css',
            './node_modules/icheck/skins/square/blue.css',
        ])
       .copy('resources/assets/js/csrftoken.js','www/js/csrftoken.js')
       .copy('node_modules/font-awesome/fonts/*.*','www/fonts/')
       .copy('node_modules/ionicons/dist/fonts/*.*','www/fonts/')
       .copy('node_modules/admin-lte/bootstrap/fonts/*.*','www/fonts')
       .copy('node_modules/admin-lte/dist/css/skins/*.*','www/css/skins')
       .copy('node_modules/admin-lte/dist/img','www/img')
       .copy('node_modules/admin-lte/plugins','www/plugins')
       .copy('node_modules/icheck/skins/square/blue.png','www/css')
       .copy('node_modules/icheck/skins/square/blue@2x.png','www/css')
       .webpack('app.js');
});
