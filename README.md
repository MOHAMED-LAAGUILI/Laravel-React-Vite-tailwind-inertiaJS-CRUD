# Laravel Inertia React Setup

## Video Reference
[YouTube Video](https://www.youtube.com/watch?v=qBxo6hW83jU&list=PL38wFHH4qYZVOnXxcS0NMGGmUsZky6JNG)

---

## Server-Side Setup

### 1. Create Laravel Project
```sh
composer create-project laravel/laravel laravel-inertia-react
```
```sh
cd "laravel-inertia-react"
```

### 2. Add React to Laravel
```sh
npm install react react-dom
```

### 3. Add Vite
```sh
npm install --save-dev @vitejs/plugin-react
```

### 4. Add Inertia to Laravel
[Inertia Server-Side Setup](https://inertiajs.com/server-side-setup)
```sh
composer require inertiajs/inertia-laravel
```

### 5. Create `app.blade.php` in `resources/views/`
Rename `welcome.blade.php` or create a new file and add the following code:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>
```

### 6. Create Inertia Middleware
```sh
php artisan inertia:middleware
```

### 7. Add Middleware in `bootstrap/app.php`
Locate this part and update it:

```php
$middleware->web(append: [
    HandleInertiaRequests::class,
]);
```

Inside this function:

```php
->withMiddleware(function (Middleware $middleware) {

})
```

Also, import the middleware at the top:

```php
use App\Http\Middleware\HandleInertiaRequests;
```

---

## Client-Side Setup

[Inertia Client-Side Setup](https://inertiajs.com/client-side-setup)

### 1. Install Inertia React
```sh
npm install @inertiajs/react
```

### 2. Update `resources/js/app.js`
Paste the following code below the Bootstrap import:

```js
import'../css/app.css'

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    return pages[`./Pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
```

### 3. Rename `app.js` to `app.jsx`

### 4. Configure `vite.config.js`
Add the React plugin below the Laravel import:

```js
import react from '@vitejs/plugin-react'
```

Modify the plugins section to include React:

```js
plugins: [
    laravel({
        input:  'resources/js/app.jsx',
        refresh: true,
    }),
    react(),
],
```

Remove `app.css` and rename `.js` files to `.jsx` where necessary.

### 5. Create `Pages` Directory and First Component
Inside `resources/js`, create a folder named `Pages` and add a file named `Home.jsx`.

### 6. Configure Route in `routes/web.php`

```php
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});
```
or in other way

```php
Route::inertia('/','Home');
```

### 7. Run the Development Servers
```sh
php artisan serve
npm run dev
```



### 8. to add tailwind 
check theonline oficciale doc laravel with tailwind

```js
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.jsx',
        './resources/**/*.js',

    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
```

### 8. to configure vite to use alias  @ instead of complete path add this option the vite.config.js

```js
   resolve:{
       alias:{
        '@':'/resources/js'
       } 
    }
```

### 9. to make a model with it controller and factories and seeders 

```bash
php artisan make:model "Name goes here" -a
```


### 10.to allow using routes in react

Ziggy helps by allowing you to generate Laravel route URLs in JavaScript easily.

```bash
composer require tightenco/ziggy
```
add the @routes to the app.blade.php
Example usage in Inertia with Ziggy routing:
https://inertiajs.com/routing
https://github.com/tighten/ziggy
https://www.youtube.com/watch?v=DpinylMqOqk&list=PL38wFHH4qYZVOnXxcS0NMGGmUsZky6JNG&index=11
```jsx
import { useRoute } from "../../../vendor/tightenco/ziggy";

const route = useRoute();

<Link href={route("posts.show", post)}>View Post</Link>
```