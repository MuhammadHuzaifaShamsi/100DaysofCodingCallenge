// QUESTION: 48
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptopPrices1 = [10000, 15000, 20000];
var laptopPrices2 = [12000, 22000, 32000];
var sortedPrices = __spreadArray(__spreadArray([], laptopPrices1, true), laptopPrices2, true).sort(function (a, b) { return a - b; });
console.log(sortedPrices);
