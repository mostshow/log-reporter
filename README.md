# log-reporter
[![npm](https://img.shields.io/badge/npm-v0.1.1-blue.svg)](https://www.npmjs.com/package/log-reporter)

A lightweight client-side logger, useful for production.

## Logging levels

There are four levels of logs:

```javascript
var log = LogReporter;

log.info('This is info log record');
log.warn('This is warn log record');
log.error('This is error log record');
log.send('This is custom log record');
```

## Usage

```html
<script src="dist/logReport.js"></script>
```
or
```javascript

    let FrontLog = require('log-reporter');
    LogReporter.init({
        url: '',
        sampling: 1,
        env: 'platform',
        ignore: [],
        debug: false
    })

```
## back-end

- [log-reporter-platform](https://github.com/mostshow/log-reporter-platform)

## Example

See `test/index.html`.




