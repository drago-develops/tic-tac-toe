//Factory function to create Gameboard object.
function Gameboard() {
    //private gameboard array
    let board = Array(9).fill(null);

    const displayBoard = () => board; //to display board in the console

    //Method to place a mark on the board
    const placeMark = (position, mark) => {
        if(board[position] === null ) {
            board[position] = mark;
            return true; //Mark placed succefully
        }
        return false; // position aleready taken
    }
    

    return {board, placeMark, displayBoard}
}

function createPlayer(name) {
    const playerName = name;

    return {playerName}
}