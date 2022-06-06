"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var app_1 = __importDefault(require("./app"));
dotenv_1.config();
app_1.default.listen(process.env.PORT || 3333, function () {
    console.log("Server started on port " + (process.env.PORT || 3333) + "!");
});
