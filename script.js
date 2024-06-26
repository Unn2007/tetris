const PLAYfIELD_COLUMNS = 10;
const PLAYfIELD_ROWS = 10;
function generatePlayfield() {
for (let i = 0; i < PLAYfIELD_COLUMNS*PLAYfIELD_ROWS; i++) {
    const div = document.createElement("div");
    document.querySelector("tetris").append(div)
}
}