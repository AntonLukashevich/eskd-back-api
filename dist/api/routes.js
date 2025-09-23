"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchErrors = void 0;
const express_1 = require("express");
const catchErrors = (fn) => {
    return function (req, res, next) {
        return fn(req, res, next).catch(next);
    };
};
exports.catchErrors = catchErrors;
const app = (0, express_1.Router)();
exports.default = app;
