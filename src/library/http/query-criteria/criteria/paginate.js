"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://github.com/typicode/json-server
var QCPaginate = /** @class */ (function () {
    function QCPaginate(page, limit) {
        if (page === void 0) { page = 0; }
        if (limit === void 0) { limit = 10; }
        this._page = page;
        this._limit = limit;
    }
    QCPaginate.prototype.getParameters = function () {
        return '_page=' + this._page + '&_limit=' + this._limit;
    };
    return QCPaginate;
}());
exports.QCPaginate = QCPaginate;
//# sourceMappingURL=paginate.js.map