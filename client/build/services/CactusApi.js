"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CactusApi = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const environment_json_1 = __importDefault(require("../environment/environment.json"));
class CactusApi {
    static newGame() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, node_fetch_1.default)(`${environment_json_1.default.hostUrl}:${environment_json_1.default.apiPort}/game/new`, { method: 'POST' });
            return +(yield response.json())['gameId'];
        });
    }
    static joinGame(gameId, playerName, socketId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, node_fetch_1.default)(`${environment_json_1.default.hostUrl}:${environment_json_1.default.apiPort}/game/player/new`, { method: 'POST', headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    gameId,
                    playerName,
                    socketId
                }) });
            return yield response.json();
        });
    }
    static runGame(gameId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, node_fetch_1.default)(`${environment_json_1.default.hostUrl}:${environment_json_1.default.apiPort}/game/start`, { method: 'POST', headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    gameId
                }) });
        });
    }
}
exports.CactusApi = CactusApi;
