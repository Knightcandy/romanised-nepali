# RomonisedNepali

An node module to convert romonised input to nepali unicode characters. 
This node module is based on Romonised Nepali to Unicode converter from [ashesh.com.np](http://www.ashesh.com.np/nepali-unicode.php)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation


```sh
$ npm install -g romonisednepali 
```
OR 

Manully:

```sh
$ git clone  https://github.com/psuzn/romonisedNepali.git
$ cd romonisedNepali
$ npm install -g 
```
## Usage

- Import it into your project
```js
let conveter=requre('romonisednepali');
let converted=converter.comvert("namaskar");
console.log(converted);
//नमस्कार 

```
if you passed characters inside {} they won't be converted
```js
let conveter=requre('romonisednepali');
let converted=converter.comvert("namaste {Nepal}");
console.log(converted);
//नमस्ते Nepal 

```
It supports all the conversion techniques as written [here](http://www.ashesh.com.np/nepali-unicode.php)

## Support

Please [open an issue](https://github.com/psuzn/romonisedNepali/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/psuzn/romonisedNepali/compare/).