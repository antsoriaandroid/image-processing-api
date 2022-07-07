"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imageUtilities = /** @class */ (function () {
    function imageUtilities() {
    }
    imageUtilities.areParametersValid = function (request) {
        var areValid = true;
        if (this.isNonEmpty(request.query.filename)) {
            areValid = false;
        }
        if (this.isValidNumber(request.query.height)) {
            areValid = false;
        }
        return areValid;
    };
    imageUtilities.isNonEmpty = function (value) {
        return value.length == 0 || value == null; // Or any other logic, removing whitespace, etc.
    };
    imageUtilities.isValidNumber = function (value) {
        var areValid = true;
        var num = parseInt(value); // Or any other logic, removing whitespace, etc.
        if (isNaN(num)) {
            areValid = false;
        }
        else {
            areValid = num > 0;
        }
        return areValid;
    };
    return imageUtilities;
}());
exports.default = imageUtilities;
;
