var a = require('./a.js');

var greet = a.greet("Man");

if (typeof document !== 'undefined') {
    var el = document.createElement('h1');
    el.innerHTML = greet;
    document.body.appendChild(el);
} else {
    console.log(greet);
}
