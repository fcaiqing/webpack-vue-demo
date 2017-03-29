/**
 * Created by admin on 2017/3/22.
 */
require('../src/css/test3.css');
require('../src/css/test.less');
require('../src/css/main.scss');
require('../src/css/main2.scss');
const sub = require('./sub.js');
const app  = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub());
document.body.appendChild(app);
const Vue = require('../src/libs/vue');
//Vue组件
// var xx = require('../src/components/nima.vue');
const App =require('../src/components/nima.vue');
new Vue({
    el: '#app',
    data: {
        message: "Hello vue.js!"
    },
    components: {
        "my-component": App
    }
});