import fetch from 'node-fetch';

import config from '../../environment/environment.json';

export class CactusApi {
    static async newGame(): Promise<number> {
        const response = await fetch(`${config.hostUrl}/game/new`, {method: 'POST'});
        return +(await response.json())['gameId'];
    }

    static async joinGame(gameId, playerName, socketId): Promise<{playerId: number, secretKey: number, name: number}> {
        const response = await fetch(`${config.hostUrl}/game/player/new`, {method: 'POST', headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            gameId,
            playerName,
            socketId
        })});
        return await response.json();
    }

    static async runGame(gameId) {
        await fetch(`${config.hostUrl}/game/start`, {method: 'POST', headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            gameId
        })});    
    }
}