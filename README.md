# Множественное число для русского языка

```js
var pluralize = require('prostore.pluralize');

pluralize(10, '% овца', '%s овцы', '%s овец');  // 10 овец

var sheeps = pluralize.formatter('% овца', '%s овцы', '%s овец');

sheeps(1); // 1 овца
sheeps(2); // 2 овцы
sheeps(5); // 5 овец
sheeps(101); // 101 овца
sheeps(102); // 102 овцы
sheeps(111); // 111 овец
```
