# gedcomx-fs-js

[![npm](https://img.shields.io/npm/v/gedcomx-fs-js.svg?maxAge=2592000)](https://www.npmjs.com/package/gedcomx-fs-js)
[![Build Status](https://travis-ci.org/rootsdev/gedcomx-fs-js.svg?branch=master)](https://travis-ci.org/rootsdev/gedcomx-fs-js)
[![codecov](https://codecov.io/gh/rootsdev/gedcomx-fs-js/branch/master/graph/badge.svg)](https://codecov.io/gh/rootsdev/gedcomx-fs-js)

JavaScript library for FamilySearch extensions to the GEDCOM X spec. Designed to
be used with [gedcomx-js](https://github.com/rootsdev/gedcomx-js).

## Install

First install [gedcomx-js](https://github.com/rootsdev/gedcomx-js).

__NPM__

```
npm install --save gedcomx-js gedcomx-fs-js
```

__CDN via [unpkg](https://unpkg.com/#/)__

```html
<script src="https://unpkg.com/gedcomx-fs-js@1.3.0/dist/gedcomx-fs.min.js"></script>
```

In the browser, gedcomx-fs-js is attached to the `window` as a global named `GedcomxFS`.

#### Full Build

As of 1.3.1 we also publish a full build which includes gedcomx-js and thus
doesn't require you to install or include it seperately and also doesn't
require you to call `GedcomX.addExtensions()` as documented below.

## Usage

```js
// First load gedcomx-js. Then we register the FS extensions.
GedcomX.addExtensions(GedcomxFS);
```