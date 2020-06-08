TypeScript Jest "beforeEach" Outside "describe" Demo
===========================

观察`beforeEach`放在describe前中后的行为。

在describe之外的beforeEach只对当前test file有效，这跟mocha不一样

```
npm install
npm test
```
