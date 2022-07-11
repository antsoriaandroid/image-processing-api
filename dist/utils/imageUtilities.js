"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imageUtilities = /** @class */ (function () {
    function imageUtilities() {
    }
    imageUtilities.areParametersValid = function (request) {
        var areValid = true;
        console.log("Filename: " + request.query.filename);
        if (this.isEmpty(request.query.filename)) {
            areValid = false;
        }
        console.log("Height: " + request.query.height);
        if (!this.isValidNumber(request.query.height)) {
            areValid = false;
        }
        if (!this.isValidNumber(request.query.width)) {
            areValid = false;
        }
        return areValid;
    };
    imageUtilities.isEmpty = function (value) {
        console.log("Is field empty? " + (value == null || value.length == 0));
        return value == null || value.length == 0; // Or any other logic, removing whitespace, etc.
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
        console.log("Is field a number? " + areValid);
        return areValid;
    };
    return imageUtilities;
}());
exports.default = imageUtilities;
