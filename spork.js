const canvas = document.getElementById("gameboard");
const gameboard = canvas.getContext('2d');
gameboard.fillStyle = 'silver';
gameboard.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

brick_width = canvas.clientWidth / 16;
brick_height = 24;

let paintBrick = function (column, row, color) {
    gameboard.fillStyle = color;
    ox = column * brick_width;
    oy = 48 + row * (brick_height + 4);
    gameboard.fillRect(ox, oy, brick_width - 1, brick_height - 1);
}
broken = 'black';
colors = ['pink', 'aqua', jade="#00A36C", amber="#FFC300"]
for (x = 0; x < 16; x++) {
    for (y = 0; y < 4; y++) {
        paintBrick(x, y, colors[y]);
    }
}