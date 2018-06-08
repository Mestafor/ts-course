var menuList = [
    {
        title: 'JavaScript',
        items: ['Angular', 'React', 'Vue']
    }, {
        title: 'Dart',
        items: ['Angular', 'Polymer']
    }
];
function generateMenu(list) {
    var content = "<ul>";
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var a = list_1[_i];
        content += "<li><a class='title'>" + a.title + "</a><ul>";
        for (var _a = 0, _b = a.items; _a < _b.length; _a++) {
            var item = _b[_a];
            content += "<li><a>" + item + "</a></li>";
        }
        content += '</li></ul>';
    }
    content += '</ul>';
    return content;
}
console.log(generateMenu(menuList));
function isString(param) {
    return typeof param === 'string';
}
function getAvarage(a, b, c) {
    var total = 0;
    if (isString(a)) {
        total += parseInt(a, 10);
    }
    else {
        total += 0;
    }
    return total;
}
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton._instance) {
            console.log('create instance');
            Singleton._instance = new Singleton;
        }
        console.log('return instance');
        return Singleton._instance;
    };
    return Singleton;
}());
Singleton.getInstance();
Singleton.getInstance();
Singleton.getInstance();
Singleton.getInstance();
