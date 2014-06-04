node-memcached
==============

Адаптер для memcached использующий модуль config для удобства.

Пример
------

```
    var memcached = require('memcached'),
        cacheName = 'someKey';
    
    memcached.get(cacheName, function (err, data) {
        /* Do what do you want here */
    });
```
