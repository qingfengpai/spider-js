# 食堂消费记录

## 使用方法

- 新建config.ini配置文件
- 运行`casperjs casper.js`

## config.ini
```
{
    "url": "http://172.31.7.16/accounthisTrjn.action",
    "dump_file": "data/total.txt",
    "cookie": {
        "name": "",
        "value": "",
        "domain": "172.31.7.16"
    },
    "casper": {
        "verbose": true,
        "logLevel": "debug",
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X)AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
        "pageSettings": {
            "loadPlugins": false
        },
        "waitTimeout": 15000,
        "viewportSize": {
            "width": 1200,
            "height": 780
        }
    }
}
```