const events = require('events')

class TickTackTaoBoard extends events.EventEmitter {
    #board = [3,3]

    move(row, col, player) {
        this.#board[row, col] = player
        this.emit('move', { row: row, col: col, player: player })
        const winner = this.isWinner()
        if (winner) {
            this.emit('game over', winner)
        }
    }
    isWinner() {
        return process.uptime() % 2 ? "X": "O";
    }
}

const board = new TickTackTaoBoard();

board.on('move', (arg) => console.log("Players move: %o", arg))
board.on('game over', (arg) => console.log("Game over, the winner is: %s", arg))

board.move(1, 2, 'X')
board.move(1, 1, 'O')