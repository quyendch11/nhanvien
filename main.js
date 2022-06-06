"use strict";
exports.__esModule = true;
var staff_1 = require("./staff");
var staff = new staff_1.Staff("quyen", "quyen@gmail.com", 30);
staff.Name;
console.log(staff.Name);
staff.Name = "long";
console.log(staff.Name);
