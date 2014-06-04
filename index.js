var memcached = require('memcached'),
    cacheName = 'someKey';

memcached.get(cacheName, function (err, data) {
    /* Do what do you want here */
});



