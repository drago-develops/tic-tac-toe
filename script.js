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

    //Method to collect players positions on board
    const playersPositions = (board) => {
        let setOfPositionsX = []
        let setOfPositionsO = []

        //checks index position of each signs and puts it into an array.
        for (let i = 0; i < board.length ; i++){
            if (board[i] === 'X'){
                setOfPositionsX.push(i);
            } else if (board[i] === 'O'){
                setOfPositionsO.push(i);
            }
        }
        return {setOfPositionsX, setOfPositionsO};
    }

    return {board, placeMark, displayBoard, playersPositions}
}

function createPlayer(name) {
    const playerName = name;

    return {playerName}
}