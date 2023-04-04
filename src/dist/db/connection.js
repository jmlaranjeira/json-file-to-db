"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('test', 'developer', 'developer', {
    host: 'localhost',
    dialect: 'mariadb',
    port: 3307
});
exports.default = db;
//# sourceMappingURL=connection.js.map