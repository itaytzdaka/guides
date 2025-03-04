// create a project:
composer create-project laravel/laravel myapp

//create a laravel project with react:
composer global require laravel/installer
laravel new myapp
npm create vite

// run laravel project:
php artisan serve

//create a controller:
php artisan make:controller CustomersController

//create a controller with empty functions for traditional server-rendered web applications.
php artisan make:controller CustomersController --resource

//create a controller with api functions for frontend frameworks like Vue.js, React.js
php artisan make:controller CustomersController --api

//create a model:
php artisan make:model Customer

//create a model with migration file:
php artisan make:model Customer -m

//create a migration:
php artisan make:migration migrationName

//run all the migrations:
php artisan migrate

//see routes:
php artisan route:list

//create a resource
php artisan make:resource ResourceName

//create a seeder:
php artisan make:seeder UsersTableSeeder

//run a seeder:
php artisan db:seed --class=UsersTableSeeder

//run all seeders:
php artisan db:seed