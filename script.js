const PLAYfIELD_COLUMNS = 10;
const PLAYfIELD_ROWS = 20;
const TETOMINO_NAMES = ["O"];
const TETROMINOES = {
    "O": [[1]]
}
let tetromino = {
    name:"",
    matrix:[],
    column:0,
    row:0,
}
function generateTetromino() {
    const nameTetro = TETOMINO_NAMES[0]
    const matrix = TETROMINOES[0]

    const columnTetro=4;
    const rowsTetro=5;
    const tetromino = {
        name: nameTetro,
        matrix:matrix,
        column:columnTetro,
        row:rowsTetro
    }


}
function drawPlayfield() {
    // const name = tetromino.name;
    // const tetrominoMatrixSize = tetromino.matrix.length
    for (let row = 0; row < PLAYfIELD_ROWS; row++) {

       for (let column = 0; column < PLAYfIELD_ROWS; column++) {
       
        const nameFigure = "O";
        const cellIndex=20

        cells[cellIndex].classList.add(nameFigure)
        
       }
        
    }
}

function generatePlayfield() {
for (let i = 0; i < PLAYfIELD_COLUMNS*PLAYfIELD_ROWS; i++) {
    const div = document.createElement("div");
    document.querySelector(".tetris").append(div)
   
}
}




generateTetromino();


generatePlayfield();
let cells = document.querySelectorAll(".tetris div")
console.log(cells)



drawPlayfield();
