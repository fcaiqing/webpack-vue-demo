/**
 * Created by admin on 2017/3/22.
 */
//我们这里使用CommonJS的风格
function generateText() {
    var element = document.createElement('h2');
    element.innerHTML = "Hello h2 world.I'll change automatically!";
    return element;
}
module.exports = generateText;