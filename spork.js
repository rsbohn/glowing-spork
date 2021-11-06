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
colors = ['pink', 'aqua', jade = "#00A36C", amber = "#FFC300"]
for (n = 0; n < 64; n++) {
    x = n % 16;
    y = Math.floor(n / 16);
    paintBrick(x, y, colors[y])
}

let jumble = function(color) {
    for (n = 0; n < 64; n++) {
        x = n % 16; y = Math.floor(n / 16);
        if (Math.random() < 0.3) {
            paintBrick(x,y,color);
        }
    }
}