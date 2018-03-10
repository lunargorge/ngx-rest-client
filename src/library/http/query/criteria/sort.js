"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QCSort = /** @class */ (function () {
    function QCSort(sort, order) {
        if (sort === void 0) { sort = ''; }
        if (order === void 0) { order = 'asc'; }
        this._sort = sort;
        this._order = order;
    }
    QCSort.prototype.getParameters = function () {
        return '';
    };
    return QCSort;
}());
exports.QCSort = QCSort;
//# sourceMappingURL=sort.js.map