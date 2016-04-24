# random-geojson

> Generate a random geojson.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-geojson/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-geojson/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-geojson)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-geojson/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-geojson)


## Install

```
$ npm install --save random-geojson 
```

## Usage

```js
var randomGeoJson = require('random-geojson');

// API
// - randomGeoJson();
// - randomGeoJson(fixed);

randomGeoJson();
// => "-29.52974, 24.52815, 3578.76351"
```

By default includes `5` fixed digits after decimal, can specify otherwise.

```js
randomGeoJson(2)
// => "-49.16, 68.81, 239.58"
```

## Related

- [random-geojson](https://github.com/mock-end/random-geojson) - Generate a random geojson.
- [random-altitude](https://github.com/mock-end/random-altitude) - Generate a random altitude, in meters.
- [random-depth](https://github.com/mock-end/random-depth) - Generate a random depth, in meters. Depths are always negative.
- [random-coordinates](https://github.com/mock-end/random-coordinates) - Generate a random coordinates, which are latitude and longitude, comma separated.
- [random-latitude](https://github.com/mock-end/random-latitude) - Generate a random latitude.
- [random-longitude](https://github.com/mock-end/random-longitude) - Generate a random longitude.
- [random-country](https://github.com/mock-end/random-country) - Return a random country. 
- [random-lang](https://github.com/mock-end/random-lang) - Return a random language name.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-geojson/issues/new).
