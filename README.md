# rewrap-patch

Monkey patch on String.prototype for the npm package [rewrap](https://github.com/taijiweb/rewrap).

Most of time you do NOT need this package, except that you need str.match(someRewrap, data) and the like.

See [rewrap](https://github.com/taijiweb/rewrap) for more information.

## usage
  `npm install rewrap`  
  `npm install rewrap-patch`

```js
require('rewrap-patch');    // done!
                            // this package just patch String.prototype
                            //it does not generate any exports.
```

## document
Just see index.js
