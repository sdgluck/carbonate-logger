# carbonate-logger

> Colourful console logs using carbonate

## Install

```sh
npm install --save carbonate-logger
```

```sh
yarn add carbonate-logger
```

## Import

```js
// ES2015
import log from 'carbonate-logger'
```

```sh
// CommonJS
var log = require('carbonate-logger')
```

## Usage

### `log (str[, ...values])`

Log a carbonate sprintf-style string, interpolated with `values`.

- __str__ {String} (required) String to interpolate and log
- __values__ {*} (optional) Values to interpolate into `str`

See the [`carbonate`](https://github.com/sdgluck/carbonate) docs for information on what `str` should look like.

Also available: 

- `log.error (str[, ...values])`
- `log.warn (str[, ...values])`
- `log.info (str[, ...values])`

### `log.quiet (bool)`

Pass `true` to silence the logger.

- __bool__ {Boolean} (required) Is logger silent

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out the [great video tutorials on egghead.io](http://bit.ly/2aVzthz)!

## License

MIT © [Sam Gluck](github.com/sdgluck)
