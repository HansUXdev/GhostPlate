# Tasks
These tasks are powered by google puppetter and make life so fun and easy. I hope you enjoy them enough to make your own scripts.



# Resources
1. https://github.com/checkly/puppeteer-examples



# FireFox issues
**Official Firefox support is currently experimental. **
You may need to run `PUPPETEER_PRODUCT=firefox npm i puppeteer` in order allow firefox to work.

```
FIRE Error: Protocol error (Page.navigate): url: string value expected navigate@chrome://remote/content/domains/parent/Page.jsm:107:13
execute@chrome://remote/content/domains/DomainCache.jsm:99:25
execute@chrome://remote/content/sessions/Session.jsm:64:25
execute@chrome://remote/content/sessions/TabSession.jsm:67:20
onPacket@chrome://remote/content/Connection.jsm:225:36
onMessage@chrome://remote/content/server/WebSocketTransport.jsm:85:18
handleEvent@chrome://remote/content/server/WebSocketTransport.jsm:67:14

    at /Users/hans/Desktop/github/OpenSource/Bootstrap5-Rapid-Design-Boilerplate/Tests/node_modules/puppeteer/lib/cjs/puppeteer/common/Connection.js:208:63
    at new Promise (<anonymous>)
    at CDPSession.send (/Users/hans/Desktop/github/OpenSource/Bootstrap5-Rapid-Design-Boilerplate/Tests/node_modules/puppeteer/lib/cjs/puppeteer/common/Connection.js:207:16)
    at navigate (/Users/hans/Desktop/github/OpenSource/Bootstrap5-Rapid-Design-Boilerplate/Tests/node_modules/puppeteer/lib/cjs/puppeteer/common/FrameManager.js:106:47)
    at FrameManager.navigateFrame (/Users/hans/Desktop/github/OpenSource/Bootstrap5-Rapid-Design-Boilerplate/Tests/node_modules/puppeteer/lib/cjs/puppeteer/common/FrameManager.js:89:13)
    at Frame.goto (/Users/hans/Desktop/github/OpenSource/Bootstrap5-Rapid-Design-Boilerplate/Tests/node_modules/puppeteer/lib/cjs/puppeteer/common/FrameManager.js:405:41)
    at Page.goto (/Users/hans/Desktop/github/OpenSource/Bootstrap5-Rapid-Design-Boilerplate/Tests/node_modules/puppeteer/lib/cjs/puppeteer/common/Page.js:826:53)
    at /Users/hans/Desktop/github/OpenSource/Bootstrap5-Rapid-Design-Boilerplate/Tests/firefox.js:16:16
    at processTicksAndRejections (internal/process/task_queues.js:82:5) {
  message: 'Protocol error (Page.navigate): url: string value expected navigate@chrome://remote/content/domains/parent/Page.jsm:107:13\n' +
    'execute@chrome://remote/content/domains/DomainCache.jsm:99:25\n' +
    'execute@chrome://remote/content/sessions/Session.jsm:64:25\n' +
    'execute@chrome://remote/content/sessions/TabSession.jsm:67:20\n' +
    'onPacket@chrome://remote/content/Connection.jsm:225:36\n' +
    'onMessage@chrome://remote/content/server/WebSocketTransport.jsm:85:18\n' +
    'handleEvent@chrome://remote/content/server/WebSocketTransport.jsm:67:14\n'
}
```