"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "saideep",
    email: "saideep22@gmail.com",
    isActive: true
}; // Bad way of creating objects
function newUser(_a) {
    var string = _a.name, boolean = _a.isActive;
    return { name: this.name, isActive: this.isActive };
}
newUser({ name: "saideep", isActive: true });
