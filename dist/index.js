"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const PORT = process.env.PORT || "3000";
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send({ success: "true" });
});
app.use('/', routes_1.default);
// TODO: Add swagger API documentation
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map