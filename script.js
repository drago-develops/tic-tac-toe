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

    //method upon calling checks if there is a match
    const checkWinnigPositions = (board, playerSign) =>{
        //all possible combinations to win the game in 3x3 matrix 
        let winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        //using Array.some() to check if any of the combination are present on the board
        //then using Array.every to check if each element index(ed) matches the sign and position.
        //returns true if winning match found and false otherwise. 
        return winningCombinations.some(combinations => {
            return combinations.every(index =>{
                return board[index] === playerSign;
            })
        }) 
        
    }

    //method to check for a draw
    const checkDraw = (board) => {
        //examines if each element in the array is not null value;
        //if true then returns true if any null value present returns false
        return board.every(element => {
            return !(element === null);
        })        
    }

    return {board, placeMark, displayBoard, playersPositions, checkWinnigPositions, checkDraw}
}

function createPlayer(name) {
    const playerName = name;

    return {playerName}
}