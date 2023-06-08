"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Race {
    constructor(name, dexterity) {
        this._name = name;
        this._dexterity = dexterity;
    }
    static createdRacesInstances() {
        throw new Error('Not implemented');
    }
    get name() {
        return this._name;
    }
    get dexterity() {
        return this._dexterity;
    }
}
exports.default = Race;
