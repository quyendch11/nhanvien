"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const staff_1 = require("./staff");
let staff = new staff_1.Staff("quyen", "quyen@gmail.com", 30);
staff.Name;
console.log(staff.Name);
staff.Name = "long";
console.log(staff.Name);
