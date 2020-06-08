// const names: Array<string> = []; // string[]
// // names[0].split(' ');
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function countAndDescribe(element) {
    var descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('caio'));
console.log(countAndDescribe(['caio', 'teste']));
// console.log(countAndDescribe(10))
function extractAndConvert(param1, param2) {
    return 'Value: ' + param1[param2];
}
extractAndConvert({ name: 'caio' }, 'name');
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArrays(this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('10');
textStorage.addItem('11');
// textStorage.removeItem('10')
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
numberStorage.addItem(10);
numberStorage.addItem(11);
console.log(numberStorage.getItems());
