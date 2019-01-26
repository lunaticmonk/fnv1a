# fnv1a [![Build Status](https://travis-ci.org/sindresorhus/fnv1a.svg?branch=master)](https://travis-ci.org/sindresorhus/fnv1a)

> [FNV-1a](https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function) non-cryptographic hash function

[FNV-1a has outstanding distribution and collisions are rare.](https://softwareengineering.stackexchange.com/questions/49550/which-hashing-algorithm-is-best-for-uniqueness-and-speed/145633#145633)

FNV hashes are designed to be fast while maintaining a low collision rate. The FNV speed allows one to quickly hash lots of data while maintaining a reasonable collision rate. The high dispersion of the FNV hashes makes them well suited for hashing nearly identical strings such as URLs, hostnames, filenames, text, IP addresses, etc.


## Install

```
$ npm install @sindresorhus/fnv1a
```


## Usage

```js
const fnv1a = require('@sindresorhus/fnv1a');

const bitFlavour = 32;
fnv1a('🦄🌈', bitFlavour);
//=> 582881315

const anotherBitFlavour = 128;
fnv1a('🦄🌈', anotherBitFlavour);
//=> 11415202058807559249595270122456073815781937336796505892202057358875n
```

Operations involving 32 and 64 bits return a positive integer and rest(128, 256, 512, 1024) return a Big Integer (BigInt)(Node 10.4.0+).

## Related

- [djb2a](https://github.com/sindresorhus/djb2a) - DJB2a non-cryptographic hash function
- [sdbm](https://github.com/sindresorhus/sdbm) - SDBM non-cryptographic hash function


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
