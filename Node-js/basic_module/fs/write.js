/**
 * Created by tage on 11/25/16.
 */
'use strict';
var fs = require('fs');
var data = 'Hello, Node.js';
fs.writeFile('output.txt',data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }

});


fs.writeFileSync('output.txt', '123');
console.log('sync');
