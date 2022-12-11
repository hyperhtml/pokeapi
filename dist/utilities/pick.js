"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = void 0;
const pick = (obj, ...keys) => {
    const copy = {};
    keys.forEach(key => copy[key] = obj[key]);
    return copy;
};
exports.pick = pick;
//# sourceMappingURL=pick.js.map