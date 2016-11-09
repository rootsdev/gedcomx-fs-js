# gedcomx-fs-js

[![npm](https://img.shields.io/npm/v/gedcomx-fs-js.svg?maxAge=2592000)](https://www.npmjs.com/package/gedcomx-fs-js)
[![Build Status](https://travis-ci.org/rootsdev/gedcomx-fs-js.svg?branch=master)](https://travis-ci.org/rootsdev/gedcomx-fs-js)
[![codecov](https://codecov.io/gh/rootsdev/gedcomx-fs-js/branch/master/graph/badge.svg)](https://codecov.io/gh/rootsdev/gedcomx-fs-js)

JavaScript library for FamilySearch extensions to the GEDCOM X spec. Designed to
be used with [gedcomx-js](https://github.com/rootsdev/gedcomx-js).

## Install

NPM

```
npm install --save gedcomx-fs-js
```

CDN via [unpkg](https://unpkg.com/#/)

```html
<script src="https://unpkg.com/gedcomx-fs-js@1.1.0/dist/gedcomx-fs.min.js"></script>
```

## Usage

```js
// Enable the FamilySearch extensions
FSExtensions(GedcomX);
```