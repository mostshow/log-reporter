# log-reporter
log-reporter是一个前端异常监控文件

## Features

- 浏览器引入 && 模块引入
- 前端错误自动上报
- 主动上报try-catch异常

## back-end

- 可以使用[前端日志收集平台](https://github.com/mostshow/log-reporter-platform),上报url填写 'http://[domain]/api/report/log'，也可以自己开发

## How to use

```javascript

    LogReporter.init({
        url: '',
        sampling: 1,
        env: '平台',
        ignore: [],
        debug: false
    })

```





