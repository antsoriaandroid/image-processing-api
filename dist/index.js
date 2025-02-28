"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./routes/router"));
var app = (0, express_1.default)();
var port = 3000;
//api/images
app.use("/api", router_1.default);
app.get("/", function (req, res) {
    //    res.send('Hello, world!');
    res
        .status(403)
        .send("Forbidden URL. Well, in a real world service it should not be accesible");
});
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
exports.default = app;
